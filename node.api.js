const path = require('path')

function patchPostCssLoaders(webpackConfig) {
  const tailwindcss = require('tailwindcss')
  const autoprefixer = require('autoprefixer')

  const tailwindConfigPath = path.resolve(__dirname, 'tailwind.config.js')

  const postCssPlugins = () => [tailwindcss(tailwindConfigPath), autoprefixer()]

  const patchLoaderEntry = entry => {
    if (!entry) return
    if (typeof entry === 'string') return
    if (!entry.loader || !String(entry.loader).includes('postcss-loader')) return

    entry.options = {
      ...(entry.options || {}),
      // react-static uses postcss-loader v3 options shape
      plugins: postCssPlugins,
    }
  }

  const patchRule = rule => {
    if (!rule) return
    const loaders = Array.isArray(rule.use)
      ? rule.use
      : Array.isArray(rule.loader)
        ? rule.loader
        : []

    loaders.forEach(patchLoaderEntry)
  }

  const walkRules = rules => {
    if (!Array.isArray(rules)) return
    rules.forEach(rule => {
      if (!rule) return
      if (Array.isArray(rule.oneOf)) {
        walkRules(rule.oneOf)
        return
      }
      if (Array.isArray(rule.rules)) {
        walkRules(rule.rules)
      }
      patchRule(rule)
    })
  }

  walkRules(webpackConfig?.module?.rules)

  return webpackConfig
}

exports.default = () => ({
  webpack: (webpackConfig /*, state */) => patchPostCssLoaders(webpackConfig),
})

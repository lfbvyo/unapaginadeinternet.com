const withOpacity = cssVariableName => {
  return ({ opacityVariable, opacityValue }) => {
    if (typeof opacityValue !== 'undefined') {
      return `rgb(var(${cssVariableName}) / ${opacityValue})`
    }

    if (typeof opacityVariable !== 'undefined') {
      return `rgb(var(${cssVariableName}) / var(${opacityVariable}, 1))`
    }

    return `rgb(var(${cssVariableName}))`
  }
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        paper: withOpacity('--paper'),
        paper2: withOpacity('--paper-2'),
        paper3: withOpacity('--paper-3'),
        ink: withOpacity('--ink'),
        ink2: withOpacity('--ink-2'),
        muted: withOpacity('--muted'),
        hairline: withOpacity('--hairline'),
        hairline2: withOpacity('--hairline-2'),
        accent: withOpacity('--accent'),
        accent2: withOpacity('--accent-2'),
        accentSoft: withOpacity('--accent-soft'),
        danger: withOpacity('--danger'),
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'ui-serif', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      boxShadow: {
        inkpress: '0 0.5px 0 0 rgb(var(--ink) / 0.25)',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover', 'focus-visible'],
      ringWidth: ['focus-visible'],
      ringColor: ['focus-visible'],
      ringOffsetWidth: ['focus-visible'],
      ringOffsetColor: ['focus-visible'],
    },
  },
  plugins: [],
}

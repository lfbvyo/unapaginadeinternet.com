export function splitVoicePair(pair) {
  if (typeof pair !== 'string') {
    return { optimist: '', fatalist: '' }
  }

  const parts = pair.split(' / ')
  if (parts.length < 2) {
    return { optimist: pair, fatalist: pair }
  }

  const optimist = String(parts[0] || '').trim()
  const fatalist = String(parts.slice(1).join(' / ') || '').trim()
  return { optimist, fatalist }
}


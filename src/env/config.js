let enableAnalytics = false

if (typeof process === 'object') {
  // eslint-disable-next-line no-undef
  enableAnalytics = process.env.GATSBY_ENABLE_ANALYTICS === 'true'
}

export default {
  enableAnalytics,
}

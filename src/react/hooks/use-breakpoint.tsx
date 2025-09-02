import { useMediaQuery } from 'react-responsive'
// todo: fetch actual tailwind config
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../tailwind.config.js'
// const config = resolveConfig(tailwindConfig)

const config = {
  theme: {
    screens: {
      medium: '640px',
      large: '1024px',
      extraLarge: '1324px',
    },
  },
}
const breakpoints = config.theme.screens

/**
 * Returns `true` if screen size matches the
 * `breakpoint`.
 */
export const useBreakpoint = (breakpoint: keyof typeof breakpoints) => {
  const breakpointQuery = breakpoints[breakpoint]
  return useMediaQuery({ query: `(min-width: ${breakpointQuery})` })
}

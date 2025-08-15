import ctl from '@netlify/classnames-template-literals'
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react'
import { ImageWrapper } from '../wrappers/image-wrapper.js'
import { LinkWrapper } from '../wrappers/link-wrapper'
import { ChevronDown, ChevronRight, Close, Menu } from './icons/icons.tsx'
import { ExternalLink } from './links/external-link'
import { Logo } from './logo.jsx'
import { useMediaQuery } from 'react-responsive'
// @ts-expect-error todo: find a good way to add a type definition for this
import aerial from '../images/noorse_luchtfoto_cropped.jpeg?w=500;600;800;1200&h=260;400;530;800&format=webp&q=50,100'
import type { SiteMap, SiteMapItem } from './types/sitemap'

const transition = `transition-all duration-200 ease-in`

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

// todo: extract this to a custom shared hook
/**
 * Returns `true` if screen size matches the
 * `breakpoint`.
 */
const useBreakpoint = (breakpoint: keyof typeof breakpoints) => {
  const breakpointQuery = breakpoints[breakpoint]
  return useMediaQuery({ query: `(min-width: ${breakpointQuery})` })
}

export const Navbar: FC<{ siteMap: SiteMap; currentURL?: string }> = ({
  siteMap,
  currentURL,
}) => {
  const isLarge = useBreakpoint('extraLarge')

  return (
    <NavSection>
      <MenuLogo inlineWithMenuBar={true} />
      {isLarge ? (
        <HorizontalMenuItemList
          hasFullBackGround={true}
          siteMap={siteMap}
          currentURL={currentURL}
        />
      ) : (
        <VerticalMenuItemList siteMap={siteMap} currentURL={currentURL} />
      )}
    </NavSection>
  )
}

export const NavbarWithCoverPhoto: FC<{
  siteMap: SiteMap
}> = ({ siteMap }) => {
  const [topMenuBarShown, setTopMenuBarShown] = useState<boolean>(false)

  const isLarge = useBreakpoint('extraLarge')

  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setTopMenuBarShown(ref.current.getBoundingClientRect().top < 0)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [setTopMenuBarShown])

  return (
    <NavSectionWithCoverPhoto ref={ref}>
      <MenuLogo inlineWithMenuBar={topMenuBarShown} />
      {isLarge ? (
        <HorizontalMenuItemList
          hasFullBackGround={topMenuBarShown}
          siteMap={siteMap}
        />
      ) : (
        <VerticalMenuItemList siteMap={siteMap} />
      )}
    </NavSectionWithCoverPhoto>
  )
}

const NavSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header id="nav-container" className="static h-64p w-full bg-green">
      {children}
    </header>
  )
}

const NavSectionWithCoverPhoto = forwardRef<HTMLHeadElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <header
        ref={ref}
        id="nav-container"
        className="large:64v static h-32v w-full medium:h-48v"
      >
        <div className="large:64v absolute h-32v w-full medium:h-48v">
          <ImageWrapper
            id={'background-image'}
            alt={'Luchtfoto Noorse velden'}
            loading={'eager'}
            className="aspect-[3/2] h-full w-full object-cover object-center"
            src={aerial as string}
          />
        </div>
        {children}
      </header>
    )
  }
)

const HorizontalMenuItemList: FC<{
  hasFullBackGround: boolean
  siteMap: SiteMap
  currentURL?: string
}> = ({ hasFullBackGround, siteMap, currentURL }) => {
  return (
    <nav
      className={ctl(
        `${transition} fixed w-full pr-4 ${hasFullBackGround ? `z-20` : 'z-50 h-0 p-0'} `
      )}
    >
      <ul
        id="menu-list"
        className={ctl(
          `fixed right-0 z-50 flex w-full list-none flex-row items-center justify-end gap-1 bg-green pr-6 ${transition} ${
            hasFullBackGround
              ? `top-0 h-80p py-10 opacity-100`
              : 'top-6 h-16 pl-5 pt-0 opacity-80'
          } `
        )}
      >
        {siteMap.items.map((item) => {
          const [opened, setOpened] = useState(false)
          return (
            <li key={item.name} className="group mb-0 p-3 text-center">
              <NavLink
                item={item}
                onClick={() => setOpened(!opened)}
                currentURL={currentURL}
              />
              {/* todo: icon should be inside button so all is clickable */}
              {item.subItems?.length ? (
                <span className="ml-1 inline-flex items-center text-white">
                  <ChevronDown className="hidden group-hover:inline" />
                  <ChevronRight className="inline group-hover:hidden" />
                </span>
              ) : (
                <></>
              )}
              {item.subItems?.length ? (
                <ul
                  id="dropdown"
                  className={ctl(
                    `${transition} list-none ${opened ? 'absolute flex' : 'hidden group-hover:absolute group-hover:flex'} -ml-1 mr-4 w-auto flex-col items-start space-y-3 bg-green p-6 opacity-90`
                  )}
                >
                  {item.subItems.map((subItem) => {
                    return (
                      <li key={subItem.name}>
                        <NavLink item={subItem} currentURL={currentURL} />
                      </li>
                    )
                  })}
                </ul>
              ) : (
                <></>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
const VerticalMenuItemList: FC<{
  siteMap: SiteMap
  currentURL?: string
}> = ({ siteMap, currentURL }) => {
  const [sideBarMenuShown, setMenuShown] = useState(false)
  const toggleMenuShown = () => {
    setMenuShown(!sideBarMenuShown)
  }

  return (
    <>
      <MenuToggle onClick={toggleMenuShown} open={sideBarMenuShown} />
      {sideBarMenuShown ? (
        <nav className="fixed right-0 top-0 z-50 h-full w-1/2 medium:w-2/5">
          <ul
            id="menu-list"
            className="flex h-full list-none flex-col space-y-3 bg-green pr-4 pt-20"
          >
            {siteMap.items.map((item) => (
              <VerticalMenuItem
                key={item.name}
                item={item}
                currentURL={currentURL}
              />
            ))}
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  )
}

const VerticalMenuItem: FC<{ item: SiteMapItem; currentURL?: string }> = ({
  item,
  currentURL,
}) => {
  const [opened, setOpened] = useState(false)
  return (
    <li key={item.name} className="text-right">
      <NavLink
        item={item}
        onClick={() => setOpened(!opened)}
        currentURL={currentURL}
      />
      {/* todo: icon should be inside button so all is clickable */}
      {item.subItems && (
        <span className="ml-1 inline-flex items-center text-white">
          {opened ? <ChevronDown /> : <ChevronRight />}
        </span>
      )}
      {item.subItems && opened && (
        <ul className="mr-4 flex w-auto list-none flex-col space-y-3">
          {item.subItems.map((subItem) => {
            return (
              <li key={subItem.name}>
                <NavLink item={subItem} currentURL={currentURL} />
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

const NavLink: FC<{
  item: SiteMapItem
  onClick?: () => void
  currentURL?: string
}> = ({ item, onClick, currentURL }) => {
  const className = 'text-white text-lg capitalize'

  if (item.link) {
    return (
      <LinkWrapper
        isActive={currentURL?.includes(item.link)}
        className={className}
        activeClassName={'border-b-2 border-white'}
        href={item.link}
      >
        {item.name}
      </LinkWrapper>
    )
  }

  if (item.extLink) {
    return (
      <ExternalLink
        href={item.extLink}
        styled={false}
        icon={false}
        className={className}
        textColor="text-white"
        key={item.name}
      >
        {item.name}
      </ExternalLink>
    )
  }
  return (
    <button className={className} onClick={onClick}>
      {item.name}
    </button>
  )
}

const ConditionalLinkWrapper: FC<
  PropsWithChildren<{ href?: string; className?: string }>
> = ({ children, href, className }) => {
  return href ? (
    <LinkWrapper className={className} href={href}>
      {children}
    </LinkWrapper>
  ) : (
    <span className={className}>{children}</span>
  )
}

const MenuLogo: FC<{ inlineWithMenuBar: boolean }> = ({
  inlineWithMenuBar,
}) => {
  const href = inlineWithMenuBar ? '/' : undefined
  return (
    <div
      id="logo-container"
      className={ctl(
        `${transition} z-[60] flex items-center ${
          inlineWithMenuBar
            ? `fixed left-16p top-8 justify-start large:left-96p`
            : `top-0 h-full w-full justify-center p-2 large:w-1/3 large:p-8`
        }`
      )}
    >
      <ConditionalLinkWrapper href={href}>
        <Logo
          className={ctl(
            `${transition} relative aspect-square h-auto max-h-full w-full ${inlineWithMenuBar ? `max-w-[64px]` : `max-w-[200px] medium:max-w-[312px]`} `
          )}
        />
      </ConditionalLinkWrapper>
    </div>
  )
}

const MenuToggle: FC<{
  onClick: () => void
  open: boolean
}> = ({ onClick, open }) => {
  return (
    <div className="fixed right-3 top-3 z-[100] bg-green p-3">
      <button
        className="flex h-full items-center p-0 text-white"
        onClick={onClick}
        aria-label={open ? 'Sluit menu' : 'Open menu'}
        id="menu-hamburger"
      >
        {open ? <Close /> : <Menu />}
      </button>
    </div>
  )
}

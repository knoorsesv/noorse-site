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
import { ChevronDown, ChevronRight, Close, Menu } from './icons/icons.jsx'
import { ExternalLink } from './links/external-link.jsx'
import { Logo } from './logo.jsx'
import { useMediaQuery } from 'react-responsive'
// @ts-expect-error todo: find a good way to add a type definition for this
import aerial from '../images/noorse_luchtfoto_cropped.jpeg?w=600;800;1200&h=400;530;800&format=webp&q=50,100'

const transition = `transition-all duration-200 ease-in`

interface SiteMapItem {
  link?: string
  extLink?: string
  name: string
  subItems: SiteMapItem[]
}

interface SiteMap {
  items: SiteMapItem[]
}

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
    <header id="nav-container" className="h-64p bg-green w-full static">
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
        className="h-32v medium:h-48v large:64v w-full static"
      >
        <div className="h-32v medium:h-48v large:64v w-full absolute">
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
      className={ctl(`${transition}
                      fixed w-full
                      pr-4
                      ${hasFullBackGround ? `z-20` : 'z-50 h-0 p-0'}
      `)}
    >
      <ul
        id="menu-list"
        className={ctl(`
                    fixed right-0
                    list-none z-50
                    flex flex-row justify-end items-center gap-1
                    pr-6 w-full bg-green
                    ${transition}
                    ${
                      hasFullBackGround
                        ? `h-80p top-0 py-10 opacity-100`
                        : 'h-16 top-6 pt-0 pl-5 opacity-80'
                    }
                  `)}
      >
        {siteMap.items.map((item) => {
          const [opened, setOpened] = useState(false)
          return (
            <li key={item.name} className="text-center mb-0 p-3 group">
              <NavLink
                item={item}
                onClick={() => setOpened(!opened)}
                currentURL={currentURL}
              />
              {/* todo: icon should be inside button so all is clickable */}
              {item.subItems && (
                <span className="inline-flex items-center ml-1 text-white">
                  <ChevronDown className="hidden group-hover:inline" />
                  <ChevronRight className="inline group-hover:hidden" />
                </span>
              )}
              {item.subItems && (
                <ul
                  id="dropdown"
                  className={ctl(`${transition}
                          list-none
                          ${opened ? 'flex absolute' : 'hidden group-hover:flex group-hover:absolute'}
                          flex-col space-y-3 items-start -ml-1
                          w-auto p-6 mr-4 bg-green opacity-90
                        `)}
                >
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
        <nav className="fixed h-full w-1/2 medium:w-2/5 top-0 right-0 z-50">
          <ul
            id="menu-list"
            className="list-none flex flex-col space-y-3 pr-4 pt-20 h-full bg-green"
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
        <span className="inline-flex items-center text-white ml-1">
          {opened ? <ChevronDown /> : <ChevronRight />}
        </span>
      )}
      {item.subItems && opened && (
        <ul className="list-none flex flex-col space-y-3 w-auto mr-4">
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
      className={ctl(`${transition}
                flex items-center z-[60] 
                ${
                  inlineWithMenuBar
                    ? `justify-start fixed top-8 left-16p large:left-96p`
                    : `justify-center w-full h-full top-0 large:w-1/3 p-2 large:p-8 `
                }`)}
    >
      <ConditionalLinkWrapper href={href}>
        <Logo
          className={ctl(`${transition} 
            aspect-square h-auto max-h-full w-full relative
            ${inlineWithMenuBar ? `max-w-[64px]` : `max-w-[200px] medium:max-w-[312px]`}
          `)}
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
    <div className="fixed right-3 top-3 p-3 z-[100] bg-green">
      <button
        className="text-white h-full p-0 flex items-center"
        onClick={onClick}
        aria-label={open ? 'Sluit menu' : 'Open menu'}
        id="menu-hamburger"
      >
        {open ? <Close /> : <Menu />}
      </button>
    </div>
  )
}

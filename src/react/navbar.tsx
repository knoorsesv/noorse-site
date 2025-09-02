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
// @ts-expect-error todo: find a good way to add a type definition for this
import aerial from '../images/noorse_luchtfoto_cropped.jpeg?w=500;600;800;1200&h=260;400;530;800&format=webp&q=50,100'
import type { SiteMap, SiteMapItem } from './types/sitemap'
import { useBreakpoint } from './hooks/use-breakpoint.tsx'

const transition = `transition-all duration-200 ease-in`

export const Navbar: FC<{ siteMap: SiteMap; currentURL?: string }> = ({
  siteMap,
  currentURL,
}) => {
  const isExtraLarge = useBreakpoint('extraLarge')

  return (
    <NavSection>
      <MenuLogo inlineWithMenuBar={true} />
      {isExtraLarge ? (
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

  const isExtraLarge = useBreakpoint('extraLarge')

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
      {isExtraLarge ? (
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
    <header id="nav-container" className="h-64p bg-green static w-full">
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
        className="large:64v h-32v medium:h-48v static w-full"
      >
        <div className="large:64v h-32v medium:h-48v absolute w-full">
          <ImageWrapper
            alt={'Luchtfoto Noorse velden'}
            id={'background-image'}
            fetchpriority="high"
            loading={'eager'}
            className="aspect-3/2 h-full w-full object-cover object-center"
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
          `bg-green fixed right-0 z-50 flex w-full list-none flex-row items-center justify-end gap-1 pr-6 ${transition} ${
            hasFullBackGround
              ? `h-80p top-0 py-10 opacity-100`
              : 'top-6 h-16 pt-0 pl-5 opacity-80'
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
                    `${transition} list-none ${opened ? 'absolute flex' : 'hidden group-hover:absolute group-hover:flex'} bg-green mr-4 -ml-1 w-auto flex-col items-start space-y-3 p-6 opacity-90`
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
        <nav className="medium:w-2/5 fixed top-0 right-0 z-50 h-full w-1/2">
          <ul
            id="menu-list"
            className="bg-green flex h-full list-none flex-col space-y-3 pt-20 pr-4"
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
        `${transition} z-60 flex items-center ${
          inlineWithMenuBar
            ? `left-16p large:left-96p fixed top-8 justify-start`
            : `large:w-1/3 large:p-8 top-0 h-full w-full justify-center p-2`
        }`
      )}
    >
      <ConditionalLinkWrapper href={href}>
        <Logo
          className={ctl(
            `${transition} relative aspect-square h-auto max-h-full w-full ${inlineWithMenuBar ? `max-w-[64px]` : `medium:max-w-[312px] max-w-[200px]`} `
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
    <div className="bg-green fixed top-3 right-3 z-100 p-3">
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

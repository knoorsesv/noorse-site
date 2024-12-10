import ctl from '@netlify/classnames-template-literals'
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
} from 'react'
import { ImageWrapper } from '../wrappers/image-wrapper.js'
import { LinkWrapper } from '../wrappers/link-wrapper.tsx'
import { ChevronDown, ChevronRight, Close, Menu } from './icons/icons.jsx'
import { ExternalLink } from './links/external-link.jsx'
import { Logo } from './logo.jsx'
// @ts-expect-error todo: find a good way to add a type definition for this
import aerial from '../images/noorse_luchtfoto_cropped.jpeg?w=600;800;1200&h=400;530;800&format=webp&q=50,100'

const transition = `transition-all duration-200 ease-in`
const menuBarHeight = 'h-64p'
const coverSectionHeight = 'h-32v medium:h-48v large:64v'

interface SiteMapItem {
  link: string
  name: string
  extLink?: string
  subItems: SiteMapItem[]
}

interface SiteMap {
  items: SiteMapItem[]
}

type InfoPageLinkFC = FC<{ item: SiteMapItem; className: string }>

export const Navbar: FC<{ pageHasCoverPhoto: boolean; siteMap: SiteMap }> = ({
  pageHasCoverPhoto = false,
  siteMap,
}) => {
  const [topMenuBarShown, setTopMenuBarShown] =
    useState<boolean>(!pageHasCoverPhoto)
  const [sideBarMenuShown, setMenuShown] = useState(false)

  const toggleMenuShown = () => {
    setMenuShown(!sideBarMenuShown)
  }

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

  return pageHasCoverPhoto ? (
    <NavSectionWithCoverPhoto ref={ref}>
      <MenuItemList
        topMenuBarShown={topMenuBarShown}
        sideBarMenuShown={sideBarMenuShown}
        siteMap={siteMap}
      />
      <MenuLogo topMenuBarShown={topMenuBarShown} />
      <MenuToggle
        clickBurger={toggleMenuShown}
        sideBarMenuShown={sideBarMenuShown}
        topMenuBarShown={topMenuBarShown}
      />
    </NavSectionWithCoverPhoto>
  ) : (
    <NavSection>
      <MenuItemList
        topMenuBarShown={true}
        sideBarMenuShown={sideBarMenuShown}
        siteMap={siteMap}
      />
      <MenuLogo topMenuBarShown={true} />
      <MenuToggle
        clickBurger={toggleMenuShown}
        sideBarMenuShown={sideBarMenuShown}
        topMenuBarShown={true}
      />
    </NavSection>
  )
}

const NavSection: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header
      id="nav-container"
      className={ctl(`${menuBarHeight} bg-green w-full static`)}
    >
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
        className={ctl(`${coverSectionHeight} w-full static`)}
      >
        <div className={ctl(`${coverSectionHeight} absolute w-full`)}>
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

const MenuItemList: FC<{
  topMenuBarShown: boolean
  siteMap: SiteMap
  sideBarMenuShown: boolean
}> = ({ topMenuBarShown, siteMap, sideBarMenuShown }) => {
  const ulClasses = ctl(`
  fixed top-0
  list-none z-50
  flex flex-col extraLarge:flex-row extraLarge:justify-end extraLarge:items-center
  space-y-3 extraLarge:space-y-0
  pr-4 extraLarge:pr-6
  w-1/2 medium:w-2/5
  ${transition}
  ${
    sideBarMenuShown
      ? 'pt-20 h-full bg-green opacity-100 right-0'
      : 'pt-16 opacity-0 -right-1/2 extraLarge:right-0'
  }
  ${
    topMenuBarShown
      ? `h-full extraLarge:h-80p bg-green extraLarge:opacity-100 right-0 extraLarge:w-full extraLarge:py-10`
      : 'extraLarge:right-0 extraLarge:w-auto extraLarge:h-16 extraLarge:top-6 extraLarge:pt-0 extraLarge:pl-5 extraLarge:opacity-90 extraLarge:bg-green'
  }
  `)
  const navClasses = ctl(`
  ${transition}
  fixed w-full
  pr-4
  ${topMenuBarShown ? `z-20 bg-green ${menuBarHeight}` : 'z-50 h-0 p-0'}
  `)

  const InfoPageLink: InfoPageLinkFC = ({ item, className }) => {
    return (
      <LinkWrapper
        className={className}
        // todo: reenable this when we've moved off gatsby
        // activeClassName={'border-b-2 border-white'}
        href={item.link}
      >
        {item.name}
      </LinkWrapper>
    )
  }

  return (
    <nav className={navClasses}>
      <ul id="menu-list" className={ulClasses}>
        {siteMap.items.map((item) => {
          const [opened, setOpened] = useState(false)
          const liClasses = ctl(`text-right extraLarge:text-center
    extraLarge:mx-2 extraLarge:px-3 extraLarge:py-3
  ${transition}
  ${item.subItems && 'group'}`)
          return (
            <li key={item.name} className={liClasses}>
              <NavLink
                item={item}
                InfoPageLink={InfoPageLink}
                onClick={() => setOpened(!opened)}
              />
              {/* todo: icon should be inside button so all is clickable */}
              <span className="inline-flex items-center">
                {sideBarMenuShown ? (
                  opened ? (
                    <ChevronDown
                      className={`ml-1 text-white ${
                        !item.subItems && 'extraLarge:hidden'
                      } `}
                    />
                  ) : (
                    <ChevronRight
                      className={`ml-1 text-white ${
                        !item.subItems && 'extraLarge:hidden'
                      } `}
                    />
                  )
                ) : (
                  <>
                    <ChevronDown
                      className={`ml-1 text-white ${
                        !item.subItems ? 'hidden' : 'hidden group-hover:inline'
                      } `}
                    />
                    <ChevronRight
                      className={`ml-1 text-white ${
                        !item.subItems ? 'hidden' : 'inline group-hover:hidden'
                      } `}
                    />
                  </>
                )}
              </span>
              {item.subItems && (!sideBarMenuShown || opened) && (
                <SubMenuItemList item={item} InfoPageLink={InfoPageLink} />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const SubMenuItemList: FC<{
  item: SiteMapItem
  InfoPageLink: InfoPageLinkFC
}> = ({ item, InfoPageLink }) => {
  const ulClasses = ctl(`
  list-none
  extraLarge:hidden extraLarge:group-hover:absolute extraLarge:group-hover:flex
  flex flex-col space-y-3 extraLarge:items-start extraLarge:-ml-1
  w-auto extraLarge:p-6 mr-4 extraLarge:bg-green extraLarge:opacity-90
  ${transition}`)

  return (
    <ul id="dropdown" className={ulClasses}>
      {item.subItems.map((subItem) => {
        return (
          <li key={subItem.name}>
            <NavLink item={subItem} InfoPageLink={InfoPageLink} />
          </li>
        )
      })}
    </ul>
  )
}

const NavLink: FC<{
  item: SiteMapItem
  InfoPageLink: InfoPageLinkFC
  onClick?: () => void
}> = ({ item, InfoPageLink, onClick }) => {
  const className = 'text-white text-lg capitalize'
  if (item.link) {
    return <InfoPageLink className={className} item={item} />
  }

  if (item.extLink) {
    return (
      <ExternalLink
        href={item.extLink}
        styled={false}
        icon={false}
        className={className}
        textColor={'text-white'}
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

const MenuLogo: FC<{ topMenuBarShown: boolean }> = ({ topMenuBarShown }) => {
  const logContainerClasses = ctl(`${transition}
       flex items-center z-20 
      ${
        topMenuBarShown
          ? `justify-start fixed top-8 left-16p large:left-96p`
          : `justify-center w-full h-full top-0 large:w-1/3 p-2 large:p-8 `
      }     `)
  return (
    <div id="logo-container" className={logContainerClasses}>
      {topMenuBarShown ? (
        <a href="/">
          <Logo
            className={ctl(`${transition} z-30 aspect-square h-auto max-h-full w-full
  ${topMenuBarShown ? `max-w-[64px] ` : `max-w-[200px] medium:max-w-[312px]`}
  `)}
          />
        </a>
      ) : (
        <Logo
          className={ctl(`${transition} z-30 aspect-square h-auto max-h-full w-full
        ${
          topMenuBarShown
            ? `max-w-[64px] `
            : `max-w-[200px] medium:max-w-[312px]`
        }
        `)}
        />
      )}
    </div>
  )
}

const MenuToggle: FC<{
  clickBurger: () => void
  sideBarMenuShown: boolean
  topMenuBarShown: boolean
}> = ({ clickBurger, sideBarMenuShown, topMenuBarShown }) => {
  const toggleWrapperClasses = ctl(`fixed right-0 top-0
    extraLarge:hidden
    mt-4 mr-3 medium:mt-6 medium:mr-4
    p-2 z-50 text-white
    ${sideBarMenuShown || topMenuBarShown ? '' : 'bg-green'} ${transition}`)
  return (
    <div className={toggleWrapperClasses}>
      <button
        className="text-white"
        onClick={clickBurger}
        aria-label={sideBarMenuShown ? 'Sluit menu' : 'Open menu'}
        id="menu-hamburger"
      >
        {sideBarMenuShown ? <Close /> : <Menu />}
      </button>
    </div>
  )
}

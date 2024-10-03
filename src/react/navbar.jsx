import ctl from '@netlify/classnames-template-literals'
import { useEffect, useRef, useState } from 'react'
import { ImageWrapper } from '../wrappers/image-wrapper'
import { LinkWrapper } from '../wrappers/link-wrapper.jsx'
import { ChevronDown, ChevronRight, Close, Menu } from './icons/icons.jsx'
import { ExternalLink } from './links/external-link.jsx'
import { Logo } from './logo.jsx'
// import aerial from '../images/noorse_aerial.png?w=600;800;1200&h=200;400;800&format=webp&q=50,100'
import aerial from '../images/noorse_luchtfoto_cropped.jpeg?w=600;800;1200&h=400;530;800&format=webp&q=50,100'

const transition = `transition-all duration-200 ease-in`
const menuBarHeight = 'h-64p'
export const coverSectionHeight = 'h-32v medium:h-48v large:64v'

//  topMenuBarShown is a bad name, it means the fixed non transparent navbar should be shown
const NavSection = ({
  pageHasCoverPhoto,
  children,
  setTopMenuBarShown,
  topMenuBarShown,
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setTopMenuBarShown(
          !pageHasCoverPhoto || ref.current.getBoundingClientRect().top < 0
        )
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [pageHasCoverPhoto, setTopMenuBarShown])

  const navContainerClasses = ctl(`
  ${pageHasCoverPhoto ? coverSectionHeight : menuBarHeight}
  ${topMenuBarShown ? 'bg-green' : ''}
  w-full static`)
  return (
    <header ref={ref} id="nav-container" className={navContainerClasses}>
      {pageHasCoverPhoto ? (
        <div className={ctl(`${coverSectionHeight} absolute w-full`)}>
          <ImageWrapper
            id={'background-image'}
            alt={'Luchtfoto Noorse velden'}
            loading={'eager'}
            className="aspect-[3/2] h-full w-full object-cover object-center"
            src={aerial}
          />
        </div>
      ) : (
        <></>
      )}
      {children}
    </header>
  )
}

const MenuItemList = ({ topMenuBarShown, siteMap, sideBarMenuShown }) => {
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

  const InfoPageLink = ({ item, className }) => {
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
                <SubMenuItemList
                  fixedToTop={topMenuBarShown}
                  item={item}
                  InfoPageLink={InfoPageLink}
                />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const SubMenuItemList = ({ item, InfoPageLink }) => {
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

const NavLink = ({ item, InfoPageLink, onClick }) => {
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

const MenuLogo = ({ topMenuBarShown }) => {
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

const MenuToggle = ({ clickBurger, sideBarMenuShown, topMenuBarShown }) => {
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

// todo: just make 2 separate components instead of having a boolean for the cover photo
export const Navbar = ({ pageHasCoverPhoto = false, siteMap }) => {
  const [topMenuBarShown, setTopMenuBarShown] = useState(!pageHasCoverPhoto)
  const [sideBarMenuShown, setMenuShown] = useState(false)

  const toggleMenuShown = () => {
    setMenuShown(!sideBarMenuShown)
  }

  return (
    <NavSection
      topMenuBarShown={topMenuBarShown}
      pageHasCoverPhoto={pageHasCoverPhoto}
      setTopMenuBarShown={setTopMenuBarShown}
    >
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
    </NavSection>
  )
}

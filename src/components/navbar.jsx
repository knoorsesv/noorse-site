import ctl from '@netlify/classnames-template-literals'
import React, { useEffect, useRef, useState } from 'react'
import { ExternalLink } from './text.jsx'

const transition = `transition-all duration-200 ease-in`
const menuBarHeight = 'h-64p'
export const coverSectionHeight = 'h-32v medium:h-48v large:64v'

const NavSection = ({
  pageHasCoverPhoto,
  children,
  setTopMenuBarShown,
  topMenuBarShown,
  CoverImage,
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
        <CoverImage className={ctl(`${coverSectionHeight} absolute w-full`)} />
      ) : (
        <></>
      )}
      {children}
    </header>
  )
}

const MenuItemList = ({
  topMenuBarShown,
  siteMap,
  sideBarMenuShown,
  InfoPageLink,
}) => {
  const ulClasses = ctl(`
  fixed top-0
  list-none z-50
  flex flex-col large:flex-row large:justify-end large:items-center
  space-y-3 large:space-y-0
  pt-16 pr-4 large:pr-6
  w-1/2 medium:w-2/5
  ${transition}
  ${
    sideBarMenuShown
      ? 'h-full bg-green opacity-100 right-0'
      : 'opacity-0 -right-1/2 large:right-0'
  }
  ${
    topMenuBarShown
      ? `h-full large:h-80p bg-green large:opacity-100 right-0 large:w-full large:py-10`
      : 'large:right-0 large:w-auto large:h-16 large:top-6 large:pt-0 large:pl-5 large:opacity-90 large:bg-green'
  }
  `)
  const navClasses = ctl(`
  ${transition}
  fixed w-full
  pr-4
  ${topMenuBarShown ? `z-20 bg-green ${menuBarHeight}` : 'z-50 h-0 p-0'}
  `)

  return (
    <nav className={navClasses}>
      <ul id="menu-list" className={ulClasses}>
        {siteMap.items.map((item) => {
          const liClasses = ctl(`text-right large:text-center
    large:mx-2 large:px-3 large:py-3
  ${transition}
  ${item.subItems && 'group'}`)
          return (
            <li id={'menu-item'} key={item.name} className={liClasses}>
              <NavLink item={item} InfoPageLink={InfoPageLink} />
              {item.subItems && (
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
  large:hidden large:group-hover:absolute large:group-hover:flex
  flex flex-col space-y-3 large:items-start large:-ml-1
  w-auto large:p-6 mr-4 large:bg-green large:opacity-90
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

const NavLink = ({ item, InfoPageLink }) => {
  const className = 'text-white text-lg capitalize'
  if (item.link) {
    return <InfoPageLink className={className} item={item} />
  }

  if (item.extLink) {
    return (
      <ExternalLink
        url={item.extLink}
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
  return <span className={className}>{item.name}</span>
}

const MenuLogo = ({ topMenuBarShown, Logo }) => {
  const logContainerClasses = ctl(`${transition}
       flex fixed z-20
      ${
        topMenuBarShown
          ? `justify-start w-1/6 top-8 left-16p ${menuBarHeight}`
          : `justify-center w-full top-0 large:w-1/3 p-2 large:p-8 ${coverSectionHeight}`
      }     `)
  return (
    <div id="logo-container" className={logContainerClasses}>
      <Logo className={`${transition}`} />
    </div>
  )
}

const MenuToggle = ({ clickBurger, sideBarMenuShown, topMenuBarShown }) => {
  const toggleWrapperClasses = ctl(`fixed right-0
    large:hidden
    mt-4 mr-3 medium:mt-6 medium:mr-4
    p-2 z-50 text-white
    ${sideBarMenuShown || topMenuBarShown ? '' : 'bg-green'} ${transition}`)
  return (
    <div className={toggleWrapperClasses}>
      <button
        className="bg-transparent text-white"
        onClick={clickBurger}
        aria-label={sideBarMenuShown ? 'Sluit menu' : 'Open menu'}
        id="menu-hamburger"
      >
        {sideBarMenuShown ? <Close /> : <Menu />}
      </button>
    </div>
  )
}

const Close = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

const Menu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)

// todo: just make 2 separate components instead of having a boolean for the cover photo
export const Navbar = ({
  pageHasCoverPhoto = false,
  siteMap,
  InfoPageLink,
  CoverImage,
  Logo,
}) => {
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
      CoverImage={CoverImage}
    >
      <MenuItemList
        topMenuBarShown={topMenuBarShown}
        sideBarMenuShown={sideBarMenuShown}
        siteMap={siteMap}
        InfoPageLink={InfoPageLink}
      />
      <MenuLogo topMenuBarShown={topMenuBarShown} Logo={Logo} />
      <MenuToggle
        clickBurger={toggleMenuShown}
        sideBarMenuShown={sideBarMenuShown}
        topMenuBarShown={topMenuBarShown}
      />
    </NavSection>
  )
}

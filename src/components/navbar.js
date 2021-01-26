import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Logo } from './images'
import { ExternalLink } from './text'
import { siteMap as defaultSiteMap } from '../env/constants'
import { CoverImage } from './cover-image'

const transition = `transition-all duration-1000 ease-in`
const menuBarHeight = 'h-64p sm:h-80p'
const coverSectionHeight = 'h-32v sm:h-48v lg:64v'

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

  return (
    <section
      ref={ref}
      id="nav-container"
      className={`
      ${pageHasCoverPhoto ? coverSectionHeight : menuBarHeight} 
      ${topMenuBarShown ? 'bg-green' : ''}
      w-full static`}
    >
      {pageHasCoverPhoto ? (
        <CoverImage className={coverSectionHeight} />
      ) : (
        <></>
      )}
      {children}
    </section>
  )
}

const MenuItemList = ({ topMenuBarShown, siteMap, sideBarMenuShown }) => {
  return [
    <ul
      id="menu-list"
      className={`
      fixed top-0 pt-16 pr-4
      w-1/2 sm:w-2/5
      list-none h-full flex flex-col space-y-1 sm:space-y-2 ${transition}
      ${
        !sideBarMenuShown
          ? 'opacity-0 -right-1/2'
          : 'bg-green opacity-100 right-0'
      }
      `}
    >
      {siteMap.items.map((item) => (
        <li
          id={'menu-item'}
          key={item.name}
          className={`text-right lg:text-center
      lg:my-2 lg:mx-3
      ${transition}
      ${item.subItems && 'group'}`}
        >
          <NavLink item={item} />
          {item.subItems && (
            <SubMenuItems fixedToTop={topMenuBarShown} item={item} />
          )}
        </li>
      ))}
    </ul>,
  ]
}

const SubMenuItems = ({ item }) => {
  return (
    <ul
      id="dropdown"
      className={`
      lg:hidden lg:group-hover:absolute lg:group-hover:flex
      flex flex-col space-y-2 lg:items-start
      w-auto lg:p-6 mr-4
      ${transition}`}
    >
      {item.subItems.map((subItem) => {
        return <NavLink item={subItem} key={subItem.name} />
      })}
    </ul>
  )
}

// const SideBarMenu = ({ topMenuBarShown, siteMap, initiallyShown }) => {
//
//
//   return (
//     <div
//       id="sidebar-container"
//       className={`${transition}
//       lg:hidden block
//       z-50
//      h-screen fixed right-0 top-0 p-4 sm:pr-8
//      ${menuShown ? 'w-1/2 sm:w-1/3' : 'w-0'}
//      ${menuShown && 'bg-green'}
//    `}
//     >
//
//
//       <MenuItemList topMenuBarShown={topMenuBarShown} siteMap={siteMap}/>
//       {/*<ul*/}
//       {/*  id="sidebar-menu"*/}
//       {/*  className={`*/}
//       {/*      list-none*/}
//       {/*      ${menuShown ? 'block' : 'hidden'}*/}
//       {/*      flex flex-col justify-between mt-6 sm:mt-8`}*/}
//       {/*>*/}
//       {/*  {siteMap.items.map((item) => (*/}
//       {/*    <MenuItem key={item.name} item={item} topMenuBarShown={fixedToTop} />*/}
//       {/*  ))}*/}
//       {/*</ul>*/}
//     </div>
//   )
// }

const NavLink = ({ item }) => {
  const className = 'text-white text-lg'

  if (item.link) {
    return (
      <Link
        className={className}
        activeClassName={'border-b-2 border-white'}
        to={item.link}
      >
        {item.name}
      </Link>
    )
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

export const Navbar = ({
  pageHasCoverPhoto = false,
  siteMap,
  initiallyShown,
}) => {
  const [topMenuBarShown, setTopMenuBarShown] = useState(!pageHasCoverPhoto)
  const [sideBarMenuShown, setMenuShown] = useState(initiallyShown)

  const toggleMenuShown = () => {
    setMenuShown(!sideBarMenuShown)
  }

  siteMap = siteMap || defaultSiteMap

  return (
    <React.Fragment>
      <NavSection
        topMenuBarShown={topMenuBarShown}
        pageHasCoverPhoto={pageHasCoverPhoto}
        setTopMenuBarShown={setTopMenuBarShown}
      >
        <MenuLogo topMenuBarShown={topMenuBarShown} />

        <nav
          className={`
          ${transition}
          fixed w-full
          pr-4
          ${topMenuBarShown ? `z-20 bg-green ${menuBarHeight}` : 'h-0 p-0'}
          `}
        >
          <MenuItemList
            topMenuBarShown={topMenuBarShown}
            sideBarMenuShown={sideBarMenuShown}
            siteMap={siteMap}
          />
          {/*<MenuBackground topMenuBarShown={topMenuBarShown}/>*/}
        </nav>
        <MenuToggle
          clickBurger={toggleMenuShown}
          sideBarMenuShown={sideBarMenuShown}
          topMenuBarShown={topMenuBarShown}
        />
      </NavSection>
    </React.Fragment>
  )
}

const MenuBackground = ({ topMenuBarShown }) => {
  return (
    <div
      key="menu-background"
      className={`${topMenuBarShown && 'hidden'} ${transition} shadow-lg`}
      style={{
        position: 'relative',
        top: '-35px',
        borderStyle: 'solid',
        borderWidth: '0 0 40px 20px',
        width: '100%',
        zIndex: '0',
        opacity: '70%',
        borderColor: 'transparent transparent green transparent',
      }}
    />
  )
}

const MenuLogo = ({ topMenuBarShown }) => {
  return (
    <div
      id="logo-container"
      className={`${transition}
           flex fixed z-20
          ${
            topMenuBarShown
              ? `justify-start w-1/6 top-8 sm:top-32p left-16p ${menuBarHeight}`
              : `justify-center w-full top-0 lg:w-1/2 p-2 sm:p-6 lg:p-8 ${coverSectionHeight}`
          }
         `}
    >
      <Logo className={`${transition}`} />
    </div>
  )
}

const MenuToggle = ({ clickBurger, sideBarMenuShown, topMenuBarShown }) => {
  return (
    <div
      className={`fixed right-0 
        lg:hidden
        mt-4 mr-3 sm:mt-4 
        p-2 z-50 text-white
        ${sideBarMenuShown || topMenuBarShown ? '' : 'bg-green'} ${transition}`}
    >
      <FontAwesomeIcon
        className={'h-6 w-6'}
        icon={sideBarMenuShown ? faTimes : faBars}
        onClick={clickBurger}
        id="menu-hamburger"
      />
    </div>
  )
}

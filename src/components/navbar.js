import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Logo } from './images'
import { ExternalLink } from './text'
import { siteMap as defaultSiteMap } from '../env/constants'
import { CoverImage } from './cover-image'

const transition = `transition-all duration-200 ease-in`
const menuBarHeight = 'h-64p sm:h-80p'
const coverSectionHeight = 'h-32v sm:h-48v lg:64v'

export const Navbar = ({ showCoverPhoto, siteMap, initiallyShown }) => {
  const [showNavbar, setShowNavBar] = useState(!showCoverPhoto)

  siteMap = siteMap || defaultSiteMap

  return (
    <React.Fragment>
      <NavContainer
        showCoverPhoto={showCoverPhoto}
        setShowNavBar={setShowNavBar}
      >
        <nav
          className={`
        ${transition}
      z-50 w-full flex
      lg:flex-row-reverse lg:justify-between lg:items-center
      ${
        showNavbar
          ? `${menuBarHeight} fixed bg-green`
          : `${coverSectionHeight} bg-transparent lg:pr-0`
      } 
      `}
        >
          <div
            id="menu-container"
            className={`hidden lg:block 
            ${transition} 
            ${!showNavbar && 'lg:self-start'}
            ${!showNavbar && `lg:mb-10 lg:pl-5 lg:h-38p`}
            `}
          >
            <TopMenu showNavbar={showNavbar} siteMap={siteMap} />
          </div>
          <div
            id="logo-container"
            className={`${transition}
          relative flex justify-center
          ${
            showNavbar
              ? 'justify-start w-1/6 h-full top-8p sm:top-32p left-16p'
              : `w-full h-full lg:w-1/2 p-2 sm:p-6 lg:p-8`
          }
         `}
          >
            <Logo className={`${transition}`} />
          </div>
        </nav>
      </NavContainer>
      <SideBarMenu
        fixedToTop={showNavbar}
        siteMap={siteMap}
        initiallyShown={initiallyShown}
      />
    </React.Fragment>
  )
}

const NavContainer = ({ showCoverPhoto, children, setShowNavBar }) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setShowNavBar(
          !showCoverPhoto || ref.current.getBoundingClientRect().top < 0
        )
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [showCoverPhoto, setShowNavBar])

  return (
    <section
      ref={ref}
      id="nav-container"
      className={`${
        showCoverPhoto ? coverSectionHeight : menuBarHeight
      } w-full static`}
    >
      {showCoverPhoto ? <CoverImage className={coverSectionHeight} /> : <></>}
      {children}
    </section>
  )
}

const TopMenu = ({ showNavbar, siteMap }) => {
  return [
    <ul
      id="menu"
      key="menu"
      style={{ zIndex: '10', position: 'relative' }}
      className={`list-none h-full flex flex-row justify-between items-center p-4 lg:p-6 lg:mb-0`}
    >
      {siteMap.items.map((item) => (
        <MenuItem key={item.name} item={item} showNavbar={showNavbar} />
      ))}
    </ul>,
    <div
      key="menu-background"
      className={`${showNavbar && 'hidden'} ${transition} shadow-lg`}
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
    />,
  ]
}

const MenuToggle = ({ clickBurger, menuShown }) => {
  return (
    <FontAwesomeIcon
      className={'h-6 w-6'}
      icon={menuShown ? faTimes : faBars}
      onClick={clickBurger}
      id="menu-hamburger"
    />
  )
}

const MenuItem = ({ item, showNavbar }) => {
  return (
    <li
      id={'top-menu-item'}
      className={`relative text-right lg:text-center
      my-2 lg:mx-3
      whitespace-nowrap
      font-medium
      ${transition}
      ${item.subItems && 'group'}`}
    >
      {item.link || item.extLink ? (
        <NavLink activeClassName={`border-b-2`} item={item}></NavLink>
      ) : (
        <span className={'text-white'}>{item.name}</span>
      )}
      {item.subItems && <SubMenuItems fixedToTop={showNavbar} item={item} />}
    </li>
  )
}

const SubMenuItems = ({ item }) => {
  return (
    <div
      id="dropdown"
      className={`
      lg:hidden lg:group-hover:absolute lg:group-hover:flex
      flex flex-col lg:items-start
      w-auto lg:p-6 mr-4
      ${transition}
      bg-green bg-opacity-75`}
    >
      {item.subItems.map((subItem) => {
        return <NavLink item={subItem} key={subItem.name} />
      })}
    </div>
  )
}

const SideBarMenu = ({ fixedToTop, siteMap, initiallyShown }) => {
  const [menuShown, setMenuShown] = useState(initiallyShown)
  const toggleMenuShown = () => {
    setMenuShown(!menuShown)
  }

  return (
    <div
      id="sidebar-container"
      className={`${transition}
      lg:hidden block
      z-50
     h-screen fixed right-0 top-0 p-4 sm:pr-8 
     ${menuShown ? 'w-1/2 sm:w-1/3' : 'w-0'}
     ${menuShown && 'bg-green'}
   `}
    >
      <div
        className={`lg:hidden flex flex-row justify-end items-center 
        mt-2 sm:mt-4 
        ${(menuShown || fixedToTop) && 'text-white'} ${transition}`}
      >
        <MenuToggle clickBurger={toggleMenuShown} menuShown={menuShown} />
      </div>
      <ul
        id="sidebar-menu"
        className={`
            list-none
            ${menuShown ? 'block' : 'hidden'}
            flex flex-col justify-between mt-6 sm:mt-8`}
      >
        {siteMap.items.map((item) => (
          <MenuItem key={item.name} item={item} showNavbar={fixedToTop} />
        ))}
      </ul>
    </div>
  )
}

const NavLink = ({
  item,
  className = 'text-white my-2 text-lg',
  activeClassName = 'border-r-2 pr-2',
}) => {
  return item.link ? (
    <Link
      className={className}
      activeClassName={activeClassName}
      to={item.link}
    >
      {item.name}
    </Link>
  ) : (
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

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
const coverSectionHeight = 'h-32vh sm:h-64v'

export const Navbar = ({
  coverPhoto: showCoverPhoto,
  siteMap,
  initiallyShown,
}) => {
  const [showFullBar, setShowFullBar] = useState(!showCoverPhoto)

  siteMap = siteMap || defaultSiteMap

  return (
    <React.Fragment>
      <NavContainer
        showCoverPhoto={showCoverPhoto}
        setFixedToTop={setShowFullBar}
      >
        <nav
          className={`
        ${transition}
      z-50 p-3 w-full flex
      ${
        showFullBar
          ? 'fixed bg-green lg:flex-row-reverse lg:justify-between lg:items-center'
          : 'bg-transparent sm:items-center md:items-start md:flex-col md:pr-0'
      } 
      `}
        >
          <div
            id="menu-container"
            className={`hidden md:block ${menuBarHeight} ${transition} 
            ${!showFullBar && 'md:self-end'} xl:w-60 
            ${!showFullBar ? `md:mb-10 md:pl-5 md:h-38p` : ''}
            `}
          >
            <TopMenu fixedToTop={showFullBar} siteMap={siteMap} />
            <div
              className={`${showFullBar && 'hidden'} ${transition} shadow-lg`}
              style={{
                position: 'relative',
                top: '-35px',
                borderStyle: 'solid',
                borderWidth: '0 0 40px 20px',
                left: '-25px',
                width: '130%',
                zIndex: '0',
                opacity: '70%',
                borderColor: 'transparent transparent green transparent',
              }}
            />
          </div>
          <div
            id="logo-container"
            className={`${transition}
          relative flex justify-center 
          ${
            showFullBar
              ? 'justify-start w-1/6 h-150 top-8p sm:top-4p md:top-32p left-16p'
              : 'w-full h-full lg:w-1/2 sm:h-70 lg:h-80 lg:p-8'
          }
         `}
          >
            <Logo
              className={`${transition} w-full h-full max-h-full max-w-full`}
            />
          </div>
        </nav>
      </NavContainer>
      <SideBarMenu
        fixedToTop={showFullBar}
        siteMap={siteMap}
        initiallyShown={initiallyShown}
      />
    </React.Fragment>
  )
}

const NavContainer = ({ showCoverPhoto, children, setFixedToTop }) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setFixedToTop(
          !showCoverPhoto || ref.current.getBoundingClientRect().top < 0
        )
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [showCoverPhoto, setFixedToTop])

  const sectionHeight = showCoverPhoto ? coverSectionHeight : menuBarHeight
  console.log('showing cover image', showCoverPhoto)
  return (
    <section ref={ref} id="header" className={`w-full static ${sectionHeight}`}>
      {showCoverPhoto ? <CoverImage>{children}</CoverImage> : children}
    </section>
  )
}

const DropDown = ({ fixedToTop, item }) => {
  return (
    <div
      id="dropdown"
      className={`
      hidden group-hover:absolute group-hover:flex
      flex-col items-start
      w-auto p-6 mr-2
      ${transition}
      bg-green bg-opacity-75 `}
    >
      {item.subItems.map((subItem) => {
        return (
          <NavLink
            className={`${
              fixedToTop ? 'text-white' : 'text-white'
            } ${transition} my-1`}
            item={subItem}
            key={subItem.name}
          ></NavLink>
        )
      })}
    </div>
  )
}

const TopMenuItem = ({ item, fixedToTop }) => {
  const itemTextStyle = `${
    fixedToTop ? 'text-white' : 'text-white'
  } ${transition}`
  return (
    <div
      id={'top-menu-item'}
      className={`relative 
      whitespace-no-wrap
      font-medium
      ${transition}
      ${item.subItems ? 'group' : ''}`}
    >
      {item.link || item.extLink ? (
        <NavLink
          className={itemTextStyle}
          activeClassName={`border-b-2`}
          item={item}
        ></NavLink>
      ) : (
        <span className={itemTextStyle}>{item.name}</span>
      )}
      {item.subItems && <DropDown fixedToTop={fixedToTop} item={item} />}
    </div>
  )
}

const TopMenu = ({ fixedToTop, siteMap }) => {
  return (
    <div
      id="menu"
      style={{ zIndex: '10', position: 'relative' }}
      className={`h-full flex flex-row justify-between items-center p-4 lg:p-6`}
    >
      {siteMap.items.map((item) => (
        <span
          key={item.name}
          className={`${fixedToTop ? 'mx-3' : 'mx-1'} ${transition}`}
        >
          <TopMenuItem item={item} fixedToTop={fixedToTop} />
        </span>
      ))}
    </div>
  )
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

const SideBarItem = ({ item }) => {
  return (
    <span className={`relative text-right my-1 ${item.subItems && 'group'}`}>
      {item.link || item.extLink ? (
        <NavLink item={item} />
      ) : (
        <span className={`text-white`}> {item.name} </span>
      )}
      {item.subItems && (
        <div className={'flex flex-col mr-3 mt-2 space-y-1'}>
          {item.subItems.map((subItem) => (
            <NavLink key={subItem.name} item={subItem} />
          ))}
        </div>
      )}
    </span>
  )
}

const NavLink = ({
  item,
  className = 'text-white',
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
      textColor={'text-white'}
      key={item.name}
    >
      {item.name}
    </ExternalLink>
  )
}

const SideBarMenu = ({ fixedToTop, siteMap, initiallyShown = false }) => {
  const [menuShown, setMenuShown] = useState(initiallyShown)
  const toggleMenuShown = () => {
    setMenuShown(!menuShown)
  }

  return (
    <div
      id="sidebar-component"
      className={`${transition}
      lg:hidden block
      z-50
     h-screen fixed right-0 top-0 p-4 sm:pr-8 
     ${menuShown ? 'w-1/2 sm:w-1/3' : 'w-0'}
     ${menuShown && 'bg-green'}
   `}
    >
      <div
        className={`md:hidden flex flex-row justify-end items-center 
        mt-2 sm:mt-4 
        ${(menuShown || fixedToTop) && 'text-white'} ${transition}`}
      >
        <MenuToggle clickBurger={toggleMenuShown} menuShown={menuShown} />
      </div>
      <div
        id="sidebar-menu"
        className={`
            ${menuShown ? 'block' : 'hidden'}
            flex flex-col justify-between mt-6 sm:mt-8`}
      >
        {siteMap.items.map((item) => (
          <SideBarItem key={item.name} item={item} fixedToTop={fixedToTop} />
        ))}
      </div>
    </div>
  )
}

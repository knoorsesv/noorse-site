import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import logo from '../images/Logo_highres.png'
import noorseCover from '../images/noorse_cover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const siteMap = {
  items: [
    { name: 'Home', link: '/' },
    {
      name: 'Info',
      subItems: [
        { name: 'Bestuur', link: '/bestuur' },
        { name: 'Fair Play', link: '/fairplay' },
        { name: 'Lidmaatschap', link: '/lidmaatschap' },
        { name: 'Sponsoring', link: '/sponsoring' },
        { name: 'Documenten', link: '/documenten' },
      ],
    },
    { name: 'Senioren', link: '/senioren' },
    { name: 'Jeugd', link: '/jeugd' },
    { name: 'Dames', link: '/dames' },
    { name: 'Meisjes', link: '/meisjes' },
    { name: 'G-Voetbal', link: '/gvoetbal' },
    { name: 'Contact', link: '/contact' },
  ],
}
const transition = `transition-all duration-200 ease-in`

export const Navbar = (props) => {
  const [fixedToTop, setFixedToTop] = useState(!props.coverPhoto)

  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setFixedToTop(
          !props.coverPhoto || ref.current.getBoundingClientRect().top < 0
        )
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [props.coverPhoto])

  return (
    <section
      ref={ref}
      id="header"
      className={`w-full ${
        props.coverPhoto
          ? 'h-navbar-cover-mobile md:h-navbar-cover'
          : 'h-navbar'
      }`}
    >
      <nav
        className={`
      z-30 fixed p-3 w-full h-navbar 
      grid md:flex ${transition}
      ${fixedToTop ? 'bg-green bg-opacity-75' : 'bg-transparent'} 
      ${fixedToTop ? '' : 'lg:h-navbar-over-cover'}
      ${fixedToTop ? 'grid-cols-2' : 'grid-cols-3'}`}
      >
        <div
          className={`flex relative ${transition}
          ${fixedToTop ? 'justify-start' : 'justify-center'}
          ${fixedToTop ? '' : 'col-start-2'}
          ${fixedToTop ? 'top-0 h-navbar-logo w-16' : 'top-logo h-logo'}
          ${fixedToTop ? 'lg:mt-3' : 'lg:mt-3'}
         `}
        >
          <Logo />
        </div>

        <div className={'hidden lg:block'}>
          <TopMenu fixedToTop={fixedToTop} />
        </div>
        <div className={'lg:hidden block'}>
          <SideBarMenu fixedToTop={fixedToTop} />
        </div>
      </nav>
      {props.coverPhoto && <CoverPhoto />}
    </section>
  )
}

const CoverPhoto = () => {
  return (
    <div
      className={
        'h-navbar-cover-mobile md:h-navbar-cover w-screen overflow-hidden object-center relative'
      }
    >
      <img className={'object-cover'} src={noorseCover} alt={'cover'} />
    </div>
  )
}

const DropDown = ({ fixedToTop, item }) => {
  return (
    <div
      className={`
      hidden group-hover:absolute group-hover:flex
      flex-col items-start
      w-auto p-6 mr-2
      ${fixedToTop ? 'bg-green' : 'bg-gray-lighter'} bg-opacity-75 `}
    >
      {item.subItems.map((subItem) => (
        <Link
          className={`${fixedToTop ? 'text-white' : 'text-gray-dark'} my-1`}
          to={subItem.link}
          key={subItem.name}
        >
          {subItem.name}
        </Link>
      ))}
    </div>
  )
}

const TopMenuItem = ({ item, fixedToTop }) => {
  return (
    <span
      className={`relative
      ${fixedToTop ? '' : 'p-3'} 
      ${item.subItems ? 'group' : ''}`}
    >
      {item.link ? (
        <Link
          className={`${
            fixedToTop
              ? 'text-white'
              : 'rounded bg-gray-lighter text-gray-dark p-3'
          }`}
          activeClassName={'border-b-2'}
          to={item.link}
        >
          {item.name}
        </Link>
      ) : (
        <span
          className={`${
            fixedToTop
              ? 'text-white'
              : 'rounded bg-gray-lighter text-gray-dark p-3'
          }`}
        >
          {item.name}
        </span>
      )}
      {item.subItems && <DropDown fixedToTop={fixedToTop} item={item} />}
    </span>
  )
}

const TopMenu = ({ fixedToTop }) => {
  return (
    <div
      id="menu"
      className={`h-navbar fixed right-0 top-0 p-4
      ${fixedToTop ? 'lg:p-6 lg:mr-4' : 'lg:mt-8 lg:mr-4'}
   `}
    >
      <div className={`flex flex-row justify-end items-center`}>
        {siteMap.items.map((item) => (
          <span key={item.name} className={`${fixedToTop ? 'mx-3' : 'mx-1'}`}>
            <TopMenuItem item={item} fixedToTop={fixedToTop} />
          </span>
        ))}
      </div>
    </div>
  )
}

const Logo = () => {
  return (
    <Link to={'/'} className={'max-h-full max-w-full text-center'}>
      <img
        src={logo}
        alt={'Noorse Logo'}
        className={`relative max-h-full max-w-full`}
      />
    </Link>
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
    <span
      className={`relative text-right my-1 ${item.subItems ? 'group' : ''}`}
    >
      {item.link ? (
        <LinkInSideBar item={item} />
      ) : (
        <span className={`text-white`}> {item.name} </span>
      )}
      {item.subItems && (
        <div className={'flex flex-col mr-3 mt-2 space-y-1'}>
          {item.subItems.map((subItem) => (
            <LinkInSideBar key={subItem.name} item={subItem} />
          ))}
        </div>
      )}
    </span>
  )
}

const LinkInSideBar = ({ item }) => {
  return (
    <Link
      className={`text-white`}
      activeClassName={'border-r-2 pr-2'}
      to={item.link}
    >
      {item.name}
    </Link>
  )
}

const SideBarMenu = ({ fixedToTop }) => {
  const [menuShown, setMenuShown] = useState(false)
  const toggleMenuShown = () => {
    setMenuShown(!menuShown)
  }

  return (
    <div
      id="sidebar-menu"
      className={`${transition}
     h-screen fixed right-0 top-0 p-4 sm:pr-8 
     ${menuShown ? 'w-1/2 sm:w-1/3' : 'w-0'}
     ${menuShown ? 'bg-green' : ''}
   `}
    >
      <div
        className={`md:hidden flex flex-row justify-end mb-3 mt-2 ${
          (menuShown || fixedToTop) && 'text-white'
        }`}
      >
        <MenuToggle clickBurger={toggleMenuShown} menuShown={menuShown} />
      </div>
      <div
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

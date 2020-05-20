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
      className={`w-full ${props.coverPhoto ? 'h-32v sm:h-64v' : ''}`}
    >
      <nav
        className={`
        ${transition}
      z-30 fixed p-3 w-full flex
      h-10v sm:h-12v
      ${fixedToTop ? 'bg-green bg-opacity-75' : 'bg-transparent'} 
      `}
      >
        <div
          id="logo-container"
          className={`${transition}
          relative h-full flex justify-center 
          ${
            fixedToTop
              ? 'w-1/5 md:w-1/10 ml-4 xl:ml-12'
              : 'w-full md:w-1/2 xl:w-1/3 top-32p sm:top-12v md:top-16v  px-24 sm:px-48 md:px-12 lg:px-32 '
          }
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
    <div className={'w-screen overflow-hidden object-center relative h-64v'}>
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
    <div
      className={`relative ${fixedToTop ? '' : 'rounded p-3 bg-gray-lighter  '}
      ${item.subItems ? 'group' : ''}`}
    >
      {item.link ? (
        <Link
          className={`xl:text-2xl ${
            fixedToTop ? 'text-white' : 'text-gray-dark'
          }`}
          activeClassName={'border-b-2'}
          to={item.link}
        >
          {item.name}
        </Link>
      ) : (
        <span
          className={`xl:text-2xl ${
            fixedToTop ? 'text-white' : 'text-gray-dark'
          }`}
        >
          {item.name}
        </span>
      )}
      {item.subItems && <DropDown fixedToTop={fixedToTop} item={item} />}
    </div>
  )
}

const TopMenu = ({ fixedToTop }) => {
  return (
    <div
      id="menu"
      className={`h-12v fixed right-0 top-0 p-4 lg:w-screen lg:flex lg:justify-end
      ${fixedToTop ? 'lg:p-6 lg:mr-4' : 'lg:mt-8 lg:mr-4'}
   `}
    >
      <div
        className={`flex flex-row justify-end xl:justify-between  xl:w-1/2 xl:mr-10 h-full items-center`}
      >
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
    <Link to={'/'} className={'max-w-full text-center'}>
      <img
        src={logo}
        alt={'Noorse Logo'}
        className={`${transition} relative max-w-full`}
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
        className={`md:hidden flex flex-row justify-end items-center mt-2 sm:mt-4 ${
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

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
          <Logo fixedToTop={fixedToTop} />
        </div>
        <Menu fixedToTop={fixedToTop} />
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
      hidden 
      md:group-hover:absolute md:group-focus:absolute 
      group-hover:flex group-focus:block 
      w-0
      group-hover:w-4/5 group-focus:w-4/5 lg:group-hover:w-auto lg:group-focus:w-auto
      ${transition}
      lg:pt-4 
      mr-2
      ${fixedToTop ? 'lg:bg-green' : 'lg:bg-gray-lighter'}
      lg:p-6
      flex-col items-end lg:items-start`}
    >
      {item.subItems.map((subItem) => (
        <Link
          className={`text-white ${fixedToTop ? '' : 'lg:text-gray-dark'} my-1`}
          to={subItem.link}
          activeClassName={'border-r-2 pr-1'}
          key={subItem.name}
        >
          {subItem.name}
        </Link>
      ))}
    </div>
  )
}

const MenuLink = ({ item, fixedToTop }) => {
  return (
    <span
      className={`relative
      ${fixedToTop ? '' : 'md:p-1 xl:p-3'} 
      ${item.subItems ? 'group' : ''}`}
    >
      {item.link ? (
        <Link
          className={`text-white ${
            fixedToTop ? '' : 'md:bg-gray-lighter md:text-gray-dark md:p-3'
          }`}
          activeClassName={'border-r-2 pr-2 md:border-b-2 md:border-r-0'}
          to={item.link}
        >
          {item.name}
        </Link>
      ) : (
        <span
          className={`text-white ${
            fixedToTop ? '' : 'md:bg-gray-lighter md:text-gray-dark md:p-3'
          }`}
        >
          {item.name}
        </span>
      )}
      {item.subItems && <DropDown fixedToTop={fixedToTop} item={item} />}
    </span>
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

const Menu = ({ fixedToTop }) => {
  const [menuShown, setMenuShown] = useState(false)
  const toggleMenuShown = () => {
    setMenuShown(!menuShown)
  }

  return (
    <div
      id="menu"
      className={`${transition}
     h-screen lg:h-navbar
     ${menuShown ? 'w-1/2' : 'w-0'}
     md:w-4/5 md:w-4/5
     fixed right-0 lg:top
     p-4
     ${menuShown ? 'bg-green' : ''}
   `}
    >
      <div
        className={`md:hidden flex flex-row justify-end mb-3 ${
          (menuShown || fixedToTop) && 'text-white'
        }`}
      >
        <MenuToggle clickBurger={toggleMenuShown} menuShown={menuShown} />
      </div>
      <div
        className={`
            ${menuShown ? 'block' : 'hidden'}
            text-end
            md:flex md:items-center md:justify-end
            md:flex-row md:items-center
            flex flex-col justify-between
            right-0 top-mobile-navbar md:top-0
            md:bg-transparent`}
      >
        '
        {siteMap.items.map((item) => (
          <span
            key={item.name}
            className={`text-right my-1 ${fixedToTop ? 'lg:mx-3' : 'lg:mx-1'}`}
          >
            <MenuLink item={item} fixedToTop={fixedToTop} />
          </span>
        ))}
      </div>
    </div>
  )
}

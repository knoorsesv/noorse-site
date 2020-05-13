import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import logo from '../images/Logo_highres.png'
import noorseCover from '../images/noorse_cover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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

export default (props) => {
  const [isSticky, setSticky] = useState(!props.coverPhoto)
  const [menuShown, setMenuShown] = useState(false)

  const ref = useRef(null)

  const clickBurger = () => {
    setMenuShown(!menuShown)
  }

  if (props.coverPhoto) {
    useEffect(() => {
      const handleScroll = () => {
        if (ref.current) {
          setSticky(ref.current.getBoundingClientRect().top < 0)
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', () => handleScroll)
      }
    }, [])
  }

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
        className={`navbar ${isSticky ? 'is-primary' : 'bg-transparent'} 
      p-3 fixed transition-all duration-200 ease-in w-full h-navbar ${
        isSticky ? '' : 'lg:h-navbar-over-cover'
      }
      grid ${isSticky ? 'grid-cols-2' : 'grid-cols-3'} md:flex`}
      >
        <Logo isSticky={isSticky} />
        <MenuToggle clickBurger={clickBurger} />
        <MenuItems menuShown={menuShown} isSticky={isSticky} />
      </nav>
      {props.coverPhoto && (
        <div
          className={
            'hero h-navbar-cover-mobile md:h-navbar-cover w-screen overflow-hidden object-center relative'
          }
        >
          <img className={'object-cover'} src={noorseCover} alt={'cover'} />
        </div>
      )}
    </section>
  )
}

const DropDown = ({ isSticky, item }) => {
  return (
    <div
      className={`hidden group-hover:absolute group-focus:absolute group-hover:block lg:pt-4 ${
        isSticky ? 'bg-green' : 'bg-gray-lighter'
      }`}
    >
      {item.subItems.map((subItem) => (
        <Link
          className={`navbar-item ${isSticky ? '' : 'lg:text-gray-dark'}`}
          to={subItem.link}
          key={subItem.name}
        >
          {subItem.name}
        </Link>
      ))}
    </div>
  )
}

const MenuLink = ({ item, isSticky }) => {
  return (
    <div
      className={`relative
      ${isSticky ? '' : 'p-1 md:p-1 xl:p-3'} 
      ${item.subItems ? 'group' : ''}`}
    >
      {item.link ? (
        <Link
          className={`text-white ${
            isSticky ? '' : 'md:bg-gray-lighter md:text-gray-dark md:p-3'
          }`}
          to={item.link}
        >
          {item.name}
        </Link>
      ) : (
        <span
          className={`${
            isSticky ? '' : 'bg-gray-lighter md:text-gray-dark md:p-3 md:h-auto'
          }`}
        >
          {item.name}
        </span>
      )}
      {item.subItems && <DropDown isSticky={isSticky} item={item} />}
    </div>
  )
}

const Logo = ({ isSticky }) => {
  return (
    <div
      className={`navbar-brand flex 
          ${isSticky ? 'justify-start' : 'justify-center'}
          ${isSticky ? '' : 'col-start-2'}
         `}
    >
      <div className={'navbar-item'}>
        <img
          src={logo}
          alt={'Noorse Logo'}
          className={`relative transition-all duration-200 ease-in ${
            isSticky ? 'top-0 h-navbar-logo' : 'top-logo h-logo'
          }`}
        />
      </div>
    </div>
  )
}

const MenuToggle = ({ clickBurger }) => {
  return (
    <div className={'flex flex-row justify-end p-3 md:hidden'}>
      <FontAwesomeIcon
        className={'h-6 w-6'}
        icon={faBars}
        onClick={clickBurger}
        id="menu-hamburger"
      />
    </div>
  )
}

const MenuItems = ({ menuShown, screenIsAtLeast, isSticky }) => {
  return (
    <div
      className={`
        md:pr-10
        ${menuShown ? 'block' : 'hidden'}
        absolute md:flex md:items-center md:justify-end
        right-0
        w-2/5 md:w-4/5
        h-3/4 md:h-full
        top-mobile-navbar md:top-0
        bg-green md:bg-transparent
        `}
    >
      <div
        className={` 
    py-4 pl-3 
    h-full md:h-auto md:w-4/5
    flex flex-col justify-between 
    md:flex-row md:items-center`}
      >
        {siteMap.items.map((item) => (
          <MenuLink item={item} isSticky={isSticky} key={item.name} />
        ))}
      </div>
    </div>
  )
}

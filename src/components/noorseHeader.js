import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import logo from '../images/Logo_highres.png'
import noorseCover from '../images/noorse_cover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const siteMap = {
  items: [
    { name: 'Home', link: '/' },
    { name: 'Nieuws', link: '/nieuws' },
    {
      name: 'Info',
      subItems: [
        { name: 'Bestuur', link: '/bestuur' },
        { name: 'Clubfiche', link: '/clubfiche' },
        { name: 'Geschiedenis', link: '/geschiedenis' },
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
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top < 0)
    }
  }

  if (props.coverPhoto) {
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', () => handleScroll)
      }
    }, [])
  }

  const stickyNavbarHeight = 'h-navbar'
  return (
    <section
      ref={ref}
      id="header"
      className={`w-full ${
        props.coverPhoto
          ? 'h-navbar-cover-mobile md:h-navbar-cover'
          : stickyNavbarHeight
      }`}
    >
      <nav
        className={`navbar ${isSticky ? 'is-primary' : 'bg-transparent'} 
      p-3 fixed transition-all duration-200 ease-in w-full ${stickyNavbarHeight}
      grid 
      ${isSticky ? 'grid-cols-2' : 'grid-cols-3'}
      md:flex
      
      `}
      >
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
        <div className={'flex flex-row justify-end p-3 md:hidden'}>
          <FontAwesomeIcon className={'h-6 w-6'} icon={faBars} />
        </div>
        <div className={'navbar-menu md:pt-10 md:pr-4'}>
          <div className={'navbar-start'} />
          <div className={'navbar-end'}>
            {siteMap.items.map((item) => (
              <MenuLink item={item} isSticky={isSticky} />
            ))}
          </div>
        </div>
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

const MenuLink = ({ item, isSticky }) => {
  return (
    <div
      className={`
      ${isSticky ? '' : 'p-3'} 
      navbar-item 
      ${item.subItems ? 'group' : ''}`}
    >
      {item.link ? (
        <Link
          className={`
        navbar-item
        ${isSticky ? '' : 'bg-gray-lighter text-gray-dark'}`}
          to={item.link}
        >
          {item.name}
        </Link>
      ) : (
        <div
          className={`navbar-item ${
            isSticky ? '' : 'bg-gray-lighter text-gray-dark'
          }`}
        >
          {' '}
          {item.name}
        </div>
      )}

      {item.subItems && (
        <div
          className={`navbar-dropdown
        hidden group-hover:block group-focus:block
        ${isSticky ? '' : 'bg-gray-lighter'}`}
        >
          {item.subItems.map((subItem) => (
            <Link
              className={`navbar-item ${isSticky ? '' : 'text-gray-dark'}`}
              to={subItem.link}
              key={subItem.name}
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

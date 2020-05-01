import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import logo from '../images/Logo_highres.png'
import noorseCover from '../images/noorse_cover.jpg'

const siteMap = {
  items: [
    { name: 'Home', link: '/' },
    { name: 'Nieuws', link: '/nieuws' },
    {
      name: 'Info',
      link: '/info',
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

export default () => {
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top < 0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <section ref={ref}>
      <nav
        className={`navbar ${isSticky ? 'is-primary' : 'bg-transparent'} 
      p-3 fixed transition-all duration-200 ease-in w-full`}
      >
        <div className={'navbar-brand'}>
          <div className={'navbar-item'}>
            <img
              src={logo}
              alt={'Noorse Logo'}
              className={`relative transition-all duration-200 ease-in ${
                isSticky ? 'top-0 h-75' : 'top-80 h-160'
              }`}
            />
          </div>
        </div>
        <div className={'navbar-menu'}>
          <div className={'navbar-start'} />
          <div className={'navbar-end'}>
            {siteMap.items.map((item) => (
              <MenuLink item={item} sticky={isSticky} />
            ))}
          </div>
        </div>
      </nav>
      <div className={'hero h-3/4 overflow-hidden object-center'}>
        <img className={'object-cover '} src={noorseCover} alt={'cover'} />
      </div>
    </section>
  )
}

const MenuLink = ({ item, sticky }) => {
  return (
    <div
      className={`${sticky ? '' : 'p-3'} navbar-item ${
        item.subItems ? 'is-hoverable' : ''
      }`}
    >
      <Link
        className={`${item.subItems ? 'navbar-item' : 'navbar-item'} 
      ${sticky ? '' : 'bg-gray-lighter text-gray-dark'}`}
        to={item.link}
      >
        {item.name}
      </Link>
      {item.subItems && (
        <div className={`navbar-dropdown ${sticky ? '' : 'bg-gray-lighter'}`}>
          {item.subItems.map((subItem) => (
            <Link
              className={`navbar-item ${sticky ? '' : 'text-gray-dark'}`}
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

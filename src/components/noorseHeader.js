import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/Logo_highres.png'


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
  return (
    <nav className={'navbar is-spaced'}>
      <div className={'navbar-brand'}>
        <div className={'navbar-item' }>
          <img src={logo} height="80" alt={'Noorse Logo'}/>
        </div>
      </div>
      <div className={'navbar-menu'}>
        <div className={'navbar-start'}/>
        <div className={'navbar-end'}>
          {siteMap.items.map((item) => (
            <MenuLink item={item}/>
          ))}
        </div>
      </div>
    </nav>
  )
}

const MenuLink = ({ item }) => {
  return (
    <div className={`navbar-item ${item.subItems ? 'has-dropdown is-hoverable' : ''}`}>
      <Link className={`${item.subItems ? 'navbar-link' : 'navbar-item is-tab'}`} to={item.link}>{item.name}</Link>
      {item.subItems && (
        <div className={'navbar-dropdown'}>
          {item.subItems.map((subItem) => (
            <Link className={'navbar-item'} to={subItem.link} key={subItem.name}>{subItem.name}</Link>
          ))}
        </div>
      )}
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { Link, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

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
const menuBarHeight = 'h-10v sm:h-12v'
const coverSectionHeight = 'h-32v sm:h-64v'

export const Navbar = (props) => {
  const [fixedToTop, setFixedToTop] = useState(!props.coverPhoto)

  const images = useStaticQuery(graphql`
    query {
      cover: file(name: { eq: "noorse_cover" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(name: { eq: "Logo_highres" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <NavContainer
        coverPhoto={props.coverPhoto}
        image={images.cover}
        setFixedToTop={setFixedToTop}
      >
        <nav
          className={`
        ${transition}
      z-50 p-3 w-full flex
      ${fixedToTop ? menuBarHeight : 'h-full'} 
      ${fixedToTop ? 'fixed bg-green bg-opacity-75' : 'bg-transparent'} 
      `}
        >
          <div
            id="logo-container"
            className={`${transition}
          relative h-full flex justify-center 
          bg-black
          ${fixedToTop ? 'justify-start w-1/6' : 'w-full'}
         `}
          >
            <Logo image={images.logo} />
          </div>

          <div
            className={`hidden md:block ${menuBarHeight} fixed right-0 top-0 `}
          >
            <TopMenu fixedToTop={fixedToTop} />
          </div>
        </nav>
      </NavContainer>
      <SideBarMenu fixedToTop={fixedToTop} />
    </React.Fragment>
  )
}

const NavContainer = ({ coverPhoto, children, image, setFixedToTop }) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setFixedToTop(
          !coverPhoto || ref.current.getBoundingClientRect().top < 0
        )
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [coverPhoto, setFixedToTop])
  const sectionHeight = coverPhoto ? coverSectionHeight : menuBarHeight
  return (
    <section ref={ref} id="header" className={`w-full static ${sectionHeight}`}>
      {coverPhoto ? (
        <BackgroundImage
          fluid={image.childImageSharp.fluid}
          className={'h-full z-50'}
        >
          {children}
        </BackgroundImage>
      ) : (
        children
      )}
    </section>
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
  const itemTextStyle = `xl:text-xl ${
    fixedToTop ? 'text-white' : 'text-gray-dark'
  }`
  return (
    <div
      className={`relative ${fixedToTop ? '' : 'rounded p-2 bg-gray-lighter  '}
      ${item.subItems ? 'group' : ''}`}
    >
      {item.link ? (
        <Link
          className={itemTextStyle}
          activeClassName={'border-b-2'}
          to={item.link}
        >
          {item.name}
        </Link>
      ) : (
        <span className={itemTextStyle}>{item.name}</span>
      )}
      {item.subItems && <DropDown fixedToTop={fixedToTop} item={item} />}
    </div>
  )
}

const TopMenu = ({ fixedToTop }) => {
  return (
    <div
      id="menu"
      className={`h-full flex flex-row justify-end xl:justify-between items-center xl:mr-10 p-4 ${
        fixedToTop ? 'lg:p-6 lg:mr-4' : 'lg:mt-8 lg:mr-4'
      }  `}
    >
      {siteMap.items.map((item) => (
        <span key={item.name} className={`${fixedToTop ? 'mx-3' : 'mx-1'}`}>
          <TopMenuItem item={item} fixedToTop={fixedToTop} />
        </span>
      ))}
    </div>
  )
}

const Logo = ({ image }) => {
  return (
    <Link to={'/'} className={'h-full w-full max-w-full max-h-full'}>
      <Img
        fluid={image.childImageSharp.fluid}
        alt={'Noorse Logo'}
        imgStyle={{ objectFit: 'contain' }}
        className={`${transition} w-auto h-full max-h-full max-w-full`}
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
      lg:hidden block
      z-50
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

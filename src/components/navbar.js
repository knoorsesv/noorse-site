import React, { useEffect, useRef, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import BackgroundImage from 'gatsby-background-image'
import { Logo } from './images'
import { ExternalLink } from './text'
import { siteMap } from '../env/constants'

const transition = `transition-all duration-200 ease-in`
const menuBarHeight = 'h-64p sm:h-96p'
const coverSectionHeight = 'h-32vh sm:h-64v'

export const Navbar = ({ coverPhoto, siteMap = siteMap }) => {
  const [fixedToTop, setFixedToTop] = useState(!coverPhoto)

  const coverImage = useStaticQuery(graphql`
    query {
      cover: file(name: { eq: "noorse_cover" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <NavContainer
        coverPhoto={coverPhoto}
        image={coverImage.cover}
        setFixedToTop={setFixedToTop}
      >
        <nav
          className={`
        ${transition}
      z-50 p-3 w-full flex
      ${fixedToTop ? menuBarHeight : coverSectionHeight} 
      ${
        fixedToTop
          ? 'fixed bg-green lg:flex-row-reverse lg:justify-between lg:items-center'
          : 'bg-transparent sm:items-center md:items-start md:flex-col'
      } 
      `}
        >
          <div
            id="menu-container"
            className={`hidden md:block ${menuBarHeight} ${transition} ${
              !fixedToTop && 'md:self-end'
            } xl:w-60 `}
          >
            <TopMenu fixedToTop={fixedToTop} siteMap={siteMap} />
          </div>
          <div
            id="logo-container"
            className={`${transition}
          relative flex justify-center 
          ${
            fixedToTop
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
      <SideBarMenu fixedToTop={fixedToTop} siteMap={siteMap} />
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
          style={{ backgroundPosition: 'top' }}
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
      id="dropdown"
      className={`
      hidden group-hover:absolute group-hover:flex
      flex-col items-start
      w-auto p-6 mr-2
      ${transition}
      ${fixedToTop ? 'bg-green' : 'bg-gray-lighter'} bg-opacity-75 `}
    >
      {item.subItems.map((subItem) =>
        subItem.link ? (
          <Link
            className={`${
              fixedToTop ? 'text-white' : 'text-gray-dark'
            } ${transition} my-1`}
            to={subItem.link}
            key={subItem.name}
          >
            {subItem.name}
          </Link>
        ) : (
          <ExternalLink url={subItem.extLink} styled={false} icon={false}>
            {subItem.name}
          </ExternalLink>
        )
      )}
    </div>
  )
}

const TopMenuItem = ({ item, fixedToTop }) => {
  const itemTextStyle = `${
    fixedToTop ? 'text-white' : 'text-gray-dark'
  } ${transition}`
  return (
    <div
      className={`relative 
      whitespace-no-wrap
      font-medium
      ${!fixedToTop && 'rounded p-2 bg-gray-lighter'} ${transition}
      ${item.subItems ? 'group' : ''}`}
    >
      {item.link ? (
        <Link
          className={itemTextStyle}
          activeClassName={`${fixedToTop && 'border-b-2'}`}
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

const TopMenu = ({ fixedToTop, siteMap }) => {
  return (
    <div
      id="menu"
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

const SideBarMenu = ({ fixedToTop, siteMap }) => {
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

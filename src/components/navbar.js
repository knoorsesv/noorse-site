import React, { useEffect, useRef, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Logo } from './images'
import { ExternalLink } from './text'
import { siteMap as defaultSiteMap, webshopLink } from '../env/constants'
import { CoverImage } from './cover-image'
import ctl from '@netlify/classnames-template-literals'

const transition = `transition-all duration-200 ease-in`
const menuBarHeight = 'h-64p sm:h-80p'
const coverSectionHeight = 'h-32v sm:h-48v lg:64v'

const pagesQuery = graphql`
  query {
    allSitePage {
      nodes {
        path
      }
    }
  }
`

const NavSection = ({
  pageHasCoverPhoto,
  children,
  setTopMenuBarShown,
  topMenuBarShown,
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setTopMenuBarShown(
          !pageHasCoverPhoto || ref.current.getBoundingClientRect().top < 0
        )
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [pageHasCoverPhoto, setTopMenuBarShown])

  const navContainerClasses = ctl(`
  ${pageHasCoverPhoto ? coverSectionHeight : menuBarHeight} 
  ${topMenuBarShown ? 'bg-green' : ''}
  w-full static`)
  return (
    <section ref={ref} id="nav-container" className={navContainerClasses}>
      {pageHasCoverPhoto ? (
        <CoverImage className={coverSectionHeight} />
      ) : (
        <></>
      )}
      {children}
    </section>
  )
}

export const Navbar = ({ pageHasCoverPhoto = false, siteMap }) => {
  const [topMenuBarShown, setTopMenuBarShown] = useState(!pageHasCoverPhoto)
  const [sideBarMenuShown, setMenuShown] = useState(false)

  const toggleMenuShown = () => {
    setMenuShown(!sideBarMenuShown)
  }

  const allPages = useStaticQuery(pagesQuery)

  siteMap = siteMap || defaultSiteMap

  // it should be possible to do this cleaner + query could happen outside of navbar component to keep it cleaner / dumber
  const infoPageSiteMaps = allPages.allSitePage.nodes
    .filter((node) => node.path.includes('info'))
    .map((node) => ({
      name: node.path.replace('/info/', '').replace('/', ''),
      link: node.path,
    }))
  siteMap.items.find((item) => item.name === 'Info').subItems = [
    ...infoPageSiteMaps,
    {
      name: 'Webshop',
      extLink: webshopLink,
    },
  ].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

  const navClasses = `
  ${transition}
  fixed w-full
  pr-4
  ${topMenuBarShown ? `z-20 bg-green ${menuBarHeight}` : 'z-50 h-0 p-0'}
  `
  return (
    <React.Fragment>
      <NavSection
        topMenuBarShown={topMenuBarShown}
        pageHasCoverPhoto={pageHasCoverPhoto}
        setTopMenuBarShown={setTopMenuBarShown}
      >
        <nav className={navClasses}>
          <MenuItemList
            topMenuBarShown={topMenuBarShown}
            sideBarMenuShown={sideBarMenuShown}
            siteMap={siteMap}
          />
        </nav>
        <MenuLogo topMenuBarShown={topMenuBarShown} />
        <MenuToggle
          clickBurger={toggleMenuShown}
          sideBarMenuShown={sideBarMenuShown}
          topMenuBarShown={topMenuBarShown}
        />
      </NavSection>
    </React.Fragment>
  )
}
const MenuItemList = ({ topMenuBarShown, siteMap, sideBarMenuShown }) => {
  const ulClasses = ctl(`
  fixed top-0 
  flex flex-col lg:flex-row lg:justify-end lg:items-center
  space-y-3 lg:space-y-0
  pt-16 pr-4 lg:pr-6
  w-1/2 sm:w-2/5 
  list-none z-50
  ${transition}
  ${
    sideBarMenuShown
      ? 'h-full lg:h-80p bg-green opacity-100 right-0 lg:w-full lg:py-1'
      : 'opacity-0 -right-1/2 lg:right-0'
  }
  ${
    topMenuBarShown
      ? 'h-full lg:h-80p bg-green lg:opacity-100 right-0 lg:w-full lg:py-10'
      : 'lg:right-0 lg:w-auto lg:h-16 lg:top-6 lg:pt-0 lg:pl-5 lg:opacity-90 lg:bg-green'
  }
  `)

  return (
    <ul id="menu-list" className={ulClasses}>
      {siteMap.items.map((item) => {
        const liClasses = ctl(`text-right lg:text-center
    lg:mx-2 xl:px-3 lg:py-3
  ${transition}
  ${item.subItems && 'group'}`)
        return (
          <li id={'menu-item'} key={item.name} className={liClasses}>
            <NavLink item={item} />
            {item.subItems && (
              <SubMenuItemList fixedToTop={topMenuBarShown} item={item} />
            )}
          </li>
        )
      })}
    </ul>
  )
}

const SubMenuItemList = ({ item }) => {
  const ulClasses = ctl(`
  list-none
  lg:hidden lg:group-hover:absolute lg:group-hover:flex
  flex flex-col space-y-3 lg:items-start lg:-ml-1
  w-auto lg:p-6 mr-4 lg:bg-green lg:opacity-90
  ${transition}`)

  return (
    <ul id="dropdown" className={ulClasses}>
      {item.subItems.map((subItem) => {
        return (
          <li key={subItem.name}>
            <NavLink item={subItem} />
          </li>
        )
      })}
    </ul>
  )
}

const NavLink = ({ item }) => {
  const className = 'text-white text-lg capitalize'

  if (item.link) {
    return (
      <Link
        className={className}
        activeClassName={'border-b-2 border-white'}
        to={item.link}
      >
        {item.name}
      </Link>
    )
  }

  if (item.extLink) {
    return (
      <ExternalLink
        url={item.extLink}
        styled={false}
        icon={false}
        className={className}
        textColor={'text-white'}
        key={item.name}
      >
        {item.name}
      </ExternalLink>
    )
  }
  return <span className={className}>{item.name}</span>
}

const MenuLogo = ({ topMenuBarShown }) => {
  const logContainerClasses = ctl(`${transition}
       flex fixed z-20
      ${
        topMenuBarShown
          ? `justify-start w-1/6 top-8 sm:top-32p left-16p ${menuBarHeight}`
          : `justify-center w-full top-0 lg:w-1/2 p-2 sm:p-6 lg:p-8 ${coverSectionHeight}`
      }     `)
  return (
    <div id="logo-container" className={logContainerClasses}>
      <Logo className={`${transition}`} />
    </div>
  )
}

const MenuToggle = ({ clickBurger, sideBarMenuShown, topMenuBarShown }) => {
  const toggleWrapperClasses = ctl(`fixed right-0 
    lg:hidden
    mt-4 mr-3 sm:mt-6 sm:mr-4 
    p-2 z-50 text-white
    ${sideBarMenuShown || topMenuBarShown ? '' : 'bg-green'} ${transition}`)
  return (
    <div className={toggleWrapperClasses}>
      <FontAwesomeIcon
        className={'h-6 w-6'}
        icon={sideBarMenuShown ? faTimes : faBars}
        onClick={clickBurger}
        id="menu-hamburger"
      />
    </div>
  )
}

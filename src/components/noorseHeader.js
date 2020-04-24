import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { Box, Button, Drop, Header, Text } from 'grommet'

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

const refsCollection = {}

const hoverMenu = (item, setHover) => {
  if (setHover) {
    setHover(item)
  }
}

const goTo = (item) => {
  navigate(item.link)
}

const menuOpened = (item, hover) => {
  function getSubItemsFotItem() {
    let subItemsForItem = siteMap.items.find(definedItem => definedItem.name === item.name)
    return subItemsForItem && subItemsForItem.subItems && subItemsForItem.subItems.map(item => item.name)
  }
  return item.name === hover.name || getSubItemsFotItem().includes(hover.name)
}

export default () => {
  const [hover, setHover] = useState('')
  return (
    <Header pad="medium" background="brand" justify="center" gap="small" height="xxsmall">
      {siteMap.items.map((item) => (
        <Box key={item.name}>
          <MenuLink item={item}
                    setHover={setHover}
          />
          {item.subItems && menuOpened(item, hover) && (
            <Drop target={refsCollection[item.name]}
                  align={{ top: 'bottom', left: 'left' }}
                  elevation="none"
                  overflow="hidden"
                  margin={{ top: 'medium' }}
            >
              <Box direction="column" round={{ corner: 'bottom' }}
                   animation="slideDown"
                   gap={'small'}
                   background="brand"
                   pad={{ vertical: 'small', left: 'small', right: 'large' }}
                   onMouseLeave={() => setHover('')}
              >
                {item.subItems.map((subItem) => (
                  <MenuLink item={subItem} key={subItem.name} setHover={setHover}/>
                ))}
              </Box>
            </Drop>
          )}
        </Box>
      ))}
    </Header>
  )
}

const MenuLink = ({ item, setHover, ...rest }) => {
  return (
    <Button
      ref={(instance) => {
        refsCollection[item.name] = instance
      }}
      onMouseEnter={() => hoverMenu(item, setHover)}
      onClick={() => goTo(item)}
    >
      <Text>{item.name}</Text>
    </Button>
  )
}

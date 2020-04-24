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
    <Header background="brand" pad="medium" justify="center" gap="small" height="xxsmall">
      {siteMap.items.map((item) => (
        <div>
          <MenuLink item={item}
                    key={item.name}
                    setHover={setHover}
          />
          {item.subItems && menuOpened(item, hover) && (
            <Drop target={refsCollection[item.name]}
                  align={{ top: 'bottom' }}
                  elevation="none"
                  overflow="hidden"
                  margin={{ top: 'medium' }}
            >
              <Box direction="column" round={{ corner: 'bottom' }}
                   background="brand"
                   animation="slideDown"
                   pad={{ vertical: 'small' }}
              >
                {item.subItems.map((subItem) => (
                  <MenuLink item={subItem} key={subItem.name} setHover={setHover}/>
                ))}
              </Box>
            </Drop>
          )}
        </div>
      ))}
    </Header>
  )
}

const MenuLink = ({ item, setHover, ...rest }) => {
  return (
    <Button plain
            ref={(instance) => {
              refsCollection[item.name] = instance
            }}
            onMouseEnter={() => hoverMenu(item, setHover)}
            onMouseLeave={() => !item.subItems && setHover('')}
    >
      {({ hover }) => (
        <Box background={hover ? 'accent-1' : undefined}
             pad={{ vertical: 'xsmall', left: 'small', right: 'large' }}>
          <Text onClick={() => goTo(item)}>{item.name}</Text>
        </Box>
      )}
    </Button>)
}

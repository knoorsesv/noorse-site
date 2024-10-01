export const webshopLink = 'https://noorsesv.shop4clubs.eu/'
export const trooperLink = 'https://www.trooper.be/noorse'
export const newsletterLink = 'http://eepurl.com/hRibPn'

// todo: these category names could be fetched from contentful
export const siteMap = {
  items: [
    { name: 'Home', link: '/' },
    {
      name: 'Club',
      subItems: [
        {
          name: 'Bestuur',
          link: '/info/bestuur',
        },
        {
          name: 'Beleidsplan',
          link: '/info/beleidsplan',
        },
        {
          name: 'Fairplay',
          link: '/info/fairplay',
        },
        {
          name: 'Structuur',
          link: '/info/structuur',
        },
      ],
    },
    {
      name: 'Kalender',
      link: '/info/kalender',
    },
    {
      name: 'Lidmaatschap',
      link: '/info/lidmaatschap',
    },
    {
      name: 'Nieuws',
      link: '/info/nieuws',
    },
    {
      name: 'Sponsors',
      link: '/info/sponsors',
    },
    {
      name: 'Verzekering',
      link: '/info/verzekering',
    },
    {
      name: 'Trooper',
      extLink: trooperLink,
    },
    {
      name: 'Webshop',
      extLink: webshopLink,
    },
    { name: 'Heren', link: '/senioren' },
    { name: 'Jeugd', link: '/jeugd' },
    { name: 'Dames', link: '/dames' },
    { name: 'Contact', link: '/contact' },
  ],
}

export const imageFileTypes = ['image/jpeg', 'image/png']

export const webshopLink = 'https://noorsesv.shop4clubs.eu/'
export const trooperLink = 'https://www.trooper.be/noorse'
export const newsletterLink = 'http://eepurl.com/hRibPn'

// todo: these category names could be fetched from contentful
export const siteMap = {
  items: [
    {
      name: 'Club',
      subItems: [
        {
          name: 'Aanspreekpunt Integriteit',
          link: '/info/aanspreekpunt-integriteit',
        },
        {
          name: 'Beleidsplan 2024-2027',
          link: '/info/beleidsplan',
        },
        {
          name: 'Fairplay',
          link: '/info/fairplay',
        },
        {
          name: 'Structuur en clubwerking',
          link: '/info/structuur',
        },
        {
          name: 'Sportieve werking',
          link: '/info/sportieve-werking',
        },
        {
          name: 'Verzekering',
          link: '/info/verzekering',
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
      name: 'Trooper',
      extLink: trooperLink,
    },
    {
      name: 'Webshop',
      extLink: webshopLink,
    },
    {
      name: 'Ploegen',
      subItems: [
        { name: 'Dames', link: '/dames' },
        { name: 'Heren', link: '/senioren' },
        { name: 'Jeugd', link: '/jeugd' },
        { name: 'Recrea', link: '/recrea' },
      ],
    },
    { name: 'Contact', link: '/contact' },
  ],
}

export const imageFileTypes = ['image/jpeg', 'image/png']

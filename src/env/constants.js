export const webshopLink = 'https://noorsesv.shop4clubs.eu/'
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
          name: 'Fairplay',
          link: '/info/fairplay',
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
          name: 'Verzekering',
          link: '/info/verzekering',
        },
        {
          name: 'Webshop',
          extLink: webshopLink,
        },
      ],
    },
    { name: 'Senioren', link: '/senioren' },
    { name: 'Jeugd Jongens', link: '/jeugd jongens' },
    { name: 'Dames', link: '/dames' },
    { name: 'Jeugd Meisjes', link: '/jeugd meisjes' },
    { name: 'G-Werking', link: '/g-werking' },
    { name: 'Contact', link: '/contact' },
  ],
}

export const imageFileTypes = ['image/jpeg', 'image/png']

//todo: move to contentful

export const webshopLink = 'https://www.qlub.com/qlub?club=k00332'

export const siteMap = {
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
        { name: 'COVID-19', link: '/covid' },
        { name: 'Webshop', extLink: webshopLink },
      ],
    },
    { name: 'Senioren', link: '/senioren' },
    { name: 'Jeugd', link: '/jeugd' },
    { name: 'Dames', link: '/dames' },
    { name: 'Meisjes', link: '/meisjes' },
    { name: 'G-Voetbal', link: '/g-voetbal' },
    { name: 'Contact', link: '/contact' },
  ],
}

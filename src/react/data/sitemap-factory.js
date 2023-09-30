export const siteMapFactory = () => ({
  items: [
    { name: 'Home', link: '/' },
    {
      name: 'Club',
      subItems: [
        {
          name: 'Webshop',
          extLink: '/webshop',
        },
        {
          name: 'Bestuur',
          link: '/bestuur',
        },
      ],
    },
    { name: 'Senioren', link: '/senioren' },
  ],
})

/** @type {import('gatsby').GatsbyConfig} */

module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.gstatic.com'],
        interval: 500,
        timeout: 30000,
        custom: [
          {
            name: ['Bigilla'],
            file: '/fonts/css/all.css',
          },
        ],
        web: [
          {
            name: 'Montserrat',
            file: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap',
          },
        ],
      },
    },
  ],
};

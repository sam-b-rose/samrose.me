const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Sam Rose',
    author: 'Sam Rose',
    description:
      'Personal blog of Sam Rose, a front-end software engineer who specializes in systems thinking, design tooling, and advocacy.',
    siteUrl: 'https://www.samrose.me',
    social: {
      twitter: '@_samrose3_',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@constants': path.resolve(__dirname, 'src/constants'),
          '@helpers': path.resolve(__dirname, 'src/helpers'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@style': path.resolve(__dirname, 'src/style'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              disableBgImageOnAlpha: true,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: false,
        preconnect: ['https://fonts.gstatic.com'],
        custom: [
          {
            name: ['MonoLisa'],
            file: '/fonts.css',
          },
        ],
        web: [
          {
            name: ['IBM Plex Sans', 'Inter', 'Fugaz One', 'Doto'],
            file: 'https://fonts.googleapis.com/css2?family=Fugaz+One&family=IBM+Plex+Sans:wght@600&family=Inter:wght@400;500&family=Doto:wght@100..900&display=swap',
          },
        ],
      },
    },
  ],
};

const path = require('path');

const rssConfig = require('./rss-plugin-config');

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
    rssConfig,
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
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/BlogPost/BlogPost.tsx'),
          default: require.resolve('./src/components/MDXPage/MDXPage.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-mermaid',
            options: {
              theme: 'base',
              mermaidOptions: {
                themeVariables: {
                  background: '#0E0E1A',
                  primaryColor: '#151628',
                  primaryBorderColor: 'hsl(210deg, 25%, 88%)',
                  primaryTextColor: '#C6797E',
                },
              },
            },
          },
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
        name: 'posts',
        path: `${__dirname}/src/pages/posts`,
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Sans:600', 'Inter:400,500', 'Fugaz One'],
        },
        custom: {
          families: ['MonoLisa'],
          urls: ['/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-19428169-1`,
      },
    },
    {
      resolve: `gatsby-plugin-splitbee`,
      options: {
        includeInDevelopment: false,
      },
    },
  ],
};

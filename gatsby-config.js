/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
const siteUrl = `https://micropasts.org`

const purgeCssSafelist = require('./purgecss-safelist'); 
const cookieConsentConfig = require('./gatsby-cookie-consent-config');

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MicroPasts: A Crowdfuelled Research Project`,
    description: `Crowdfuelled archaeological research - how can you get involved?.`,
    twitterHandle: '@micropasts',
    author: 'The MicroPasts Collective',
    image: `/logo_social.jpg`,
    og: {
      siteName: 'MicroPasts - Crowd fuelled archaeology',
      twitterCreator: '@micropasts',
    },
    siteUrl: `https://micropasts.org`,
  },
  flags: {
    DEV_SSR: false
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
     {
      resolve: `gatsby-plugin-google-gtag-cookieconsent`,
      options: cookieConsentConfig
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              withWebp: true,
              showCaptions: true,
              quality: 90,
              linkImagesToOriginal: true,
              backgroundColor: `gray`,
              loading: `lazy`,
            },
          },
          {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true,
                develop: false,
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                ignore: [
                    'src/components/layout.css',
                    'src/styles/global.css',
                    'node_modules/react-back-to-top/dist/BackToTop.css',
                    'node_modules/vanilla-cookieconsent/dist/cookieconsent.css',
                ],
                purgeCSSOptions: {
                    safelist: purgeCssSafelist,
                    greedy: [],
                    content: [
                        './src/**/*.{js,jsx,ts,tsx}', // Default for your components
                        './src/content/**/*.md',// Markdown files
                    ],
                    deep: [
                        /active/, // Matches active classes for indicators and items
                        /^alert-/, 
                        /^breadcrumb-/, // Matches breadcrumb classes
                        /^btn-/,
                        /carousel/, // Catch all for any carousel-related classes
                    ],
                    // Safelist CSS variables used by alerts
                    variables: [
                    /^--bs-alert-/,
                    ],
                },
            },
        },
          {
            resolve: `gatsby-remark-images-remote`,
            options: {
              /**
               * @param {'lazy' | 'eager' | 'auto'} loading
               * Set the output markup's 'loading' attribute. Default: 'lazy'
               */
              loading: 'lazy',

              /**
               * @param {string} backgroundColor
               * Background color. Default: '#fff'
               */
              backgroundColor: '#fff',

              /**
               * @param {boolean} linkImagesToOriginal
               * If enabled, wraps the default markup with an <a> tag pointing to the original image.
               * Default: false
               */
              linkImagesToOriginal: false,

              /**
               * @param {string | Function} wrapperStyle
               * Inject styles to the image wrapper.
               * Also accept a function that receives all image data as arguments, i.e
               * ({ aspectRatio, width, height }) => `padding-bottom: ${height/2}px;`
               * Alternatively you can also attach additional class to `.gria-image-wrapper`
               */
              wrapperStyle: 'padding-bottom: 0.5rem;',


              /**
               * ...imageOptions
               * and any sharp image arguments (quality, maxWidth, etc.)
               */
              maxWidth: 1000,
              quality: 90,
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
      __key: "content"
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#000000",
        // Height of the scroll indicator
        height: "10px",
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        }
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
         
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
                         allSitePage: { nodes: allPages }
                       }) => {

          return allPages.map(page => {
            return { ...page };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path
          };
        }
      }
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `micropasts-website`,
        short_name: `micropasts`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

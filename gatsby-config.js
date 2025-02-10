/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config() // Load environment variables

module.exports = {
  siteMetadata: {
    title: `Pancake Cat`, // Updated title
    description: `The ultimate meme-worthy, gamer-centric merch store.`,
    author: `@pancakecat`,
    siteUrl: `https://pancakecat.com/`, // Updated site URL
  },
  plugins: [
	`gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pancake Cat`,
        short_name: `PancakeCat`,
        start_url: `/`,
        background_color: `#FFD166`,
        theme_color: `#8B5E34`,
        display: `minimal-ui`,
        icon: `img/pcclogo.png`, // Replace with your actual logo path
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        storeUrl: process.env.SHOPIFY_STORE_URL, // Full Shopify store URL
        password: process.env.SHOPIFY_PASSWORD, // This needs to match the env var
        apiVersion: `2023-01`, // Use the latest stable Shopify API version
      },
    },
  ],
}

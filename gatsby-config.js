/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Swift-Surf",
    description: "Trek the World",
    author: "Steven Dandan",
    person: { name: "Steve", age: "37" },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { model: "Altis", year: "2016" },
      { model: "Vios", year: "2016" },
    ],
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dxiopi40liwa`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_KEY,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Montserrat",
            weights: ["100", "300", "400", "700", "900"],
          },
          {
            family: "Roboto",
            weights: ["100", "300", "400", "700", "900"],
          },
          {
            family: "Permanent Marker",
            weights: ["400"],
          },
          {
            family: "Oxygen",
            weights: ["300", "400", "700"],
          },
          {
            family: "Architects Daughter",
            weights: ["400"],
          },
        ],
        display: "swap",
      },
    },
  ],
}

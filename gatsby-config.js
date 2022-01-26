/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
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
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-sass`,
  ],
}

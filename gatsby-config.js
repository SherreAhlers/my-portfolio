const path = require("path")
module.exports = {
  siteMetadata: {
    title: "Sherre-Ahlers-Portfolio",
    siteUrl: "https://portfoliosherre.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sherre-Ahlers-Portfolio`,
        short_name: `portfolio`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-theme-material-ui`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        containers: path.join(__dirname, "src/containers"),
        images: path.join(__dirname, "src/images"),
      },
    },
  ],
}

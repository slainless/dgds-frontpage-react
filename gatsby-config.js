module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Digital Desa",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "features",
        path: "./src/contents/features",
      },
      __key: "features",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/contents/data",
      },
      __key: "data",
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: "./src/contents/features",
      },
    },
    "gatsby-transformer-yaml",
    "gatsby-plugin-root-import",
    "@chakra-ui/gatsby-plugin",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          features: require.resolve("./src/layouts/feature.tsx"),
          default: require.resolve("./src/layouts/feature.tsx")
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
};

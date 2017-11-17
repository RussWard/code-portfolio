module.exports = {
  plugins: [ 
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-109825315-1',
        anonymize: true,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
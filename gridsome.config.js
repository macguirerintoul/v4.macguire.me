// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  chainWebpack(config) {
    config.mode('development')
  },
  siteName: 'Macguire Rintoul',
  siteDescription: 'Product design + web development consultant',
  port: 3000,
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Project', // Required
        baseDir: './content/projects', // Where .md files are located
        route: '/projects/:title',
        template: './src/templates/Project.vue', // Optional
      },
    },
    {
      // Add Articles collection
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article', // Required
        path: './content/articles', // Where .md files are located
      },
    },
  ],
  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
}

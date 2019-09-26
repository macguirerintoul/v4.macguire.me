// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Macguire Rintoul',
  siteDescription: 'Product design + web development consultant',
  port: 3000,
  templates: {
    Project: '/work/:title',
    Article: '/article/:title',
  },
  plugins: [
    {
      // Add Projects collection
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: 'content/projects/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      // Add Articles collection
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        path: 'content/articles/*.md',
      }
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}

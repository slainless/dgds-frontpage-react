const { createFilePath } = require("gatsby-source-filesystem")
const path = require('path')
const fs = require('fs')
const _ = require('lodash')

const isInFolder = (filePath, folderPath) => {
  const fullFolderPath  = path.join(__dirname, folderPath)
  return path.relative(fullFolderPath, filePath) === path.basename(filePath)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    const filePath = node.fileAbsolutePath
    const baseName = path.basename(filePath).replace(/\.mdx?$/, '')

    if(isInFolder(filePath, 'src/contents/features')) {
      createNodeField({
        name: "path",
        node,
        value: `/fitur/${baseName}`,
      })

      createNodeField({
        name: "group",
        node,
        value: "features"
      })
    }

    if(isInFolder(filePath, 'src/contents/posts')) {
      createNodeField({
        name: "path",
        node,
        value: `/artikel/baca/${baseName}`,
      })

      createNodeField({
        name: "group",
        node,
        value: "posts"
      })
    }
  }
}

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions

  const queryResult = await graphql(`
    query AllFeatures {
      allMdx(filter: {}) {
        edges {
          node {
            fileAbsolutePath
            fields {
              path
              group
            }
            frontmatter {
              icon {
                src
                width
              }
              summary
              title
              draft
              title
              tags
              slug
              date
              lastmod
              headerimage {
                src
                width
              }
              keywords
            }
          }
        }
      }
    }
  `)

  const nodes = queryResult.data.allMdx.edges
  nodes.forEach(({ node }, index) => {
    if(node.fields.group === 'posts')
      if(node.frontmatter.draft) return

    createPage({
      path: node.fields.path,
      component: path.resolve(node.fileAbsolutePath),
      context: { frontmatter: node.frontmatter }
    })
  })

  fs.writeFile(
    path.join(__dirname, 'public', 'all-mdx.json'), 
    JSON.stringify(nodes.map(i => i.node)),
    () => { console.log('all-mdx.json populated...')}
  )
}

// exports.onCreatePage = async({ actions, page }) => {
//   const { deletePage, createPage } = actions
//   const newPage = _.cloneDeep(page)

//   if(isInFolder(page.component, 'src/contents/features')) {
//     newPage.path = `/fitur/${path.basename(newPage.path, '.mdx')}`
//     createPage(newPage)
//     deletePage(page)
//   }

//   if(isInFolder(page.component, 'src/contents/posts')) {
//     newPage.path = `/artikel/baca/${path.basename(newPage.path, '.mdx')}`
//     createPage(newPage)
//     deletePage(page)
//   }
// }
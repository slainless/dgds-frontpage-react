const { createFilePath } = require("gatsby-source-filesystem")
const path = require('path')
const _ = require('lodash')

const isInFolder = (filePath, folderPath) => {
  const fullFolderPath  = path.join(__dirname, folderPath)
  return path.relative(fullFolderPath, filePath) === path.basename(filePath)
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "Mdx") {
//     const value = createFilePath({ node, getNode })
//     const filePath = node.fileAbsolutePath
//     const baseName = path.basename(filePath, '.mdx')

//     if(isInFolder(filePath, 'src/contents/features')) {
//       createNodeField({
//         name: "slug",
//         node,
//         value: `/fitur/${baseName}`,
//       })

//       createNodeField({
//         name: "group",
//         node,
//         value: "features"
//       })
//     }
//   }
// }

exports.onCreatePage = async({ actions, page }) => {
  const { deletePage, createPage } = actions
  const newPage = _.cloneDeep(page)

  if(isInFolder(page.component, 'src/contents/features')) {
    newPage.path = `/fitur${newPage.path}`
    createPage(newPage)
    deletePage(page)
  }
}
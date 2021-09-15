const { createFilePath } = require("gatsby-source-filesystem")
const path = require('path')
const _ = require('lodash')

const isInFolder = (filePath, folderPath) => {
  const fullFolderPath  = path.join(__dirname, folderPath)
  return path.relative(fullFolderPath, filePath) === path.basename(filePath)
}

exports.onCreatePage = async({ actions, page }) => {
  const { deletePage, createPage } = actions
  const newPage = _.cloneDeep(page)

  if(isInFolder(page.component, 'src/contents/features')) {
    newPage.path = `/fitur/${path.basename(newPage.path, '.mdx')}`
    createPage(newPage)
    deletePage(page)
  }
}
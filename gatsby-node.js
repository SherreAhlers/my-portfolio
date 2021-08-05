const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

/**
 * plugin to create slug field for each event node
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  /**
   * This is for In School Projects page + School Project page
   */
  if (node.internal.type === "SchoolProjectsJson") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `schoolProjects`,
    })
    const name = node.name
      .split(" ")
      .join("-")
      .replace(/(^\w|\s\w)/g, m => m.toUpperCase())

    createNodeField({
      node,
      name: `slug`,
      value: `${slug}${name}`,
    })
  }

  /**
   * This is for Projects + Project page
   */
  if (node.internal.type === "ProjectsJson") {
    const slug = createFilePath({ node, getNode, basePath: `projects` })
    const name = node.name
      .split(" ")
      .join("-")
      .replace(/(^\w|\s\w)/g, m => m.toUpperCase())

    createNodeField({
      node,
      name: `slug`,
      value: `${slug}${name}`,
    })
  }
}

/**
 *  plugin to create pages using each detail page
 **/
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /**
   * This is for In the Beginning + School Project page
   */
  const schoolProjectsQuery = await graphql(`
    query {
      allSchoolProjectsJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  schoolProjectsQuery.data.allSchoolProjectsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/containers/SchoolProjectContainer/index.js`
      ),
      context: {
        // Data passed to context is available in page queries
        // as GraphQL variables
        slug: node.fields.slug,
      },
    })
  })

  /**
   * This is for Projects + Project page
   */
  const projectsQuery = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  projectsQuery.data.allProjectsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/containers/ProjectContainer/index.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables
        slug: node.fields.slug,
      },
    })
  })
}

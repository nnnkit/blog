const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((res, rej) => {
    graphql(`
      {
        allMarkdownRemark(limit: 4) {
          edges {
            node {
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
              }
            }
          }
        }
      }
    `).then(({ data }) =>
      data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve("./src/components/posts-layout.js"),
          context: {
            slug: node.frontmatter.slug,
          },
        })
        res()
      })
    )
  })
}

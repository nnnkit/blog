import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import posts from "./../query/posts"
import { list } from "postcss"

export default class Listing extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query posts {
            allMarkdownRemark {
              edges {
                node {
                  html
                  frontmatter {
                    slug
                    date(formatString: "MMM DD, YY")
                    title
                  }
                }
              }
            }
          }
        `}
        render={({ allMarkdownRemark }) => (
          <ul>
            {allMarkdownRemark.edges.map(post => (
              <li>
                <h2>{post.node.frontmatter.title}</h2>
              </li>
            ))}
          </ul>
        )}
      />
    )
  }
}

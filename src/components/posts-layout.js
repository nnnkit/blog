import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

export default class PostLayout extends Component {
  render() {
    const { html, frontmatter } = this.props.data.markdownRemark
    return (
      <Layout>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YY")
        slug
      }
    }
  }
`

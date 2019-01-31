import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import posed from 'react-pose'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const AnimatePost = posed.div({
      hoverable: true,
      init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      },
      hover: {
        scale: 1.05,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
      },
    })

    const AnimateButton = posed.button({
      pressable: true,
      init: { scale: 1 },
      press: { scale: 0.8 },
    })

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <AnimatePost
              key={node.fields.slug}
              style={{
                marginBottom: rhythm(1),
                borderRadius: '5px',
                background: '#fff',
              }}
            >
              <h3
                style={{
                  padding: rhythm(1),
                  textAlign: 'center',
                  margin: `0`,
                  backgroundImage: `linear-gradient(90deg, #0637B2, #0637B2 30%, #FFCD54 30%, #FFCD54 50%, #FFCD54 70%, #0637B2 70%)`,
                }}
              >
                <Link
                  style={{
                    color: '#fff',
                    boxShadow: `none`,
                    textShadow: `3px 3px 3px #36383a`,
                  }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h3>
              <div style={{ padding: rhythm(0.3) }}>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <Link to={node.fields.slug}>
                  <AnimateButton
                    style={{
                      background: `#3B73FF`,
                      cursor: `pointer`,
                      border: `none`,
                      color: `white`,
                      padding: `5px 10px`,
                    }}
                  >
                    Read Post
                  </AnimateButton>{' '}
                </Link>
              </div>
            </AnimatePost>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

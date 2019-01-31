import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    header = (
      <h1
        style={{
          paddingTop: rhythm(1),
          paddingBottom: rhythm(1),
          margin: '0',
          textAlign: 'center',
          background: '#0637B2'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `#FFC63B`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )

    return (
      <div>
        {header}
        <div
          style={{
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            maxWidth: rhythm(24),
            marginLeft: `auto`,
            marginRight: `auto`
          }}
        >
          {children}
        </div>
        <footer style={{
          paddingTop: rhythm(1),
          paddingBottom: rhythm(1),
          background: '#FFCD54'
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://www.ivanvgarcia.com">Ivan Garcia</a>
        </footer>
      </div>

    )
  }
}

export default Layout

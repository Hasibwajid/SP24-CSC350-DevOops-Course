/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            textAlign: `center`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built by Your CognosageDev
          {` `}
          <div>
            Connect with us:{" "}
            <a href="https://www.github.com/hasibwajid">GitHub</a> |{" "}
            <a href="https://www.facebook.com/cognosagedev">Facebook</a> |{" "}
            <a href="https://cognosagedev.blogspot.com/">Blog</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-lg)`, // Increase font size here
        textDecoration: `none`,
      }}
    >
      CognosageDev {/* Replace with your company name */}
    </Link>
  
  </header>
)

export default Header

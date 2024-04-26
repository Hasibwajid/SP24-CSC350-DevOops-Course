import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Services",
    url: "/services",
    description:
      "Explore our range of services to help you succeed in your projects.",
  },
  {
    text: "Technologies",
    url: "/technologies",
    description:
      "Discover the latest technologies we use to build innovative solutions.",
  },
  {
    text: "Projects",
    url: "/projects",
    description:
      "Browse through our portfolio of successful projects and case studies.",
  },
  {
    text: "Blog",
    url: "/blog",
    description:
      "Read insightful articles and updates from our team of experts.",
  },
];


const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>CognosageDev!</b>
      </h1>
      <p className={styles.intro}>
        <b>Explore our offerings:</b>{" "}
        {links.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== links.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Get in touch with us for all your tech needs.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <Link className={styles.listItemLink} to={link.url}>
            {link.text} ↗
          </Link>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

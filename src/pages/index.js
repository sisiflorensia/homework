import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import cover from '../images/magazine-cover.png';
import icon from '../images/symbol-gift.svg';

const bullets = [
  {
    text: "Bulletpoint #1",
    description: "Just a test run",
  },
  {
    text: "Bulletpoint #2",
    description: "Another test run",
  },
]

const links = [
  {
    text: "Article 1",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Article 2",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Article 3",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Article 4",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />c
    <div className={styles.textCenter}>
      <div className={styles.hero}>
        <div className={styles.heroGroup}>
          <h1>
            THIS IS THE <b>TITLE</b>
          </h1>
          <p className={styles.publishedDate}>Published on 12th August 2022</p>
          <img className={styles.coverImage} src={cover}/>
          <p>Get the latest special issue! Summer is here. What is your plan for this year? Perhaps it is time to sail.</p>
          <button className={styles.gradientCTA}>$3.99</button>
        </div>
        <div className={styles.heroGroup}>
          <ul className={styles.list}>
            {links.map(link => (
              <li key={link.url} className={styles.listItem}>
                <a
                  className={styles.listItemLink}
                  href={`${link.url}${utmParameters}`}
                >
                  {link.text}
                </a>
                <p className={styles.listItemDescription}>{link.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>  
      <div>
        <div className={styles.textCenter}>
          <p>
            Two bulletpoints below are for Homework from Julie
            <img className="icon" src={icon}/>
          </p>          
        </div>
        <ul className={styles.list}>
          {bullets.map(bullet => (
            <li className={styles.listItem}>
              {bullet.text}
              <p className={styles.listItemDescription}>{bullet.description}</p>
            </li>
          ))}
        </ul>
        <p className={styles.intro}>
          <b>Example pages:</b>{" "}
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </p>
      </div>        
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/magloft-circle small-01.png';

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Article from "../components/article"
import articles from "../static/articles.json"

const samplePageLinks = [
  { text: "PDF Toggle View", url: "https://pwa.magloft.com/collections/nick-martin-s-publication-1658453455/where-there-s-a-wilt-there-s-a-31658453456"},
  { text: "Embed View", url: "https://www.magloft.com/universal/features/pdf-html-content/" },
  { text: "Opt-in", url: "https://pwa.magloft.com/collections/mustang-spring-2020/contents" },
  { text: "Interactive Reading Experience", url: "https://pwa.magloft.com/collections/magloft-features-see-what-magloft-can-do-for-you/article-129777" },
]

interface ArticleAsset {
  url: string,
  extension: string,
  contentType: string,
  __typename: string
}

interface ArticleObject {
  id: number,
  issueId: number,
  title: string,
  slug: string,
  description: string,
  date: number,
  cover: string,
  image: string | null,
  categoryIds: number[],
  pwaOptinId: number | null,
  seoDescription: string | null,
  position: number,
  unlockType: string,
  replicaPageIndex: number | null,
  html: string,
  articleAssets: ArticleAsset[],
  __typename: string
}

const articleArr = articles as ArticleObject[];


const IndexPage = () => (
  <Layout type='home'>
    <Seo title="Home" />
      <div className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>THIS IS THE TITLE AND A LOT MORE</h1>
          <p className={styles.publishedDate}>Published on 12th August 2022</p>
        </div>
        <div className={styles.heroGroup}>
          <div className={styles.heroItems}>
            <a href='https://pwa.magloft.com/collections/oksana-kolesnikova'>
              <img className={styles.coverImage} src='https://cdn.magloft.com/pwa-1/pdf-import/cover/a9cb32b8-03f9-4226-9baf-9001aa5d89e6.jpg'/>
            </a>
            <p>Get the latest special issue! Summer is here. What is your plan for this year? Perhaps it is time to sail.</p>
            <button className={styles.gradientCTA}>$3.99</button>
          </div>
          <div className={styles.heroItems}>
            <div className={styles.cardGroup}>
              <p className={styles.cardTitle}>
                {articleArr.length} articles from this collections
              </p>
              <div className={styles.article}>
                {articleArr.map(article => (
                  <a
                    href={`https://pwa.magloft.com/collections/oksana-kolesnikova/${article.slug}`}
                  >
                  <Article 
                    thumbnail={article.image === null ? logo : article.image}
                    title={article.title}
                    description={article.description}/>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div>
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
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
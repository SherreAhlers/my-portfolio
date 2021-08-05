import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"

import useStyles from "./styles"

const SchoolProjectContainer = ({ data }) => {
  const classes = useStyles()
  const {
    name,
    description,
    languagesUsed,
    librariesUsed,
    projectURL,
    timeToBuild,
  } = data.schoolProjectsJson

  return (
    <Layout>
      <main className={classes.schoolProjectContainer}>
        <section className={classes.header}>
          <div className={classes.nameContainer}>
            <p className={classes.name}>{name}</p>
          </div>
          <div className={classes.imageContainer}>
            <div className={classes.imageParent}>
              <img src="" className={classes.image} />
            </div>
          </div>
        </section>
        <section className={classes.schoolProjectInfoContainer}>
          <div className={classes.descriptionContainer}>
            <p className={classes.description}>{description}</p>
          </div>
          <div className={classes.languagesUsedContainer}>
            <h3 className={classes.languagesTitle}>Languages Used:</h3>
            <p className={classes.languagesUsed}>{languagesUsed}</p>
          </div>
          <div className={classes.librariesUsedContainer}>
            <h3 className={classes.librariesUsedTitle}>Libraries Used:</h3>
            <p className={classes.librariesUsed}>{librariesUsed}</p>
          </div>
          <div className={classes.timeToBuildContainer}>
            <h3 className={classes.timeToBuildTitle}>Time To Build:</h3>
            <p className={classes.timeToBuild}>{timeToBuild}</p>
          </div>
        </section>
        <section className={classes.schoolProjectURLContainer}>
          <p className={classes.schoolProjectURL}>
            Click Here to See Project! {projectURL}
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default SchoolProjectContainer

export const query = graphql`
  query ($slug: String!) {
    schoolProjectsJson(fields: { slug: { eq: $slug } }) {
      name
      description
      languagesUsed
      librariesUsed
      projectURL
      timeToBuild
    }
  }
`

import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"

import useStyles from "./styles"

const ProjectContainer = ({ data }) => {
  const classes = useStyles()
  const {
    name,
    description,
    languagesUsed,
    librariesUsed,
    projectURL,
    timeToBuild,
  } = data.projectsJson

  return (
    <Layout>
      <main className={classes.projectContainer}>
        <section className={classes.header}>
          <div className={classes.nameContainer}>
            <p className={classes.name}>{name}</p>
          </div>
          <div className={classes.imageContainer}>
            <div className={classes.imageParent}>
              <img src="" className={classes.image} alt="" />
            </div>
          </div>
        </section>
        <section className={classes.projectInfoContainer}>
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
        <section className={classes.projectURLContainer}>
          <p className={classes.projectURL}>
            Click Here to See Project! {projectURL}
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default ProjectContainer

export const query = graphql`
  query ($slug: String!) {
    projectsJson(fields: { slug: { eq: $slug } }) {
      name
      description
      languagesUsed
      librariesUsed
      projectURL
      timeToBuild
    }
  }
`

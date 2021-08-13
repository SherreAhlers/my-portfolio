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
    dataBasesUsed,
    other,
    projectURL,
    timeToBuild,
  } = data.projectsJson

  const project = name
    .split(" ")
    .join("-")
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase())
  return (
    <Layout>
      <main className={classes.projectContainer}>
        <section className={classes.header}>
          <div className={classes.nameContainer}>
            <p className={classes.name}>{name}</p>
          </div>
          <div className={classes.imageContainer}>
            <div className={classes.imageParent}>
              <img
                src={
                  require(`../../images/projects/${project}-home-page.jpg`)
                    .default
                }
                className={classes.image}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className={classes.projectInfoContainer}>
          <div className={classes.descriptionContainer}>
            <p className={classes.description}>{description}</p>
          </div>
          <div className={classes.techContainer}>
            <h3 className={classes.title}>Languages Used:</h3>
            <p className={classes.names}>{languagesUsed}</p>
          </div>
          <div className={classes.techContainer}>
            <h3 className={classes.title}>Libraries Used:</h3>
            <p className={classes.names}>{librariesUsed}</p>
          </div>
          <div className={classes.techContainer}>
            <p className={classes.title}>Database Used:</p>
            <p className={classes.names}>{dataBasesUsed}</p>
          </div>
          <div className={classes.techContainer}>
            <p className={classes.title}>Other Technologies Used:</p>
            <p className={classes.names}>{other}</p>
          </div>
          <div className={classes.techContainer}>
            <h3 className={classes.title}>Time To Build:</h3>
            <p className={classes.names}>{timeToBuild}</p>
          </div>
        </section>
        <section className={classes.techContainer}>
          <p className={classes.url}>
            Click below to see project live! <br></br>
            {projectURL}
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
      dataBasesUsed
      other
      projectURL
      timeToBuild
    }
  }
`

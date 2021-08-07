import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby-theme-material-ui"

import Layout from "../../components/Layout"

import useStyles from "./styles"

const SchoolProjectContainer = ({ data }) => {
  const classes = useStyles()
  const {
    name,
    description,
    languagesUsed,
    librariesUsed,
    dataBasesUsed,
    other,
    timeToBuild,
    projectURL,
  } = data.schoolProjectsJson

  const schoolProject = name
    .split(" ")
    .join("-")
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase())

  return (
    <Layout>
      <main className={classes.pageContainer}>
        <section className={classes.header}>
          <div className={classes.nameContainer}>
            <p className={classes.name}>{name}</p>
          </div>
          <div className={classes.imageContainer}>
            <div className={classes.imageParent}>
              <img
                src={
                  require(`../../images/schoolProjects/${schoolProject}-home-page.jpg`)
                    .default
                }
                className={classes.image}
                alt="Game-Of-War-HomePage"
              />
            </div>
          </div>
        </section>
        <section className={classes.infoContainer}>
          <div className={classes.descriptionContainer}>
            <p className={classes.description}>{description}</p>
          </div>
          <section className={classes.techContainer}>
            <div className={classes.container}>
              <p className={classes.title}>Languages Used:</p>
              <p className={classes.text}>{languagesUsed}</p>
            </div>
            <div className={classes.container}>
              <p className={classes.title}>Libraries Used:</p>
              <p className={classes.text}>{librariesUsed}</p>
            </div>
            <div className={classes.container}>
              <p className={classes.title}>Database Used:</p>
              <p className={classes.text}>{dataBasesUsed}</p>
            </div>
            <div className={classes.container}>
              <p className={classes.title}>Other Technologies Used:</p>
              <p className={classes.text}>{other}</p>
            </div>
            <div className={classes.container}>
              <p className={classes.title}>Time To Build:</p>
              <p className={classes.text}>{timeToBuild}</p>
            </div>
          </section>
        </section>
        <section className={classes.container}>
          <p className={classes.URL}>Click Below to See Project Live!</p>
          <Link to={`${projectURL}`} className={classes.projectLink}>
            {projectURL}
          </Link>
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
      dataBasesUsed
      other
      projectURL
      timeToBuild
    }
  }
`

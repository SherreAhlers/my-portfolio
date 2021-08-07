import React from "react"

import SchoolProjectsCard from "../../components/SchoolProjectsCard"

import useStyles from "./styles"

const SchoolProjectsContainer = ({ data }) => {
  const classes = useStyles()
  return (
    <main>
      <div className={classes.pageContainer}>
        <article className={classes.titleContainer}>
          <h1 className={classes.title}>In The Beginning</h1>
          <div className={classes.imageContainer}>
            <div className={classes.imageParent}>
              <img
                src={require(`../../images/studying-image.jpg`).default}
                alt="studying"
                className={classes.image}
              />
            </div>
          </div>
        </article>
        <h2 className={classes.schoolProjectsSectionTitle}>School Projects</h2>
        <article className={classes.schoolProjectsDataContainer}>
          {data.allSchoolProjectsJson.edges.map(({ node }, i) => {
            return (
              <div className={classes.projectCardContainer}>
                <SchoolProjectsCard
                  key={`${node.name}-${i}`}
                  name={node.name}
                />
              </div>
            )
          })}
        </article>
      </div>
    </main>
  )
}

export default SchoolProjectsContainer

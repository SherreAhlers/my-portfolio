import React from "react"
import SchoolProjectsCard from "../../components/SchoolProjectsCard"
// import useMediaQuery from "@material-ui/core/useMediaQuery"

import useStyles from "./styles"

const InTheBeginningContainer = ({ data }) => {
  const classes = useStyles()
  // const isMinWidth960px = useMediaQuery("(min-width:960px)")
  return (
    <main>
      <div className={classes.inTheBeginningContainer}>
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
            const schoolProject = node.name
              .split(" ")
              .join("-")
              .replace(/(^\w|\s\w)/g, m => m.toUpperCase())
            return (
              <SchoolProjectsCard key={`${node.name}-${i}`} name={node.name}>
                <div className={classes.schoolProjectsOuterContainer}>
                  <h2 className={classes.schoolProjectsTitle}>{node.name}</h2>
                  <div className={classes.schoolProjectsImageContainer}>
                    <div className={classes.schoolProjectsImageParent}>
                      <img
                        src={
                          require(`../../images/schoolProjects/${schoolProject}-home-page.jpg`)
                            .default
                        }
                        alt="project"
                        className={classes.schoolProjectsImage}
                      />
                    </div>
                  </div>

                  <div>
                    <p className={classes.schoolProjectsInfo}>
                      Project Information
                    </p>
                    <p className={classes.schoolProjectsDescription}>
                      {node.description}
                    </p>
                  </div>
                  <div className={classes.languagesUsed}>
                    <p className={classes.languagesUsedTitle}>
                      Languages Used:
                    </p>
                    <p>{node.languagesUsed}</p>
                  </div>
                  <div className={classes.librariesUsed}>
                    <p className={classes.librariesUsedTitle}>
                      Libraries Used:
                    </p>
                    <p>{node.librariesUsed}</p>
                  </div>
                  <div className={classes.timeToBuild}>
                    <p className={classes.timeToBuildTitle}>Build Time:</p>
                    <p>{node.timeToBuild}</p>
                  </div>
                  <div className={classes.projectURL}>
                    <p className={classes.projectURLTitle}>
                      Click here to see project!
                    </p>
                    <p>{node.projectURL}</p>
                  </div>
                </div>
              </SchoolProjectsCard>
            )
          })}
        </article>
      </div>
    </main>
  )
}

export default InTheBeginningContainer

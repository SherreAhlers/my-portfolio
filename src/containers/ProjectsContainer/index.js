import React from "react"

import ProjectsCard from "../../components/ProjectsCard"

import useStyles from "./styles"

const ProjectsContainer = ({ projects }) => {
  const classes = useStyles()
  return (
    <div>
      <article className={classes.projectsContainer}>
        <section className={classes.introContainer}>
          <h1 className={classes.projectsPageTitle}>Projects</h1>
          <div className={classes.imageOuterContainer}>
            <div className={classes.projectsPageImageContainer}>
              <div className={classes.projectsPageImageParent}>
                <img
                  src={require(`../../images/projects-cartoon.jpg`).default}
                  alt="project-cartoon"
                  className={classes.projectsPageImage}
                />
              </div>
            </div>
          </div>
        </section>
        {projects.map(({ node }, i) => {
          const project = node.name
            .split(" ")
            .join("-")
            .replace(/(^\w|\s\w)/g, m => m.toUpperCase())
          return (
            <ProjectsCard
              key={`${node.name}-${i}`}
              name={node.name}
              description={node.description}
              languagesUsed={node.languagesUsed}
              librariesUsed={node.librariesUsed}
              buildTime={node.buildtime}
              projectURL={node.projectURL}
              className={classes.projectCardStyle}
            >
              <main>
                <h2 className={classes.projectTitle}>{node.name}</h2>
                <section className={classes.imageContainer}>
                  <div className={classes.projectsImageContainer}>
                    <div className={classes.projectsImageParent}>
                      <img
                        src={
                          require(`../../images/projects/${project}-home-page.jpg`)
                            .default
                        }
                        alt="project"
                        className={classes.projectsImage}
                      />
                    </div>
                  </div>

                  <div>
                    <p className={classes.projectInfo}>Project Information</p>
                    <p className={classes.projectDescription}>
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
                </section>
              </main>
            </ProjectsCard>
          )
        })}
      </article>
    </div>
  )
}

export default ProjectsContainer

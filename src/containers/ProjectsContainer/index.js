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
        <section className={classes.projectContainer}>
          {projects.map(({ node }, i) => {
            const project = node.name
              .split(" ")
              .join("-")
              .replace(/(^\w|\s\w)/g, m => m.toUpperCase())
            return (
              <ProjectsCard key={`${node.name}-${i}`} name={node.name}>
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
                  </section>
                </main>
              </ProjectsCard>
            )
          })}
        </section>
      </article>
    </div>
  )
}

export default ProjectsContainer

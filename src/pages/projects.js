import React from "react"
import { graphql } from "gatsby"

import ProjectsContainer from "containers/ProjectsContainer"
import Layout from "../components/Layout"

const Projects = ({ data }) => {
  return (
    <Layout>
      <ProjectsContainer projects={data.allProjectsJson.edges} />
    </Layout>
  )
}
export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          name
          description
          languagesUsed
          librariesUsed
          projectURL
          timeToBuild
        }
      }
    }
  }
`
export default Projects

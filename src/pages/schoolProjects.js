import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SchoolProjectsContainer from "containers/SchoolProjectsContainer"

const SchoolProjects = ({ data }) => {
  return (
    <Layout>
      <SchoolProjectsContainer data={data} />
    </Layout>
  )
}
export const query = graphql`
  query {
    allSchoolProjectsJson {
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

export default SchoolProjects

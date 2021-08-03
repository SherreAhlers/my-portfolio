import React from "react"
import { graphql } from "gatsby"

import InTheBeginningContainer from "containers/InTheBeginningContainer"
import Layout from "../components/Layout"

const InTheBeginning = ({ data }) => {
  return (
    <Layout>
      <InTheBeginningContainer data={data} />
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

export default InTheBeginning

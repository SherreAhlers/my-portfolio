import React from "react"
import { navigate } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Card, CardMedia, CardContent } from "@material-ui/core"

import useStyles from "./styles"

const SchoolProjectsCard = ({ name }) => {
  const classes = useStyles()
  const isMinWidth960px = useMediaQuery("(min-width:960px)")
  const schoolProject = name
    .split(" ")
    .join("-")
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase())
  return (
    <div className={classes.root}>
      <Card
        className={classes.card}
        onClick={() => navigate(`/schoolProjects/${schoolProject}`)}
      >
        {isMinWidth960px ? (
          <CardMedia
            component="img"
            height="300"
            alt="projects"
            image={
              require(`../../images/schoolProjects/${schoolProject}-home-page.jpg`)
                .default
            }
            title="Schhol-Projects-Image"
          />
        ) : (
          <CardMedia
            component="img"
            height="235"
            alt="projects"
            image={
              require(`../../images/schoolProjects/${schoolProject}-home-page.jpg`)
                .default
            }
            title="School-Projects-Image"
          />
        )}
        <CardContent className={classes.cardContent}>
          <span className={classes.projectsName}>{name}</span>
          <br></br>
        </CardContent>
      </Card>
    </div>
  )
}

export default SchoolProjectsCard

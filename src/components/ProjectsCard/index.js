import React from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Card, CardMedia, CardContent } from "@material-ui/core"

import useStyles from "./styles"

const ProjectsCard = ({ name }) => {
  const classes = useStyles()
  const isMinWidth960px = useMediaQuery("(min-width:960px)")
  const project = name.split(" ").join("-")
  return (
    <div className={classes.root}>
      <Card
        className={classes.card}
        onClick={() => navigate(`/projects/${project}`)}
      >
        <Link to={`/projects/${project}`}>
          {isMinWidth960px ? (
            <CardMedia
              component="img"
              height="280"
              alt="projects"
              image={
                require(`../../images/projects/${project}-home-page.jpg`)
                  .default
              }
              title="Projects-image"
            />
          ) : (
            <CardMedia
              component="img"
              height="235"
              alt="prpjects"
              image={
                require(`../../images/projects/${project}-home-page.jpg`)
                  .default
              }
              title="Projects-image"
            />
          )}
        </Link>
        <CardContent className={classes.cardContent}>
          <span className={classes.projectsName}>{name}</span>
          <br></br>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectsCard

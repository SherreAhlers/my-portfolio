import React from "react"
import { Button } from "gatsby-theme-material-ui"

import useStyles from "./styles"

const HomeContainer = () => {
  const classes = useStyles()

  return (
    <main className={classes.homeContainer}>
      <section className={classes.homeHeader}>
        <div className={classes.homeTitle}>
          <p className={classes.name}>
            Sherre Ahlers<br></br> Portfolio
          </p>
        </div>
      </section>
      <section className={classes.homeEnterButton}>
        <Button
          variant="contained"
          href="about"
          className={classes.enterButton}
        >
          Click Here to Enter!
        </Button>
      </section>
    </main>
  )
}

export default HomeContainer

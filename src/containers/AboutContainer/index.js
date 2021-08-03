import React from "react"

import useStyles from "./styles"

const AboutContainer = () => {
  const classes = useStyles()
  return (
    <main className={classes.contactContainer}>
      <section className={classes.titleContainer}>
        <h1 className={classes.title}>Contact Me</h1>
      </section>
      <section>
        <div className={classes.contactInfoContainer}>
          <div className={classes.resumeImageContainer}>
            <div className={classes.resumeImageParent}>
              {/* <img
                src={require(`../../images/resume-image.jpg`).default}
                alt="resume"
                className={classes.resumeImage}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutContainer

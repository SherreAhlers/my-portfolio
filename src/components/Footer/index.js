import React from "react"
import CopyrightIcon from "@material-ui/icons/Copyright"
import useStyles from "./styles"

const Footer = () => {
  const classes = useStyles()
  return (
    <div>
      <section className={classes.footerContainer}>
        <div className={classes.linkContainer}>
          <p className={classes.gitHubLinkContainer}>
            <a
              href="https://github.com/SherreAhlers"
              className={classes.gitHubLink}
            >
              https://github.com/SherreAhlers
            </a>
          </p>
          <p className={classes.linkdinLinkContainer}>
            <a
              href="https://www.linkedin.com/in/sherre-ahlers-software-engineer/"
              className={classes.linkdinLink}
            >
              https://www.linkedin.com/in/sherre-ahlers-software-engineer/
            </a>
          </p>
        </div>
        <div className={classes.copyrightContainer}>
          <CopyrightIcon className={classes.copyrightIcon} />
          <p className={classes.copyrightInfo}>2021 Sherre Ahlers</p>
        </div>
      </section>
    </div>
  )
}

export default Footer

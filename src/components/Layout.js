import React from "react"

import Footer from "./Footer"
import Nav from "./Nav"
import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles(theme => ({
  html: {
    boxSizing: "initial",
    width: "100%",
    height: "100%",
  },
}))
const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Nav />
      <div className={classes.html}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout

import React from "react"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import { Link } from "gatsby-theme-material-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import { NAVLINKS } from "./constants"
import useStyles from "./styles"
import { ListItemText } from "@material-ui/core"

const Nav = () => {
  const classes = useStyles()
  const isMinWidth960px = useMediaQuery("(min-width:960px)")
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.navContainer}>
        {isMinWidth960px ? (
          <div className={classes.linksDesktop}>
            <Link to="/about" className={classes.link}>
              ABOUT
            </Link>
            <Link to="/schoolProjects" className={classes.link}>
              SCHOOL PROJECTS
            </Link>
            <Link to="/projects" className={classes.link}>
              PROJECTS
            </Link>
          </div>
        ) : (
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={classes.iconButton}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>
      <Drawer
        classes={{
          paper: classes.paper,
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon className={classes.chevronRightIcon} />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div className={classes.linkContainer}>
            {NAVLINKS.map(({ title, path, id }) => (
              <Link exact to={path} key={id} className={classes.linkText}>
                <ListItem diableGutters={true}>
                  <ListItemText
                    classes={{ primary: classes.linkStyle }}
                    primary={title}
                  />
                </ListItem>
              </Link>
            ))}
          </div>
        </List>
      </Drawer>
    </div>
  )
}

export default Nav

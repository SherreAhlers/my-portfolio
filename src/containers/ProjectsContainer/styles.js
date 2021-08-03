import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(black, #F808BB, #F8F005, #F808BB, #F8F005, black)",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  introContainer: {
    alignSelf: "center",
  },
  projectsPageTitle: {
    fontSize: "35px",
    color: "white",
    textAlign: "center",
  },
  projectsPageImageContainer: {
    display: "flex",
    justifyContent: "center",
    background: "radial-gradient(white, yellow, white)",
    padding: "20px",
    maxWidth: "500px",
    margin: "50px 5%",
    [theme.breakpoints.only("sm")]: {
      margin: "40px 5%",
    },
    [theme.breakpoints.up("md")]: {
      margin: "10px 33%",
    },
  },
  projectsPageImageParent: {
    width: "350px",
    height: "300px",
  },
  projectsPageImage: {
    width: "100%",
    height: "100%",
  },
  projectTitle: {
    textAlign: "center",
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    margin: "0 40px",
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
  },
  projectsImageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 20px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  // imageContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   background: "radial-gradient(hotpink, blue, white)",
  //   padding: "20px",
  //   margin: "30px 20px 40px",
  //   [theme.breakpoints.up("md")]: {
  //     margin: "50px 20px",
  //     display: "block",
  //   },
  // },
  projectsImageParent: {
    width: "350px",
    height: "300px",
  },
  projectsImage: {
    width: "100%",
    height: "100%",
  },
  projectInfo: {
    textAlign: "center",
    color: "white",
    fontSize: "25px",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: "35px",
    },
  },
  projectDescription: {
    textAlign: "center",
    color: "#F8FD0E ",
  },
  languagesUsedTitle: {
    textAlign: "center",
    color: "white",
  },
  languagesUsed: {
    textAlign: "center",
    color: "yellow",
    margin: "20px 50px",
  },
  librariesUsedTitle: {
    color: "white",
  },
  librariesUsed: {
    textAlign: "center",
    color: "yellow",
  },
  projectURLTitle: {
    color: "lightgreen",
  },
  projectURL: {
    textAlign: "center",
    color: "yellow",
  },
  timeToBuildTitle: {
    color: "white",
  },
  timeToBuild: {
    textAlign: "center",
    color: "yellow",
  },
}))

export default useStyles

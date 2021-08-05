import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    background:
      "linear-gradient(black, #F808BB, #F8F005, #F808BB, #F8F005, black)",
    paddingBottom: "50px",
    [theme.breakpoints.only("md")]: {
      paddingBottom: "70px",
    },
  },
  introContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "60px",
  },
  projectsPageTitle: {
    fontSize: "35px",
    color: "white",
    textAlign: "center",
  },
  projectsPageImageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 20px 40px",

    [theme.breakpoints.up("md")]: {
      margin: "10px 30px 60px",
    },
  },
  projectsPageImageParent: {
    width: "385px",
    height: "300px",
    border: "20px solid orange",

    [theme.breakpoints.up("md")]: {
      width: "450px",
      height: "400px",
    },
  },
  projectsPageImage: {
    width: "100%",
    height: "100%",
  },
  projectContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}))

export default useStyles

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
    background: "radial-gradient(white, white, orange, white, orange, orange)",
    width: "380px",
    padding: "20px 5px",
    margin: "10px 20px",
    [theme.breakpoints.up("md")]: {
      background:
        "radial-gradient(white, orange, orange, orange, white, orange)",
      width: "500px",
      margin: "10px 50px",
    },
  },
  projectsPageImageParent: {
    width: "340px",
    height: "300px",
    [theme.breakpoints.up("md")]: {
      width: "450px",
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

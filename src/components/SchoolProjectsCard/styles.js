import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "350px",
    margin: "20px",
    alignSelf: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      // width: "450px",
      width: "28%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      // margin: "20px -50px",
      justifyContent: "center",
    },
  },
  card: {
    background: "linear-gradient(white, limegreen, orange)",
    padding: "20px",
  },
  projectsName: {
    display: "flex",
    justifyContent: "center",
    fontSize: "30px",
    color: "white",
    fontWeight: "bold",
  },
}))

export default useStyles

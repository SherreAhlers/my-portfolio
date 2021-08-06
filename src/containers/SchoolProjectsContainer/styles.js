import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(black, #F808BB, #F8F005, #F808BB, #F8F005, black)",
  },
  titleContainer: {
    margin: "50px 20px 0",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: "50px",
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  imageParent: {
    width: "400px",
    height: "300px",
    border: "20px solid purple",
    [theme.breakpoints.up("md")]: {
      width: "550px",
      height: "400px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
  schoolProjectsDataContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0 20px 40px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      margin: "10px 0 60px",
      justifyContent: "space-evenly",
    },
  },
  projectCardContainer: {
    display: "flex",
    justifyContent: "center",
  },
  schoolProjectsSectionTitle: {
    color: "#71D78B",
    fontSize: "28px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
  },
}))

export default useStyles

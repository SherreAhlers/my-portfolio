import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingBottom: "50px",
    background:
      "radial-gradient(orange, #F808BB, orange, #99940D, purple, darkgreen, blue)",
  },
  header: {
    margin: "30px 20px",
    [theme.breakpoints.up("md")]: {
      margin: "50px 70px",
    },
  },
  name: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      fontSize: "47px",
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "35px 20px 10px",
    [theme.breakpoints.up("md")]: {
      margin: "45px 50px 10px",
    },
  },
  imageParent: {
    width: "400px",
    height: "300px",
    [theme.breakpoints.up("md")]: {
      width: "550px",
      height: "450px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      flexWrap: "no-wrap",
    },
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "0 20px 10px",

    [theme.breakpoints.up("md")]: {
      margin: "0 50px 10px",
    },

    [theme.breakpoints.up("lg")]: {
      margin: "0 70px 0",
    },
  },
  description: {
    border: "4px dotted #0A14DE",
    padding: "20px",
    fontSize: "16px",
    letterSpacing: "1px",
    color: "#610BAB",
    fontWeight: "600",
    [theme.breakpoints.up("md")]: {
      width: "600px",
      height: "250px",
    },
  },
  container: {
    margin: "0 20px 0",
    textAlign: "center",
  },
  title: {
    // color: "#454347",
    color: "yellow",
    letterSpacing: ".7px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  URL: {
    color: "yellow",
    fontSize: "20px",
    margin: "20px",
  },
  projectLink: {
    color: "white",
    fontSize: "15px",
  },
}))

export default useStyles

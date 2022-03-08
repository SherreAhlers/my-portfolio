import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  projectContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingBottom: "50px",
    background:
      "radial-gradient(yellow, #CF08BE, orange, #067BA1, yellow, darkgreen, hotpink)",
  },
  header: {
    margin: "30px 20px",
    [theme.breakpoints.up("md")]: {
      margin: "50px 70px",
    },
  },
  nameContainer: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#0C09FA",
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
      // margin: '0'
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
  projectInfoContainer: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
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
  techContainer: {
    margin: "0 20px 0",
    textAlign: "center",
  },
  title: {
    color: "white",
    letterSpacing: ".7px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  names: {
    color: "black",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  url: {
    color: "blue",
    fontSize: "18px",
    fontWeight: "bold",
  },
  projectURL: {
    color: "white",
    fontSize: "15px",
  },
}))

export default useStyles

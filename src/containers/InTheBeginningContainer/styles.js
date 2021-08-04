import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  inTheBeginningContainer: {
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
    margin: "10px 20px",
    background: "radial-gradient(white, purple, white)",
    maxWidth: "500px",
    padding: "20px",
    [theme.breakpoints.only("sm")]: {
      margin: "10px 23%",
    },
    [theme.breakpoints.up("md")]: {
      margin: "10px 33%",
    },
  },
  imageParent: {
    width: "350px",
    height: "300px",
    [theme.breakpoints.up("md")]: {},
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
      margin: "10px 50px 60px",
      justifyContent: "space-between",
    },
  },
  schoolProjectsSectionTitle: {
    color: "#4CA23D",
    fontSize: "28px",
    textAlign: "center",
    // margin: "0 20px 0",
    // textDecorationLine: "underline",
    // textDecorationStyle: "wavy",
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
  },
  schoolProjectsOuterContainer: {},
  schoolProjectsTitle: {
    color: "#E8EE26",
    textAlign: "center",
    fontSize: "25px",
    margin: "0 20px 30px",
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
    },
  },
  schoolProjectsImageContainer: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      margin: "10px 40px 10px 40px",
    },
  },
  schoolProjectsImageParent: {
    width: "300px",
    height: "350px",
    [theme.breakpoints.up("md")]: {
      width: "375px",
      height: "400px",
    },
  },
  schoolProjectsImage: {
    width: "100%",
    height: "100%",
  },
  schoolProjectsInfo: {
    color: "#E8EE26",
    textAlign: "center",
    fontSize: "18px",
    [theme.breakpoints.up("md")]: {},
  },
}))

export default useStyles

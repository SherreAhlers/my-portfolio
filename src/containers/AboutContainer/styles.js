import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(black, #F808BB, #F8F005, #F808BB, #F8F005, black)",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "50px 20px 0",
  },
  title: {
    textAlign: "center",
    fontSize: "35px",
    color: "white",
    [theme.breakpoints.up("md")]: {
      fontSize: "50px",
    },
  },
  contactInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "20px 20px 40px",
  },
  info: {
    textAlign: "center",
    fontSize: "20px",
    color: "white",
  },
  resumeImageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 20px",
  },
  resumeImageParent: {
    width: "350px",
    height: "400px",

    [theme.breakpoints.up("md")]: {
      width: "500px",
      height: "650px",
    },
  },
  resumeImage: {
    width: "100%",
    height: "100%",
  },
}))

export default useStyles

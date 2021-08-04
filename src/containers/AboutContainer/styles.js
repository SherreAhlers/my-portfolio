import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  aboutContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(black, #353A35, #F8F005, #F808BB, #F808BB, #34C032, #353A35)",

    [theme.breakpoints.up("md")]: {
      background:
        "linear-gradient(black, #353A35, #F808BB, #F8F005, #F8F005, #F808BB, #34C032, #34C032, #353A35)",
    },
  },
  aboutHeader: {
    margin: "10px 5px 0",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      margin: "50px 60px 0",
    },
  },
  aboutJobTitle: {
    color: "#7D0ACF",
    fontSize: "40px",
    margin: "40px 0 0",

    [theme.breakpoints.up("md")]: {
      fontSize: "52px",
    },
  },
  imageContainer: {
    background: "radial-gradient(white, green, white)",
    margin: "45px 20px 40px",
    paddingBottom: "20px",
    width: "380px",
    alignSelf: "center",
    [theme.breakpoints.up("md")]: {
      width: "550px",
    },
  },
  aboutImageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 20px 0",
  },
  aboutImageParent: {
    width: "355px",
    height: "450px",

    [theme.breakpoints.up("md")]: {
      width: "525px",
      height: "650px",
    },
  },
  aboutImage: {
    width: "100%",
    height: "100%",
  },
  aboutMeContainer: {
    display: "flex",
    justifyContent: "center",
  },
  backgroundInfo: {
    margin: "0 20px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    color: "#540891",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "25px",
    [theme.breakpoints.up("md")]: {
      fontSize: "35px",
    },
  },
  sectionInfo: {
    textAlign: "justify",
    color: "#2D2337",
    fontSize: "17px",
    maxWidth: "500px",
    border: "4px dotted #540891",
    padding: "20px",
    fontWeight: "bold",
    margin: "0 20px 30px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "750px",
      fontSize: "22px",
    },
  },
  dogImageContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: "5px 20px 20px",
    [theme.breakpoints.up("md")]: {
      margin: "10px 30px 30px",
    },
  },
  dogImage: {
    borderRadius: "30%",
    border: "solid 5px limegreen",
    width: "120px",
    [theme.breakpoints.up("md")]: {
      width: "200px",
    },
  },
  schoolContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "0 20px",
  },
  careerPathContainer: {
    margin: "10px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
  },
}))

export default useStyles

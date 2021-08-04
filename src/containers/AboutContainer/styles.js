import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(black, #353A35, #F808BB, #F8F005, #F808BB, #34C032 , black)",
    [theme.breakpoints.up("md")]: {
      background:
        "linear-gradient(black, #353A35, #F808BB, #F8F005, #F8F005, #F808BB, #34C032, #34C032, black)",
    },
  },
  homeHeader: {
    margin: "10px 5px 0",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      margin: "50px 60px 0",
    },
  },
  homeJobTitle: {
    color: "#7D0ACF",
    fontSize: "40px",
    margin: "40px 0 0",

    [theme.breakpoints.up("md")]: {
      fontSize: "52px",
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "radial-gradient(white, green, white)",
    margin: "45px 20px 40px",
    paddingBottom: "20px",
    width: "400px",
    alignSelf: "center",
    [theme.breakpoints.up("md")]: {
      width: "550px",
    },
  },
  homeImageContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 20px 0",
  },
  homeImageParent: {
    width: "375px",
    height: "350px",

    [theme.breakpoints.up("md")]: {
      width: "525px",
      height: "470px",
    },
  },
  homeImage: {
    width: "100%",
    height: "100%",
  },
  homeAboutContainer: {
    display: "flex",
    justifyContent: "center",
  },
  backgroundInfo: {
    margin: "0 20px",
  },
  whoAmI: {
    display: "flex",
    justifyContent: "center",
    color: "#540891",
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "25px",
  },
  homeBio: {
    textAlign: "justify",
    color: "white",
    fontSize: "17px",
  },
  schoolContainer: {
    margin: "0 20px",
  },
  schoolName: {
    display: "flex",
    justifyContent: "center",
    color: "#540891",
    marginTop: "20px",
    fontSize: "25px",
  },
  whatILearned: {
    textAlign: "justify",
    color: "white",
    fontSize: "17px",
  },
  careerPathContainer: {
    margin: "0 20px",
  },
  careerPathTitle: {
    display: "flex",
    justifyContent: "center",
    color: "#540891",
    marginTop: "20px",
    fontSize: "25px",
  },
  whyFrontendDeveloper: {
    textAlign: "justify",
    color: "white",
    fontSize: "17px",
  },
}))

export default useStyles

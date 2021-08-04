import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(black, black, #F808BB, #F8F005, #F808BB, #F8F005, black)",
  },
  homeHeader: {
    margin: "0 5px",
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
      margin: "50px 60px 0",
    },
  },
  homeTitle: {
    margin: "30px 20px 0",
    color: "#FA04A9",
    fontSize: "35px",

    [theme.breakpoints.up("md")]: {
      fontSize: "50px",
    },
  },
  homeJobTitle: {
    color: "#7D0ACF",
    fontSize: "30px",

    [theme.breakpoints.up("md")]: {
      fontSize: "45px",
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "radial-gradient(white, green, white)",
    margin: "20px 20px 40px",
    paddingBottom: "20px",
    width: "400px",
    alignSelf: "center",
    [theme.breakpoints.up("md")]: {
      width: "650px",
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
      width: "625px",
      height: "500px",
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
  },
  homeBio: {
    textAlign: "justify",
    color: "white",
  },
  schoolContainer: {
    margin: "0 20px",
  },
  schoolName: {
    display: "flex",
    justifyContent: "center",
    color: "#BA5EE0",
    marginTop: "20px",
  },
  whatILearned: {
    textAlign: "justify",
    color: "white",
  },
  careerPathContainer: {
    margin: "0 20px",
  },
  careerPathTitle: {
    display: "flex",
    justifyContent: "center",
    color: "#7D0ACF",
    marginTop: "20px",
  },
  whyFrontendDeveloper: {
    textAlign: "justify",
    color: "white",
  },
}))

export default useStyles

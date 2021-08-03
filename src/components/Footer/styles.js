import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  footerContainer: {
    backgroundColor: "black",
    padding: "20px 0",
  },
  linkContainer: {
    display: "inline",
    textAlign: "center",
  },
  copyrightContainer: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0 20px",
  },
  copyrightIcon: {
    fontSize: "15px",
    color: "#FA04A9",
    margin: "17px 0 0 ",
  },
  copyrightInfo: {
    display: "flex",
    fontSize: "15px",
    margin: "15px 0 0 10px",
    color: "#FA04A9",
  },
  gitHubLinkContainer: {
    margin: "20px 10px 0",
  },
  gitHubLink: {
    fontSize: "15px",
    color: "#1B05F8",
    letterSpacing: "1.5px",
  },
  linkdinLinkContainer: {
    margin: "20px 10px 0",
  },
  linkdinLink: {
    fontSize: "15px",
    color: "#1B05F8",
    letterSpacing: "1.5px",
  },
}))

export default useStyles

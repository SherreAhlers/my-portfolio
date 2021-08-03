import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  navContainer: {
    backgroundColor: "black",
    height: "50px",
  },
  linkContainer: {
    backgroundColor: "black",
  },
  iconButton: {
    color: "#FA04A9",
    marginLeft: "92%",
    height: "20px",
  },
  menuIcon: {
    fontSize: "30px",
  },
  linkText: {
    textDecoration: "none",
  },
  linkStyle: {
    textAlign: "center",
    textDecoration: "none",
    color: "#FA04A9",
    borderBottom: "1px solid #CE13DB",
  },
  paper: {
    backgroundColor: "black",
    height: "33%",
    top: "10px",
  },
  chevronRightIcon: {
    color: "#FA04A9",
    marginRight: "-260px",
    fontSize: "35px",
  },
}))

export default useStyles

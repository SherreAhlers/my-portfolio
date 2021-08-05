import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
    width: "400px",
    margin: "10px 20px 35px",
    padding: "5px",

    [theme.breakpoints.up("md")]: {
      width: "480px",
      padding: "20px 10px 10px",
    },
  },
  card: {
    background: "linear-gradient(#0C6A0A, #1867AD, #4C0B91)",
    padding: "20px 20px",
  },
  projectsName: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
    margin: "25px 5px 0",
  },
}))

export default useStyles

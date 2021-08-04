import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "76.5vh",
    background:
      "linear-gradient( black, #F808BB, #F8F005, #F808BB, #F8F005, black)",
  },
  homeHeader: {
    textAlign: "center",
  },
  homeTitle: {
    fontSize: "50px",
    margin: "200px 50px 0",
    color: "#6C26EE",
    fontWeight: "bold",
  },
  homeEnterButton: {
    display: "block",
    alignSelf: "center",
    width: "200px",
    height: "50px",
    margin: "-8px 50px 185px",
  },
  enterButton: {
    color: "white",
    backgroundColor: "purple",
  },
}))

export default useStyles

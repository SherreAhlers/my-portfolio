import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // display: "inline",
    width: "350px",
    margin: "20px",
    // justifyContent: "center",
    alignSelf: "center",
  },
  card: {
    backgroundColor: "pink",
    padding: "20px",
  },
}))

export default useStyles

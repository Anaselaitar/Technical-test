import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "#E8E8E8"
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  image: {
    height: "100%"
  },
  paper: {
    padding: theme.spacing(3, 2),
    width: 600,
    margin: 10
  }
}));

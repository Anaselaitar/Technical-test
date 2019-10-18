import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    margin: 15,
    maxWidth: 345,
    width: 345
  },
  media: {
    height: 0,
    paddingTop: "70%", // 16:9
    paddingBottom: "70%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  link: {
    textDecoration: null,
    fontSize: 50
  }
}));

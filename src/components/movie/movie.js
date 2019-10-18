import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import { useStyles } from "./styles";
import { NOT_FOUND_IMAGE } from "../../utils/constants";

export default function Movie(props) {
  const classes = useStyles();

  let movie = props.movie;
  return (
    <Card className={classes.card}>
      <a href={"shows/" + movie.show.id}>
        <CardHeader title={movie.show.name} />
        <CardMedia
          className={classes.media}
          image={movie.show.image ? movie.show.image.medium : NOT_FOUND_IMAGE}
          title={movie.show.name}
        />
      </a>
      <CardActions disableSpacing>
        <IconButton aria-label="Rating">
          <StarIcon />
        </IconButton>
        <div>
          {movie.show.rating.average
            ? movie.show.rating.average
            : "Not available!"}
        </div>
      </CardActions>
    </Card>
  );
}

import React, { useState, useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import { useStyles } from "./styles";
import { NOT_FOUND_IMAGE } from "../../utils/constants";

export default function MoviesList(props) {
  const classes = useStyles();
  let { params } = props.match;
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie();
  }, []);
  const getMovie = async () => {
    let result = await fetch("https://api.tvmaze.com/shows/" + params.id);
    let mMovie = await result.json();
    setMovie(mMovie);
  };

  const renderItem = (name, value) => {
    return (
      <Paper className={classes.paper}>
        <b>{name} : </b>
        <Typography variant="h6" component="h4">
          {value ? ReactHtmlParser(value) : name + "Unavailable"}
        </Typography>
      </Paper>
    );
  };
  return (
    (!movie && <div className={classes.root}>Loading</div>) ||
    (movie && (
      <div className={classes.root}>
        <img
          src={movie.image ? movie.image.original : NOT_FOUND_IMAGE}
          className={classes.image}
          alt={movie.name}
        ></img>
        <div>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              {movie.name}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h6" component="h4">
              <b>Genres : </b>
              {movie.genres.length > 0
                ? movie.genres.join(" ")
                : "Pas de genre"}
            </Typography>
          </Paper>
          {renderItem("Status", movie.status)}
          {renderItem("Type", movie.type)}
          {renderItem("Language", movie.language)}
          {renderItem(
            "Cast",
            movie.schedule.days.join(",") + " at " + movie.schedule.time
          )}
          {renderItem("Summary", movie.summary)}
        </div>
      </div>
    ))
  );
}

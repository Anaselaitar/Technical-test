import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import Movie from "../movie/movie";
import { useStyles } from "./styles";

export default function MoviesList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Movies</ListSubheader>
        </GridListTile>
        {props.movies.map(movie => (
          <Movie movie={movie} key={movie.show.id}></Movie>
        ))}
      </GridList>
    </div>
  );
}

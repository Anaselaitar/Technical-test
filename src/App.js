import React from "react";
import "./App.css";
import Header from "./components/header/header";
import MoviesList from "./components/moviesList/moviesList";

export default class App extends React.Component {
  moviesList = [];

  constructor(props) {
    super(props);
    this.state = { moviesList: [], isLoading: false, firstRun: true };
  }
  handleTitleChange = async event => {
    this.setState({ isLoading: true, firstRun: false });
    let moviesList = await this.getMoviesList(event.target.value);

    this.setState({ isLoading: false, moviesList });
  };
  getMoviesList = async name => {
    let result = await fetch("https://api.tvmaze.com/search/shows?q=" + name);
    return await result.json();
  };

  render() {
    let { moviesList, isLoading, firstRun } = this.state;
    return (
      <div className="App">
        <Header onSearchChange={this.handleTitleChange} />

        {firstRun && (
          <div className="Centered LargeText">Search for movies</div>
        )}
        {isLoading && <div className="Centered LargeText">Loading</div>}
        {!isLoading && moviesList.length > 0 && (
          <MoviesList movies={moviesList} />
        )}
        {!isLoading && !firstRun && moviesList.length === 0 && (
          <div className="Centered LargeText">No results</div>
        )}
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  // use inline rendering for render props or passing relevant render prop data to component 
  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} addSaved={this.addToSavedList} />
        <div>

        <Route exact path="/" component={MovieList} />

        <Route path="/movies/:id" component={Movie} />

        </div>
      </div>
    );
  }
}

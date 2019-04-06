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

  // question - should i use props.history for savedList?
  render() {
    return (
      <div>
        <SavedList list={this.state.savedList}/>
        <div>

        <Route exact path="/" render={props => <MovieList {...props} addSaved={this.addToSavedList}/>} />

        <Route path="/movies/:id" render={props => <Movie  {...props} addSaved={this.addToSavedList}/> }/>


        </div>
      </div>
    );
  }
}

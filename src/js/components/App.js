import React, { Component } from 'react';
import { debounce } from 'lodash';
import Search from './Search';
import LocationListContainer from './LocationListContainer';
import data from '../../data.json';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data.Clinics,
      searching: false,
      searchResults: []
    };

    this.onSearch = debounce(this.onSearch.bind(this), 1000);
  }

  updateState(state, cb) {
    this.setState(state, cb);
  }

  onSearch(searchInput) {
    if (searchInput.length > 0) {
      this.updateState({ searching: true });
    } else {
      this.updateState({ searching: false });
    }

    let regExp = new RegExp(searchInput);
    let results = [];

    this.state.data.forEach(location => {
      if (location.Name.match(regExp)) {
        results.push(location);
      }
    });

    this.updateState({ searchResults: results });
  }

  render() {
    return (
      <div id="app">
        <h1>WDH React</h1>
        <Search
          onSearch={this.onSearch}
        />
        <LocationListContainer
          data={this.state.data}
          searching={this.state.searching}
          searchResults={this.state.searchResults}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { debounce } from "lodash";
import { Search, LocationListContainer, ListElement } from "./";
import data from "../../data.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data.Clinics,
      searching: false,
      searchResults: [],
      choosenResult: null,
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

    let regExp = new RegExp(searchInput.toLowerCase());
    let results = [];

    this.state.data.forEach((location) => {
      // console.log(location);
      if (location.Name.toLowerCase().match(regExp)) {
        results.push(location);
      }
    });

    this.updateState({ searchResults: results });
  }

  getElementId(id) {
    let newElement = this.state.data.filter((el) => {
      return el.Id === id;
    })[0];
    this.updateState({ choosenResult: newElement });
  }

  check() {
    console.log(this.state.choosenResult);
  }

  render() {
    return (
      <div id="app">
        <button onClick={this.check.bind(this)}>CHECK</button>
        <h1>WDH React</h1>
        <Search onSearch={this.onSearch} />
        <LocationListContainer
          data={this.state.data}
          searching={this.state.searching}
          searchResults={this.state.searchResults}
          getElementId={this.getElementId.bind(this)}
        />
        <ListElement choosenResult={this.state.choosenResult}/>
      </div>
    );
  }
}

export default App;

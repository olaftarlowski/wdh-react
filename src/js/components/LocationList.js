import React, { Component } from "react";

class LocationList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  getElementId(e) {
    this.props.getElementId(e.currentTarget.id);
  }

  isEmpty() {
    return this.props.data.length === 0;
  }

  getList() {
    let result;

    if (this.isEmpty()) {
      result = (
        <div className="wrapper">
          <p>No locations found.</p>
        </div>
      );
    } else {
      result = (
        <div className="wrapper">
          {this.props.data.map((location) => (
            <div
              className="location-list-item"
              id={location.Id}
              key={location.Id}
              onClick={this.getElementId.bind(this)}
            >
              <p>{location.Name}</p>
            </div>
          ))}
        </div>
      );
    }

    return result;
  }

  render() {
    return <div id="location-list">{this.getList()}</div>;
  }
}

export default LocationList;

import React, { Component } from "react";

class ListElement extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      this.props.choosenResult && (
        <div id="list-element">
          <div className="list-element__column">
            <div>
              <p>
                ID: {this.props.choosenResult.Id}, Group:
                {this.props.choosenResult.Group}
              </p>
            </div>
            <div>
              <p>{this.props.choosenResult.Name}</p>
            </div>
            <div>
              <p>{this.props.choosenResult.FormattedAddress}</p>
            </div>
          </div>
          <div className="list-element__column">
            <p>Y: {this.props.choosenResult.Latitude.toFixed(3)}</p>
            <p>X: {this.props.choosenResult.Longitude.toFixed(3)}</p>
            <p>Dist: {this.props.choosenResult.DistanceToPoint.toFixed(3)}</p>
          </div>
        </div>
      )
    );
  }
}

export default ListElement;

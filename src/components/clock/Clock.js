import React, { Component } from 'react';

export class Clock extends Component {
  render() {
    return (
      <div className="Clock">
        <button onClick={this.props.showTime} >Show Time</button>
        <h3>{this.props.time}</h3>
      </div>
    );
  }
}

Clock.propTypes = {
  time: React.PropTypes.string.isRequired,
  showTime: React.PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Clock.css';

export class Clock extends Component {
  render() {
    return (
      <div className="Clock">
        <button onClick={this.props.showTime} className={"button"} >Show Time</button>
            <h3>{this.props.time}</h3>
      </div>
    );
  }
}

Clock.propTypes = {
  time: PropTypes.string.isRequired,
  showTime: PropTypes.func.isRequired,
};

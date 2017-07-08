import React from 'react';
import logo from './logo.svg';
import { ClockContainer } from './components/clock/Clock-container';
import { TreeViewContainer } from './components/treeView/treeView-Container';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
        </div>
        <TreeViewContainer/>
      </div>
    );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import { TreeViewContainer } from './components/treeView/treeView-Container';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <Navbar className="App-header"/>
        <TreeViewContainer/>
      </div>
    );
}

export default App;

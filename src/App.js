import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { csv } from 'd3-request'
import Navbar from './components/Navbar'

class App extends Component {
  componentDidMount() {
    csv('./results/pshtt.csv', (error))
  }
  render() {
    return (
        <div>
            <Navbar/>
        </div>
    );
  }
}

export default App;

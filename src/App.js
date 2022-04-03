import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Para from './components/Para';
import {Component} from 'react'
import React from 'react';
import Image from './components/image';
import Link from './components/link';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Greet></Greet>
        <Para></Para>
        <Image></Image>
        
      </div>
    )
  }
}

export default App;

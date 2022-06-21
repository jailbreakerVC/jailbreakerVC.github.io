import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Para from './components/Para';
import {Component} from 'react'
import React from 'react';
import Image from './components/image';
import Link from './components/link';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <section class="showcase">
          <video src='video.mov'autoPlay loop muted ></video>
          <h1 class="title">Coming soon</h1>
        </section>
        
        {/* <h1 class="text-blue-100">personal site, coming soon</h1> */}
        {/* <Greet></Greet>
        <Para age='18'></Para>
        <a className='text-slate-500 hover:text-red-500' href="https://www.youtube.com/channel/UCzJuPvglj46GjRDtAk89VHA"> SUBSCRIBE TO ME YOUTUBER CHANNOL      </a>
        
        <Button></Button>
        <Image></Image> */}
      </div>
    )
  }
}

export default App;

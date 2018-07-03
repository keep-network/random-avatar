import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from 'avataaars';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Avatar
            style={{width: '300px', height: '300px'}}
            avatarStyle='Circle'
            topType='LongHairMiaWallace'
            accessoriesType='Prescription02'
            hairColor='BrownDark'
            facialHairType='Blank'
            clotheType='Hoodie'
            clotheColor='PastelBlue'
            eyeType='Happy'
            eyebrowType='Default'
            mouthType='Smile'
            skinColor='Light'
          />
        </p>
      </div>
    );
  }
}

export default App;

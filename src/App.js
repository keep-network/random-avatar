import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from 'avataaars';
import Network from './network';
import { getKeepRandomBeaconImplementation } from './contracts';

class App extends Component {

  constructor() {
    super()
    this.state = {};
    this.options = {
      avatarStyle: ['Circle', 'Transparent'],
      topType: ['Eyepatch', 'Hat', 'Hijab', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairMiaWallace', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'NoHair', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggy', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4'],
      hatColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
      accessoriesType: ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
      hairColor: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Platinum', 'Red', 'SilverGray'],
      facialHairType: ['BeardLight', 'BeardMagestic', 'BeardMedium', 'Blank', 'MoustacheFancy', 'MoustacheMagnum'],
      clotheType: ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Graphics', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'],
      clotheColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
      eyeType: ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'],
      eyebrowType: ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'FrownNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural'],
      mouthType: ['Concerned', 'Default', 'Disbelief','Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'],
      skinColor: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black']
    }
  }

  componentDidMount() {
    this.getData();
  }

  async requestRelayEntry() {
    await this.state.randomBeacon.requestRelayEntry(0, 0, {from: this.state.yourAddress, gas: 150000});
  }

  render() {
    const {avatarStyle, topType, hatColor, accessoriesType, hairColor, facialHairType, clotheType, clotheColor, eyeType, eyebrowType, mouthType, skinColor} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.requestRelayEntry.bind(this)}>get random number</button>
        <p className="App-intro">
          <Avatar
            style={{width: '300px', height: '300px'}}
            avatarStyle={avatarStyle}
            topType={topType}
            hatColor={hatColor}
            accessoriesType={accessoriesType}
            hairColor={hairColor}
            facialHairType={facialHairType}
            clotheType={clotheType}
            clotheColor={clotheColor}
            eyeType={eyeType}
            eyebrowType={eyebrowType}
            mouthType={mouthType}
            skinColor={skinColor}
          />
        </p>
      </div>
    );
  }

  async getData() {

    // Your address
    const accounts = await Network.getAccounts();
    const yourAddress = accounts[0];

    // Contracts
    const randomBeacon = await getKeepRandomBeaconImplementation(process.env.REACT_APP_RANDOM_BEACON_ADDRESS);

    // Attach event listener
    randomBeacon.RelayEntryGenerated().watch((error, result) => {
      let randomBigNumber = result.args.requestResponse;
      this.setState({
        topType: this.options.topType[randomBigNumber.modulo(this.options.topType.length).toFixed()],
        hatColor: this.options.hatColor[randomBigNumber.modulo(this.options.hatColor.length).toFixed()],
        accessoriesType: this.options.accessoriesType[randomBigNumber.modulo(this.options.accessoriesType.length).toFixed()],
        hairColor: this.options.hairColor[randomBigNumber.modulo(this.options.hairColor.length).toFixed()],
        facialHairType: this.options.facialHairType[randomBigNumber.modulo(this.options.facialHairType.length).toFixed()],
        clotheType: this.options.clotheType[randomBigNumber.modulo(this.options.clotheType.length).toFixed()],
        clotheColor: this.options.clotheColor[randomBigNumber.modulo(this.options.clotheColor.length).toFixed()],
        eyeType: this.options.eyeType[randomBigNumber.modulo(this.options.eyeType.length).toFixed()],
        eyebrowType: this.options.eyebrowType[randomBigNumber.modulo(this.options.eyebrowType.length).toFixed()],
        mouthType: this.options.mouthType[randomBigNumber.modulo(this.options.mouthType.length).toFixed()],
        skinColor: this.options.skinColor[randomBigNumber.modulo(this.options.skinColor.length).toFixed()]
      });
    });

    this.setState({
      yourAddress,
      randomBeacon
    });
  }
}

export default App;

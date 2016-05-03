import React from 'react'
import Data from '../data'

export default class App extends React.Component {
  render() {
  	const { letter, soundboard, isPlaying, onLetterClick, globalCounter, personalCounter } = this.props;
    let trueSoundboard;
    let foundKey;
    
    for (var i = 0; i < Data.soundboards.length; i++) {
      if (Data.soundboards[i].title === soundboard) {
        trueSoundboard = Data.soundboards[i]
      }
    }

    for (var j = 0; j < trueSoundboard.rows.length; j++) {
      var keys = trueSoundboard.rows[j].keys;
      
      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        if (key.title === letter) {
          foundKey = key;
        }
      }
    }
      

    if (foundKey.urls && isPlaying === false) {
    	return (<div className="key" id={"key" + letter} onClick={() => {
    		onLetterClick(foundKey, soundboard, isPlaying, globalCounter, personalCounter)
    	}}>{letter}</div>)	
    } else {
    	return (<div className="key disabled">{letter}</div>)
    }
  }
}
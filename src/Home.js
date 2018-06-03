'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import { ViroARScene, ViroText, ViroConstants } from 'react-viro';

import Pokemon from './components/Pokemon';
import Pokeball from './components/Pokeball';

export default class Home extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Starting PokeBAM...'
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {this.state.text && (
          <ViroText
            text={this.state.text}
            scale={[0.5, 0.5, 0.5]}
            position={[0, 0, -1]}
            style={styles.textStyle}
          />
        )}
        <Pokemon />
        <Pokeball />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: null
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = Home;

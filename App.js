/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';

import { ViroARSceneNavigator } from 'react-viro';

import { VIRO_API_KEY } from './environment.secret';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey: VIRO_API_KEY
};

// Sets the default scene you want for AR
var InitialARScene = require('./src/Home');

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps: sharedProps
    };
    this._getARNavigator = this._getARNavigator.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    return this._getARNavigator();
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: InitialARScene }}
      />
    );
  }
}

module.exports = ViroSample;

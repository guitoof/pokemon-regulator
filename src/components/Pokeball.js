'use strict';

import React, { Component } from 'react';

import {
  ViroNode,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight
} from 'react-viro';

export default class Pokeball extends Component {
  render() {
    return (
      <ViroNode>
        <ViroAmbientLight color="#FFFFFF" />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
        />
        <Viro3DObject
          source={require('PokeBAM/src/assets/3D/Pokeballs/Regular/pokeball.obj')}
          position={[0, 0, -0.2]}
          rotation={[0, -90, 0]}
          scale={[0.0005, 0.0005, 0.0005]}
          dragType="FixedDistance"
          type="OBJ"
        />
      </ViroNode>
    );
  }
}

module.exports = Pokeball;

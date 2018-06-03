'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import { Viro3DObject, ViroAmbientLight, ViroARPlane } from 'react-viro';

export default class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      planeCoords: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
  }
  render() {
    return (
      <ViroARPlane
        minHeight={0.05}
        minWidth={0.05}
        alignment={'Horizontal'}
        onAnchorFound={e => {
          this.setState({
            planeCoords: {
              x: e.position[0],
              y: e.position[1],
              z: e.position[2] - 1,
            },
          });
        }}
      >
        <ViroAmbientLight color="#FFFFFF" />
        <Viro3DObject
          source={require('PokeBAM/src/assets/3D/Pokemons/Squirtle/Squirtle.vrx')}
          resources={[
            require('PokeBAM/src/assets/3D/Pokemons/Squirtle/pm0007_00_Body1.png'),
            require('PokeBAM/src/assets/3D/Pokemons/Squirtle/pm0007_00_Body1Id.png'),
            require('PokeBAM/src/assets/3D/Pokemons/Squirtle/pm0007_00_BodyNor.png'),
            require('PokeBAM/src/assets/3D/Pokemons/Squirtle/pm0007_00_Eye1.png'),
            require('PokeBAM/src/assets/3D/Pokemons/Squirtle/pm0007_00_Eye1Id.png'),
            require('PokeBAM/src/assets/3D/Pokemons/Squirtle/pm0007_00_Eye2.png'),
            require('PokeBAM/src/assets/3D/Pokemons/Squirtle/pm0007_00_EyeNor.png'),
          ]}
          position={[this.state.planeCoords.x, this.state.planeCoords.y, this.state.planeCoords.z]}
          rotation={[-90, 0, 0]}
          dragType="FixedToWorld"
          scale={[0.015, 0.015, 0.015]}
          type="VRX"
        />
      </ViroARPlane>
    );
  }
}

module.exports = Pokemon;

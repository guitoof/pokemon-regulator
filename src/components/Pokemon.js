'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import { Viro3DObject, ViroAmbientLight, ViroNode } from 'react-viro';

export default class Pokemon extends Component {
  render() {
    return (
      <ViroNode position={[0.0, 0.0, -10]} rotation={[-90, 0, 0]}>
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
          scale={[0.1, 0.1, 0.1]}
          type="VRX"
        />
      </ViroNode>
    );
  }
}

module.exports = Pokemon;

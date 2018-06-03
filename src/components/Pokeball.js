'use strict';

import React, { Component } from 'react';

import {
  ViroNode,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight
} from 'react-viro';

export default class Pokeball extends Component {
  constructor() {
    super();
    this.state = {
      shouldHoldPokeball: true
    };
    this.pokeball = null;
  }
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
          position={[0, 0, -0.1]}
          rotation={[0, -90, 0]}
          ref={pokeball => (this.pokeball = pokeball)}
          scale={[0.0001, 0.0001, 0.0001]}
          type="OBJ"
          dragType="FixedDistance"
          physicsBody={{
            type: 'Dynamic',
            mass: 1,
            useGravity: !this.state.shouldHoldPokeball,
            restitution: 0.5
          }}
          onDrag={() => {}}
          onClick={() => {
            this.pokeball.applyImpulse([0, 1, -1]);
            this.setState({ shouldHoldPokeball: false });
          }}
        />
      </ViroNode>
    );
  }
}

module.exports = Pokeball;

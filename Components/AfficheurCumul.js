//Component AfficheurCumul permettant l'affichage des heures cumulées

import React, { Component } from 'react';
import { Platform, StyleSheet, Text,TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image } from 'react-native';

import Jour from './Jour'
import {cumul} from '../styles'

export default class Cumul extends Component {


  render() {
    return (
      <View style={cumul.box}>
        <Text style={cumul.titre}>Cumul hebdomadaire</Text>
        <Text style={cumul.heures}>{parseFloat(Jour.heureCumul).toFixed(0)} h</Text>
        <Text style={cumul.heures}>0 m</Text>
      </View>
    );
  }
}

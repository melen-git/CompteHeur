//Component Jour contenant le nom du jour et la saisie des 4 heures journalières

import React, { Component } from 'react';
import { Platform, StyleSheet, Text,TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image } from 'react-native';

import {jour} from '../styles'

export default class Jour extends Component {


  render() {
    return (
      <View style={jour.box}>
        <Text style={jour.titre}>Jour 1</Text>
        <View style={jour.saisie}>
          <Text style={jour.text}>AM</Text>
          <TextInput style={jour.textinput} placeholder='debut' keyboardType={'numeric'} />
          <TextInput style={jour.textinput} placeholder='fin' keyboardType={'numeric'}/>
          <Text style={jour.text}>    PM</Text>
          <TextInput style={jour.textinput} placeholder='debut' keyboardType={'numeric'}/>
          <TextInput style={jour.textinput} placeholder='fin' keyboardType={'numeric'}/>

        </View>
      </View>
    );
  }
}
//**keyboardType={'numeric'}**

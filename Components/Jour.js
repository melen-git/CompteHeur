//Component Jour contenant le nom du jour et la saisie des 4 heures journalières

import React, { Component } from 'react';
import { Platform, StyleSheet, Text,TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image } from 'react-native';

import {jour} from '../styles'

export default class Jour extends Component {


  render() {
    return (
      <View style={jour.case}>
        <Text style={jour.titre}>Jour 1</Text>
        <View style={jour.saisie}>
          <Text style={jour.text}>Matin</Text>
          <TextInput style={jour.textinput} placeholder='debut'/>
          <TextInput style={jour.textinput} placeholder='fin'/>
          <Text style={jour.text}>Après-midi</Text>
          <TextInput style={jour.textinput} placeholder='debut'/>
          <TextInput style={jour.textinput} placeholder='fin'/>

        </View>
      </View>
    );
  }
}
/*
<TextInput
style={styleBase.textinput}
placeholder='Heure 3'
/>
*/

//Component Jour contenant le nom du jour et la saisie des 4 heures journalières

import React, { Component } from 'react';
import { Platform, StyleSheet, Text,TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image, Button } from 'react-native';

import {jour} from '../styles'
import DateTimePicker from '@react-native-community/datetimepicker';


export default class Jour extends Component {
  state={
    date: new Date('2020-06-18T12:00:00'),
    mode:'date',
    show: false,
  }

  setDate=(event, date)=>{
    date=date||this.state.state
    this.setSate({
      show: Platform.Os==='ios'?true:false,
      date,
    });
  }

  show= mode=>{
    this.setState({
      show:true,
      mode,
    });
  }

  datepicker=()=>{
    this.show('date');
  }

  timepicker=()=>{
    this.show('time');
  }

  render() {
    const {show, date, mode}=this.state;

    return (
      <View style={jour.box}>

        <View style={jour.gauche}>

          <TouchableOpacity style={jour.boutonDate} onPress={this.datepicker} >
            <Text style={jour.textDate}>Ajouter une journée</Text>
          </TouchableOpacity>

          <View style={jour.saisie}>
            <Text>De </Text>
            <TouchableOpacity style={jour.bouton} onPress={this.timepicker} >
              <Text>...</Text>
            </TouchableOpacity>
            <Text>A </Text>
            <TouchableOpacity style={jour.bouton} onPress={this.timepicker} >
              <Text>...</Text>
            </TouchableOpacity>
          </View>

          <View style={jour.saisie}>
            <Text>De </Text>
            <TouchableOpacity style={jour.bouton} onPress={this.timepicker} >
              <Text>...</Text>
            </TouchableOpacity>
            <Text>A </Text>
            <TouchableOpacity style={jour.bouton} onPress={this.timepicker} >
              <Text>...</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={jour.droite}>
          <TouchableOpacity style={jour.boutonEnregistre}>
            <Text style={{color:'white', fontWeight:'bold'}}>Enregistrer</Text>
          </TouchableOpacity>
        </View>

        {
          show && <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={this.setDate}
                  />
        }
      </View>
    );
  }
}
//**keyboardType={'numeric'}**
/*
<View style={jour.box}>

<TouchableOpacity style={jour.boutonDate} onPress={this.datepicker} >
  <Text>Ajouter une journée</Text>
</TouchableOpacity>

  <View style={jour.saisie}>
    <TouchableOpacity style={jour.bouton} onPress={this.timepicker} >
      <Text>Début matinée</Text>
    </TouchableOpacity>
    <TouchableOpacity style={jour.bouton} onPress={this.timepicker} >
      <Text>Fin matinée</Text>
    </TouchableOpacity>

  </View>
  <View style={jour.saisie}>
    <TouchableOpacity style={jour.bouton} onPress={this.timepicker} >
      <Text>Début après-midi</Text>
    </TouchableOpacity>
    <TouchableOpacity style={jour.bouton} onPress={this.timepicker} >
      <Text>Fin après-midi</Text>
    </TouchableOpacity>


  </View>
  <View>
    <TouchableOpacity style={jour.boutonEnregistre}>
      <Text>Enregistrer</Text>
    </TouchableOpacity>
  </View>
*/

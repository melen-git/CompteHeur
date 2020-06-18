//Component Jour contenant le nom du jour et la saisie des 4 heures journalières

import React, { Component } from 'react';
import { Platform, StyleSheet, Text,TextInput, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image } from 'react-native';

import {jour} from '../styles'
import DateTimePicker from '@react-native-community/datetimepicker';


export default class Jour extends Component {
  state={
    date: new Date('2020-06-18T12:00:00'),
    mode:'date',
    show: false,
  }

  setDate(event, date){
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

  constructor() {
    super()
    this.state={
      isVisible = false;
    }
  }


  render() {
    const {show, date, mode}=this.state;

    return (
      <View style={jour.box}>
        <Text style={jour.titre}>Jour 1</Text>
        <View style={jour.saisie}>
          <Button onPress={this.datepicker} title="date" />
          <Text style={jour.text}>AM</Text>
          <Button onPress={this.timepicker} title="début" />
          <Button onPress={this.timepicker} title="fin" />


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

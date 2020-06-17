//fichier Accueil.js
//page d'affichage principale de l'application
//contient des "View" permettant de contenir les élements d'affichage

import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, View, Text,TextInput, Button, TouchableOpacity, Image} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


//import *fonction* from '../Fonctions/CalcHeures'
import Jour from '../Components/Jour'
import Cumul from '../Components/AfficheurCumul'
import Reste from '../Components/AfficheurReste'

//import { *stylePage* } from '../Styles'
import { styleBase } from '../styles'

export default class Accueil extends React.Component {

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: 'white' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styleBase.ensemble}
        scrollEnabled={true}
      >
        <View style={styleBase.conteneur1}>
          <Jour/>
          <Jour/>
          <Jour/>
          <Jour/>
          <Jour/>
        </View>
        <View style={styleBase.conteneur2}>
          <Cumul/>
          <Reste/>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}
/*onSubmitEditing={(event) => {this._geocodeAddress(event.nativeEvent.text)}}*/

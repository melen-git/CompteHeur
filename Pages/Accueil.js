//fichier Accueil.js
//page d'affichage principale de l'application
//contient des "View" permettant de contenir les élements d'affichage

import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, View, Text,TextInput, Button, TouchableOpacity, Image} from 'react-native'



//import *fonction* from '../Fonctions/CalcHeures'
import Jour from '../Components/Jour'

//import { *stylePage* } from '../Styles'
import { styleBase } from '../styles'

export default class Accueil extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styleBase.conteneur1}>
          <Jour/>
        </View>
        <View style={styleBase.conteneur2}>
        </View>
      </View>
    )
  }
}
/*onSubmitEditing={(event) => {this._geocodeAddress(event.nativeEvent.text)}}*/

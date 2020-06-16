//fichier Accueil.js
//page d'affichage principale de l'application




import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native'



//import *fonction* from '../Fonctions/CalcHeures'

//import { *stylePage* } from '../Styles'
import { styleBase } from '../Styles'

export default class Accueil extends React.Component {

  render() {
    return (
      <View >
        <View style={styleBase.jour}>
          <View style={styleBase.titre}>
            <Text>jour 1</Text>
          </View>
          <View style={styleBase.sasie}>

            <Text>Matin</Text>

            <TextInput
            style={styleBase.textinput}
            placeholder='Heure 1'
            />

            <TextInput
            style={styleBase.textinput}
            placeholder='Heure 2'
            />

            <Text>Après-midi</Text>

            <TextInput
            style={styleBase.textinput}
            placeholder='Heure 1'
            />

            <TextInput
            style={styleBase.textinput}
            placeholder='Heure 2'
            />

          </View>

        </View>
      </View>
    )
  }
}
/*onSubmitEditing={(event) => {this._geocodeAddress(event.nativeEvent.text)}}*/

//fichier Accueil.js
//page d'affichage principale de l'application
//contient des "View" permettant de contenir les élements d'affichage



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
      <View flex: 1>
        <View style={styleBase.conteneur1}>
        //motié superieur page
          <View style={styleBase.jour}>

            <Text style={styleBase.titre}>jour 1</Text>

            <View style={styleBase.sasie}>

              <Text style={styleBase.titre}>Matin</Text>

              <TextInput
              style={styleBase.textinput}
              placeholder='Heure 1'
              />

              <TextInput
              style={styleBase.textinput}
              placeholder='Heure 2'
              />

              <Text style={styleBase.titre}>Après-midi</Text>

              <TextInput
              style={styleBase.textinput}
              placeholder='Heure 3'
              />

              <TextInput
              style={styleBase.textinput}
              placeholder='Heure 4'
              />

            </View>
          </View>
        </View>
        <View style={styleBase.conteneur2}>
        //motié inferieur page
        </View>
      </View>
    )
  }
}
/*onSubmitEditing={(event) => {this._geocodeAddress(event.nativeEvent.text)}}*/

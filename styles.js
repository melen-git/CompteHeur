import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'

const Box = {
  backgroundColor: '#DDDDDD',//'#808097'
  borderRadius:5,
  paddingVertical: 5,
  paddingHorizontal: 10,
  marginVertical: 5,
  marginHorizontal: 10,
}

const Input = {
  backgroundColor: '#D0D0D0',//'#808097'
  borderRadius:5,
  paddingVertical: 5,
  paddingHorizontal: 10,
  marginVertical: 5,
  marginHorizontal: 5,
  width: 57,
  height: 35,
}

export const styleBase = StyleSheet.create({
  ensemble:{
  },
  conteneur1: {
    justifyContent: 'space-around',
  },
  conteneur2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export const jour = StyleSheet.create({
  box:{
    flex: 1,
    ...Box,
    alignItems: "center",
  },
  titre:{
    fontWeight: "bold",
    flex: 1,
  },
  saisie:{
    flexDirection: 'row',
    flex: 2,
    alignItems: "center",
  },
  text:{},
  textinput:{
    ...Input,
  },
});

export const cumul = StyleSheet.create({
  box:{
    ...Box,
    width: 150,
    height: 150,
    alignItems: "center",
  },
  titre:{
    fontSize: 12,
  },
  heures:{
    fontSize: 40,
    marginTop: 7,
  },
});


/*export const styleExemple = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  haut_ecran: {
    flex: 2,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  bas_ecran: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around'
  },
  BPgauche: {
    alignItems:'center',
  },
  components: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center',
  },
  BPdoit: {
    alignItems:'center',
  },
  CompVitesse:{
    flex: 2
  },
  CompBatterie:{
    flex: 1
  },
  Apropos: {
    flex: 1,
    ...Box,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
});*/

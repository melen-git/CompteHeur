import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'

const Case = {
  backgroundColor: '#6D808E',//'#808097'
  borderRadius:5,
  paddingVertical: 5,
  paddingHorizontal: 10,


}

export const styleBase = StyleSheet.create({
  jour: {
    alignItems:'center',
  },
  titre: {
    alignItems:'center',
  },
  saisie: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textinput:{
    alignItems:'center',
  },
});


export const styleExemple = StyleSheet.create({
  main_container: {
    flex: 1,
    ...CouleurFond
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
    ...Case,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
});

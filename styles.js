import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native'

const Case = {
  backgroundColor: '#DDDDDD',//'#808097'
  borderRadius:5,
  paddingVertical: 5,
  paddingHorizontal: 10,
  marginVertical: 5,
  marginHorizontal: 5,
}

export const styleBase = StyleSheet.create({
  conteneur1: {
    flex: 2,
    justifyContent: 'space-around',
  },
  conteneur2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export const jour = StyleSheet.create({
  case:{
    ...Case,
    flex: 1/5,
    alignItems: "center",
  },
  titre:{
    fontWeight: "bold",
  },
  saisie:{
    flexDirection: 'row',
    flex: 1,
    

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
    ...Case,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
});*/

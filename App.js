//CompteHeure fichier App.js
//création le 16/06/2020


import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

import Accueil from './Pages/Accueil'

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={Accueil}
          options={{
            title: 'Accueil',
            //header: null,
            headerStyle: {
            backgroundColor: '#0C517F',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//screenOptions={{headerShown: false}}

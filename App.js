import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Decks" component={DecksStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

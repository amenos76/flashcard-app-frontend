import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';
import SettingsScreen from './screens/SettingsScreen';

import { DataLayerProvider } from './context/DataLayerContext'


const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default () => {
  return (
    // <DataLayer initalState={initialState} reducer={reducer}>
    <DataLayerProvider>
      <App />
    </DataLayerProvider>
    // </DataLayer>
  )
}
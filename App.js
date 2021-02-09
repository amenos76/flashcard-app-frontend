import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';
import SettingsScreen from './screens/SettingsScreen';

import { DataLayer } from './provider/DataLayer';
import reducer, { initialState } from './reducer/reducer';
import { useDataLayerValue } from './provider/DataLayer';


const Drawer = createDrawerNavigator();


export default function App() {

  // const [{}, dispatch] = useDataLayerValue();

  return (
    <DataLayer initalState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </DataLayer>
  );
}

// const SAMPLE_FLASHCARD = [
//   {
//     id: 1,
//     question: 'What is 2 + 2?',
//     answer: '4',
//   },
//   {
//     id: 2,
//     question: 'What is 1 + 2?',
//     answer: '3',
//   },
//   {
//     id: 3,
//     question: 'What is 10 + 10?',
//     answer: '20',
//   },
// ]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

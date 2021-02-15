import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';
import SettingsScreen from './screens/SettingsScreen';
import RootStackScreen from './screens/RootStackScreen'

import { AppProvider } from './provider/AppProvider'


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootStackScreen>
          {/* <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          </Drawer.Navigator> */}
        </RootStackScreen>
      </NavigationContainer>
    </AppProvider>
  );
}

// export default () => {
//   return (
//     <DataLayerProvider>
//       <App />
//     </DataLayerProvider>
//   )
// }
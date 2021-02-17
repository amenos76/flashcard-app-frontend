import React, { useContext, useState, useEffect, useMemo, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import DrawerContent from './screens/DrawerContent';
import SettingsScreen from './screens/SettingsScreen';
import RootStackScreen from './screens/RootStackScreen'

import { AppProvider, AppContext } from './provider/AppProvider'
import { AuthContext } from './context/AuthContext'
import { ActivityIndicator } from 'react-native-paper';

import { HOST_WITH_PORT } from './environment';

const Drawer = createDrawerNavigator();

export default function App() {
  const state = useContext(AppContext)

  // const state = useContext(AppContext)
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  // const [user, setUser] = useState(null);

  const initialLoginState = {
    isLoading: false,
    email: null,
    user: null,
    userId: null,
    userToken: null,
    isValidEmail: true,
    isValidPassword: true,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
          userId: action.userId
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
          userId: null,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    signIn: (email, response) => {
      // console.log(response)
      // fetch(`${HOST_WITH_PORT}/login`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //       email: email,
      //       password: password,
      //   })
      // }).then(response => {
      //     if (!response.ok) throw new Error("Email or password not found")
      //     return response.json()
      //   }).then(response => {
          dispatch({
            type: "LOGIN",
            id: email,
            token: response.token,
            userId: response.user.id
          })
        // })
        // .catch(error => {
        //   console.log("Error:", error)
        // })
        
    },
    signOut: () => {
      dispatch({
        type: "LOGOUT",
      })
    },
    signUp: (email, password) => {
      // setUserToken('dfakljfda')
      // setIsLoading(false)
      fetch(`${HOST_WITH_PORT}/users`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
          }
        })
      }).then(response => response.json())
      .then(response => dispatch({ 
        type: "REGISTER",
        id: email,
        token: response.token 
      }))
    },
  }), []);


  if ( loginState.isLoading ) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <AppProvider>
        <NavigationContainer>
          { loginState.userToken !== null ? (
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            </Drawer.Navigator>
            )
          :
          <RootStackScreen />
          }
        </NavigationContainer>
      </AppProvider>
    </AuthContext.Provider>
  );
}
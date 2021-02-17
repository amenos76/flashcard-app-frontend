import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Login-Signup/SplashScreen';
import SignInScreen from './Login-Signup/SignInScreen';
import SignUpScreen from './Login-Signup/SignUpScreen';

const RootStack = createStackNavigator();

export default function RootStackScreen( {dispatch} ) {
  return (
    <RootStack.Navigator headerMode="none" >
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} dispatch={dispatch}/>
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  )
}

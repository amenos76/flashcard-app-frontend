import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen';
import MyDecksScreen from './MyDecksScreen';
import CreateDeckScreen from './CreateDeckScreen';
import ExploreDecksScreen from './ExploreDecksScreen';


const HomeStack = createStackNavigator();
const DecksStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'black' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="My Decks"
          component={MyDecksScreen}
          options={{
            tabBarLabel: 'My Decks',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cards" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Create Deck"
          component={CreateDeckScreen}
          options={{
            tabBarLabel: 'Create Deck',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="card-plus" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreDecksScreen}
          options={{
            tabBarLabel: 'Explore Decks',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="card-search" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
}

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerLeft: () => (
          <Icon.Button 
          name="ios-menu" 
          size={25} 
          backgroundColor="#009387" 
          onPress={() => navigation.openDrawer()} />
        )
      }} />
    </HomeStack.Navigator>
  )
};

const DecksStackScreen = ({navigation}) => {
  return (
    <DecksStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <DecksStack.Screen name="Decks" component={MyDecksScreen} options={{
        headerLeft: () => (
          <Icon.Button 
          name="ios-menu" 
          size={25} 
          backgroundColor="#009387" 
          onPress={() => navigation.openDrawer()} />
        )
      }}/>
    </DecksStack.Navigator>
  )
};
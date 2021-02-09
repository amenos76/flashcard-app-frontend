import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu';

// import Icon from 'react-native-vector-icons/Ionicons'
import { IconButton } from 'react-native-paper';

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
        activeColor="#fff"
        barStyle={{ backgroundColor: '#009387' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="My Decks"
          component={MyDecksStackScreen}
          options={{
            tabBarLabel: 'My Decks',
            tabBarColor: '#008075',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cards" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Create Deck"
          component={CreateDeckStackScreen}
          options={{
            tabBarLabel: 'Create Deck',
            tabBarColor: '#00665e',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="card-plus" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore Decks"
          component={ExploreDecksStackScreen}
          options={{
            tabBarLabel: 'Explore Decks',
            tabBarColor: '#004d46',
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
        headerTitleAlign: 'center',
        headerLeft: () => (
            <IconButton 
            icon="menu"
            color="#fff" 
            size={25} 
            backgroundColor="#009387" 
            onPress={() => navigation.openDrawer()} />
          )
        }} />
    </HomeStack.Navigator>
  )
};

const MyDecksStackScreen = ({navigation}) => {
  return (
    <DecksStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#008075'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <DecksStack.Screen name="My Decks" component={MyDecksScreen} options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
            <IconButton 
            icon="menu"
            color="#fff" 
            size={25} 
            backgroundColor="#009387" 
            onPress={() => navigation.openDrawer()} />
          )
        }} />
    </DecksStack.Navigator>
  )
};

const CreateDeckStackScreen = ({navigation}) => {
  return (
    <DecksStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#00665e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <DecksStack.Screen name="Create Deck" component={CreateDeckScreen} options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
            <IconButton 
            icon="menu"
            color="#fff" 
            size={25} 
            backgroundColor="#009387" 
            onPress={() => navigation.openDrawer()} />
          )
        }} />
    </DecksStack.Navigator>
  )
};

const ExploreDecksStackScreen = ({navigation}) => {
  return (
    <DecksStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#004d46'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <DecksStack.Screen name="Explore Decks" component={ExploreDecksScreen} options={{
        headerTitleAlign: 'center',
        headerLeft: () => (
            <IconButton 
            icon="menu"
            color="#fff" 
            size={25} 
            backgroundColor="#009387" 
            onPress={() => navigation.openDrawer()} />
          )
        }} />
    </DecksStack.Navigator>
  )
};
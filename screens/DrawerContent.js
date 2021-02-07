import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper'
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




export default function DrawerContent(props) {

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <View style={{flex:1}} >
      <DrawerContentScrollView {...props} >
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection} >
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
              source={{
                uri: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/67093622_10156080534566353_854599265274560512_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=Ym4lZyaD_4kAX9GK87M&_nc_ht=scontent.fapa1-2.fna&oh=4b8f5918d5857ed276eaa100583b7962&oe=60454273'
              }}
              size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Augie Menos</Title>
                <Caption style={StyleSheet.caption}>@amenos76</Caption>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem 
              icon={({color, size}) => (
                <Icon
                name="home-outline"
                color={color}
                size={size}
                />
              )} 
              label="Home"
              onPress={() => {props.navigation.navigate('Home')}}
            />    
            <DrawerItem 
              icon={({color, size}) => (
                <MaterialCommunityIcons name="cards" color={color} size={size} />
              )} 
              label="My Decks"
              onPress={() => {props.navigation.navigate('My Decks')}}
            />    
            <DrawerItem 
              icon={({color, size}) => (
                <MaterialCommunityIcons name="card-plus" color={color} size={size} />
              )} 
              label="Create Deck"
              onPress={() => {props.navigation.navigate('Create Deck')}}
            />    
            <DrawerItem 
              icon={({color, size}) => (
                <MaterialCommunityIcons name="card-search" color={color} size={size} />
              )} 
              label="Explore Decks"
              onPress={() => {props.navigation.navigate('Explore Decks')}}
            />    
            <DrawerItem 
              icon={({color, size}) => (
                <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
              )} 
              label="Settings"
              onPress={() => {props.navigation.navigate('SettingsScreen')}}
            />    
          </Drawer.Section>
          <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => {toggleTheme()}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme}/>
              </View>
            </View>
          </TouchableRipple>

          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection} >
        <DrawerItem
          icon={({color, size}) => (
            <Icon 
            name="exit-to-app"
            color={color}
            size={size}
            />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
          
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  }
});
import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { AppContext } from '../provider/AppProvider'

import DeckList from '../components/DeckList'


export default function MyDecksScreen(props) {
  
  const state = useContext(AppContext)
  
  // const handlePress = (event) => {
  //   props.navigation.navigate("Home")
  // }

  return (
    <View style={styles.container}>
      {/* <Text>This is my Decks page.</Text> */}
      
      <DeckList decks={state.userDecks}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
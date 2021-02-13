import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import DeckList from '../components/DeckList'

import { DataLayerContext } from '../context/DataLayerContext'


const handlePress = (event) => {
  props.navigation.navigate("Home")
}

export default function MyDecksScreen(props) {

  const { state } = useContext(DataLayerContext)

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
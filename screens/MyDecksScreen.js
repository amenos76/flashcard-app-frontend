import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { AppContext } from '../provider/AppProvider'

import DeckList from '../components/DeckList'


export default function MyDecksScreen(props) {
  
  const state = useContext(AppContext)
  
  return (
    <View style={styles.container}>
      <DeckList decks={state.user.decks}/>
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
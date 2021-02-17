import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import DeckList from '../components/DeckList'
import SearchForm from '../components/SearchForm'
import { AppContext } from '../provider/AppProvider'




export default function ExploreCardsScreen(props) {

  const state = useContext(AppContext)
  
  return (
    <View style={styles.container}>
      <SearchForm></SearchForm>
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
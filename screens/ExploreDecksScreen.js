import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import DeckList from '../components/DeckList'





export default function ExploreDecksScreen(props) {

  const state = useContext(AppContext)
  
  const handlePress = (event) => {
    alert('Button clicked!')
  }


  return (
    <View style={styles.container}>
      <Text>Explore Decks Screen</Text>
      {/* <DeckList /> */}
      <Button title="Click here" onPress={handlePress} ></Button>
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
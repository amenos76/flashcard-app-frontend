import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const handlePress = (event) => {
  alert('Button clicked!')
}

export default function ExploreDecksScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Explore Decks Screen</Text>
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
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const handlePress = (event) => {
  props.navigation.navigate("Home")
}

export default function MyDecksScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is my Decks page.</Text>
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
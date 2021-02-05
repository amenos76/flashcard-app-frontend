import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


export default function HomeScreen(props) {
  
  const handlePress = (event) => {
    props.navigation.navigate("Decks")
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={handlePress} title="Go to Decks"></Button>
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
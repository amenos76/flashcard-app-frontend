import React, { useContext } from 'react'
import { View, Text, Button, StyleSheet, Alert } from 'react-native'

import { AppContext } from '../provider/AppProvider'

export default function HomeScreen(props) {
  const state = useContext(AppContext)
  
  const handlePress = () => {
    // props.navigation.navigate("My Decks")
    // state.setUser("Yall")
    Alert("clicked!")
  }


  return (
    <View style={styles.container}>
      <Text>Hullo</Text>
      <Button 
      onPress={handlePress} 
      title="Go to Decks">
      </Button>
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
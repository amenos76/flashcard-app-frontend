import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { AppContext } from '../provider/AppProvider'

export default function HomeScreen(props) {
  
  const handlePress = () => {
    props.navigation.navigate("My Decks")
  }

  return (
    <AppContext.Consumer>
      {state => 
      <View style={styles.container}>
        <Text>{state.user}</Text>
        <Button 
        onPress={() =>  state.setUser("BOB")} 
        title="Go to Decks">
        </Button>
      </View>
      }
    </AppContext.Consumer>
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
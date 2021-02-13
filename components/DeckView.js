import React from 'react'

import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../utilities/colors';

export default function DeckView( {deck} ) {

  const handlePress = (event) => {
    event.stopPropagation()
    alert("delete that deck")
  }

  const showDeck = (deck) => {
    alert(deck.name)
  }

  return (
    <TouchableOpacity onPress={() => showDeck(deck)}>
      <View style={styles.cardContainer}>
        <Text style={styles.titleText}>{deck.name}</Text>
        <Text style={styles.text}>{deck.cards.length} cards</Text>
        <View style={styles.buttonContainer}>
          {/* <Button title="view deck" color='#84A7DF'></Button> */}
          <Button title="remove from my decks" onPress={handlePress} color='#4E73A8'></Button>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    // flex: .2,
    backgroundColor: '#344B48',
    width: 200,
    height: 215,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    padding: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 28
  },
  text: {
    color: 'white',
    fontSize: 22
  },
  buttonContainer: {
    paddingTop: 40,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  }

});
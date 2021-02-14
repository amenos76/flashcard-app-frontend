import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

export default function FlashCard( { flashcard } ) {

  const handlePress = (event) => {
    event.stopPropagation()
    alert("yoooooooo")
  }

  const showFlashcard = (flashcard) => {
    alert(flashcard.category)
  }
  return (
    // <TouchableOpacity onPress={() => showFlashcard(flashcard)}>
      <View style={styles.cardContainer}>
        <Text style={styles.titleText}>{flashcard.question}</Text>
        <Text style={styles.text}>{flashcard.correct_answer}</Text>
        <View style={styles.buttonContainer}>
          {/* <Button title="view deck" color='#84A7DF'></Button> */}
          <Button title="add to deck" onPress={handlePress} color='#4E73A8'></Button>
        </View>
      </View>
    // </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    // flex: .2,
    backgroundColor: '#344B48',
    width: 400,
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
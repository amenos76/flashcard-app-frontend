import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

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
        <Text style={styles.questionText}>{flashcard.question}</Text>
        <Text style={styles.answerText}>{flashcard.answer}</Text>
        {/* <Text style={styles.answerText}>{flashcard.correct_answer}</Text> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePress}>
          <LinearGradient
            colors={['#505050', '#383838']}
            style={styles.addButton}
          >
            <Text style={styles.textAdd}>Add To Deck</Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
      </View>
    // </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    // flex: .2,
    display: 'flex',
    backgroundColor: '#fff',
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
    elevation: 10,
  },
  questionText: {
    color: 'black',
    fontSize: 18,
    paddingLeft: 5,
    textAlign: 'center',
  },
  answerText: {
    color: 'black',
    fontSize: 22,
    marginTop: 15,
    fontWeight: "bold",
  },
  buttonContainer: {
    paddingTop: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  addButton: {
    width: 150,
    height: 40,
    // paddingTop: 14,
    // paddingBottom: 14,
    // alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textAdd: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }

});
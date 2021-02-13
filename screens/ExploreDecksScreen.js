import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import DeckList from '../components/DeckList'

import { decodeHTMLEntities } from '../utilities/decodeHTML'

const baseUrl = 'https://opentdb.com/api.php?amount=10'

const handlePress = (event) => {
  alert('Button clicked!')
}

export default function ExploreDecksScreen(props) {

  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => handleFetch(data.results))
      .catch(error => {
        console.log("Error:", error)
      })
  }, [])

  const handleFetch = (questionArray) => {
    questionArray.forEach(formatData)
    console.log(newArray)
  }

  let newArray = [];

  const formatData = (questionItem, index) => {
      let newCardObject = {
        id: `${index}-${Date.now()}`,
        question: decodeHTMLEntities(questionItem.question),
        answer: decodeHTMLEntities(questionItem.correct_answer),
      }
      newArray.push(newCardObject)
  }

  

  // const decodeString = (str) => {
  //   const textArea = document.createElement('textarea')
  //   textArea.innerHTML = str
  //   return textArea.value
  // }
  

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
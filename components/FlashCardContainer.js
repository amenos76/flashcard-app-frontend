import React from 'react'

import { View, Text, StyleSheet, Button } from 'react-native'

import { useDataLayerValue } from '../provider/DataLayer';
import FlashCard from './FlashCard';

const SAMPLE_DECKS = {
  decks: [
      {
      id: 100,
      name: "Math",
      cards: [
        {
          id: 1,
          question: 'What is 2 + 2?',
          answer: '4',
        },
        {
          id: 2,
          question: 'What is 1 + 2?',
          answer: '3',
        },
        {
          id: 3,
          question: 'What is 10 + 10?',
          answer: '20',
        },
      ]
    },
    {
      id: 10000,
      name: "Programming",
      cards: [
        {
          id: 1,
          question: 'What is a function?',
          answer: 'A function is funky, baby!',
        },
        {
          id: 2,
          question: 'What is an array',
          answer: 'Brackets, son.',
        },
        {
          id: 3,
          question: 'What is an object?',
          answer: 'Yo mama is an object!',
        },
      ]
    }
  ]
}


export default function FlashCardContainer() {

  // const [{ user }] = useDataLayerValue();

  return (
    <View>
      {SAMPLE_DECKS.decks.map(deck => {
        return <FlashCard deck={deck} key={deck.id} />
      })}
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
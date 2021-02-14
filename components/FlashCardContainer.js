import React from 'react'

import { View, Text, StyleSheet, Button } from 'react-native'


import FlashCard from './FlashCard';

export default function FlashCardContainer() {

  
  return (
    <View>
      {state.decks.map(deck => {
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
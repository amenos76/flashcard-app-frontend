import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function FlashCard( { deck }) {
  return (
    <View>
      <Text>{deck.name}</Text>
    </View>
  )
}

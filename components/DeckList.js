import React from 'react'
import { Dimensions } from 'react-native';

import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { getData } from '../utilities/api'
import DeckView from './DeckView'
import { colors } from '../utilities/colors'

export default function DeckList() {
  const sampleDecks = getData()

  return (
    <ScrollView style={{width: '100%'}}>
      <View style={styles.container}>
        <View > 
          {sampleDecks.decks.map(deck => {
            return <DeckView deck={deck} key={deck.id} />
          })}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: colors.background,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    // padding: 10
  },
  deckContainer: {
    // marginVertical: 10,
    // marginHorizontal: 20
  }
});
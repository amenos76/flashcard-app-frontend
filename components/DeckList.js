import React, { useContext } from 'react'

import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { getData } from '../utilities/api'
import DeckView from './DeckView'
import { colors } from '../utilities/colors'
import { DataLayerContext } from '../context/DataLayerContext'

export default function DeckList() {
  const sampleDecks = getData()

  const {state} = useContext(DataLayerContext)
  
  // const [ {deck}, dispatch ] = useDataLayerValue();

  return (
    <ScrollView style={{width: '100%'}}>
      <View style={styles.container}>
      <Text>{state.user}</Text>
        <View > 
          {state.decks.map(deck => {
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
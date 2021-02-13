import React, { useContext } from 'react'

import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView} from 'react-native'

import DeckView from './DeckView'
import { colors } from '../utilities/colors'



export default function DeckList( {decks}) {
  
  const renderItem = (decks, index) => {
    return <View>
      <Text>{decks.deck.name}</Text>
    </View>
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={decks}
        renderItem={({ item }) => (
          <DeckView deck={item}/>
        )}
      />
    </View>
  )
}
{/* <ScrollView style={{width: '100%'}}>
  <View style={styles.container}>
    <View > 
      {decks.map(deck => {
        return <DeckView deck={deck} key={deck.id} />
      })}
    </View>
  </View>
</ScrollView> */}

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
  flatList: {
    flexGrow: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  }
});
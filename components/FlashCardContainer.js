import React, {useContext} from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AppContext } from '../provider/AppProvider'
import FlashCard from './FlashCard';

export default function FlashCardContainer() {
  const state = useContext(AppContext)
  
  return (
    <View style={styles.container}>
    {state.searchSubmitted ? (
      <FlatList
        contentContainerStyle={styles.flatList}
        numColumns={1}
        keyExtractor={(item) => item.id} 
        data={state.searchResults}
        renderItem={({ item }) => (
          <FlashCard flashcard={item}/>
        )}
      />
    ) : (
      <Text>Search was not submitted</Text>
    )}
      {/* {state.searchResults.map(card => {
        return <FlashCard card={card} key={card.id} />
      })} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flexGrow: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 10
  }
});
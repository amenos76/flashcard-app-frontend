import React, {useContext} from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AppContext } from '../provider/AppProvider'
import DeckCardView from './DeckCardView';
import { HOST_WITH_PORT } from '../environment';

export default function DeckCardViewContainer() {
  const state = useContext(AppContext)


  // useEffect(() => {
  //   fetch(`${HOST_WITH_PORT}/decks/${state.viewSelectedDeck.id}`)
  //     .then(response => response.json())
  // }, [state.viewSelectedDeck])
  
  return (
    <View style={styles.container}>
    
      <FlatList
        contentContainerStyle={styles.flatList}
        numColumns={1}
        keyExtractor={(item) => item.id}
        // gotta change below to deck data, store in state in another place than just user?
        data={state.viewSelectedDeck.cards}
        renderItem={({ item }) => (
          <DeckCardView card={item}/>
        )}
      />
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flexGrow: 1, 
    // justifyContent: 'flex-start', 
    // alignItems: 'center',
    // paddingTop: 10
  }
});
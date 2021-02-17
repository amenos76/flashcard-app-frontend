import React, {useContext} from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../provider/AppProvider'

export default function DeckView( {deck} ) {

  const state = useContext(AppContext)

  const viewDeck = () => {
    state.setShowDeck(true)
  }


  return (
      <LinearGradient 
        style={styles.cardContainer}
        colors={['#696969', '#383838']}
      >
        <Text style={styles.titleText}>{deck.deck_name}</Text>
        <Text style={styles.text}>{deck.cards.length} cards</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={viewDeck}>
          <LinearGradient
            colors={['#08d4c4', '#008075']}
            style={styles.viewButton}
          >
            <Text style={styles.textView}>View Deck</Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>

      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 215,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
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
  card: {
    padding: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 28
  },
  text: {
    color: 'white',
    fontSize: 22
  },
  buttonContainer: {
    paddingTop: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  viewButton: {
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
  textView: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }

});

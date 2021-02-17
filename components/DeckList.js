import React, { useContext } from 'react'

import { View, Text, StyleSheet, Modal, FlatList, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'

import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../provider/AppProvider'

import DeckCardView from './DeckCardView'
import DeckView from './DeckView'

export default function DeckList( {decks} ) {

  const state = useContext(AppContext)

  const closeModal = () => {
    state.setShowDeck(false)
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
      <Modal
        transparent={true}
        visible={state.showDeck}
      >
        <View style={{backgroundColor: "#000000aa", flex: 1}}>
          <View style={styles.modal}>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={closeModal}>
              <LinearGradient
                colors={['#505050', '#383838']}
                style={styles.backButton}
              >
                <Text style={styles.textBack}>Go Back</Text>
              </LinearGradient>
              </TouchableOpacity>
            </View>

            <Animatable.View 
              style={styles.footer}
              animation="fadeInUpBig"
            >
              <DeckCardView />
            </Animatable.View>

          </View>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    // padding: 10
  },
  flatList: {
    flexGrow: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  modal: {
    backgroundColor: '#fff', 
    marginTop: 40, 
    marginBottom: 40, 
    marginHorizontal: 18, 
    paddingTop: 20, 
    borderRadius: 10, 
    flex: 1
  },
  backButton: {
    width: 75,
    height: 30,
    // paddingTop: 14,
    // paddingBottom: 14,
    // alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  buttonContainer: {
    paddingBottom: 15,
    paddingLeft: 5
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  textBack: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  footer: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    borderRadius: 10
    // paddingVertical: 25,
    // paddingHorizontal: 30
},
});
import React, { useEffect, useContext, useState } from 'react'
import { View, StyleSheet, Text, Modal, TouchableOpacity, Alert } from 'react-native'
import { ListPicker } from 'react-native-ultimate-modal-picker';
import { Picker } from '@react-native-community/picker'
import { decodeHTMLEntities } from '../utilities/decodeHTML';

import { AppContext } from '../provider/AppProvider'
import FlashCardContainer from './FlashCardContainer';

import * as Animateable from 'react-native-animatable'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient';
import { HOST_WITH_PORT } from '../environment';

export default function FormFilter() {

  const state = useContext(AppContext)
  // const [selectedCard, setSelectedCard] = useState(false);
  
  useEffect(() => {
    handleUserDecks(state.user.decks)
  }, [state.user.decks])

  const handleUserDecks = (decks) => {
    decks.forEach(formatDecks)
    state.setUserDeckNames(formattedDeckNames)
  }

  let formattedDeckNames = []

  const formatDecks = (deck) => {
    let container = {
      label: deck.deck_name,
      value: deck.id
    }
    formattedDeckNames.push(container)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => handleFetch(data.trivia_categories))
  }, [])

  const handleFetch = (categoryArray) => {
    // console.log(categoryArray)
    categoryArray.forEach(formatCategories)
    state.setCategories(formattedCategories)
  }

  let formattedCategories = []
  
  const formatCategories = (category) => {
    let container = {
      label: category.name,
      value: category.id
    }
    // console.log(container)
    formattedCategories.push(container)
  }

  const items = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
    { label: '24', value: '24' },
    { label: '25', value: '25' },
    { label: '26', value: '26' },
    { label: '27', value: '27' },
    { label: '28', value: '28' },
    { label: '29', value: '29' },
    { label: '30', value: '30' },
    { label: '31', value: '31' },
    { label: '32', value: '32' },
    { label: '33', value: '33' },
    { label: '34', value: '34' },
    { label: '35', value: '35' },
    { label: '36', value: '36' },
    { label: '37', value: '37' },
    { label: '38', value: '38' },
    { label: '39', value: '39' },
    { label: '40', value: '40' },
  ];

  const handleSubmit = () => {
    fetch(`https://opentdb.com/api.php?amount=${state.searchAmount}&category=${state.searchCategory}`)
      .then(response => response.json())
      .then(data => handleSearchFetch(data.results))
      .catch(error => {
        console.log("Error:", error)
      })
  }

  const handleSearchFetch = (resultsArray) => {
    resultsArray.forEach(formatSearchData)
    state.setSearchResults(newArray)
    state.setSearchSubmitted(true)
    // console.log(newArray)
  }

  let newArray = [];

  const formatSearchData = (result, index) => {
      let newCardObject = {
        id: `${index}-${Date.now()}`,
        category: result.category,
        question: decodeHTMLEntities(result.question),
        answer: decodeHTMLEntities(result.correct_answer),
      }
      newArray.push(newCardObject)
  }

const closeModal = () => {
  state.setShow(false)
}

const addCard = () => {
  fetch(`${HOST_WITH_PORT}/cards`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question: state.selectedCard.question,
      answer: state.selectedCard.answer,
      deck_id: state.selectedDeck.id
    })
  })
  Alert.alert(`Card added to ${state.selectedDeck.deck_name}.`)
  state.setShow(false)
}

const pickerItems = state.userDeckNames.map((deck, i) => (
  <Picker.Item key={i} value={deck.label} label={deck.label} id={deck.id} />
  ))

  return (
    <View style={styles.container}>
      <Animateable.View 
        style={styles.header}
        animation="fadeInDown"
      >
        <ListPicker
          title="Category"
          items={state.categories}
          onChange={(item) => state.setSearchCategory(item)}
        />
        <ListPicker
          title="Number of Cards"
          items={items}
          onChange={(item) => state.setSearchAmount(item)}
        />
      </Animateable.View>
      {/* <View style={styles.button}>
        <Button
          title="Generate" 
          onPress={handleSubmit}
        />
      </View> */}

      <Animateable.View 
          style={styles.button}
          animation="fadeIn"
        >
        <TouchableOpacity onPress={() => handleSubmit()}>
          <LinearGradient
            colors={['#F8F8F8', '#D3D3D3']}
            style={styles.searchButton}
          >
            <Text style={styles.textSearch}>Generate</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animateable.View>

      {state.searchResults ? 
      <Animateable.View 
        style={styles.footer}
        animation="fadeInUpBig"
      >
        <FlashCardContainer></FlashCardContainer>
      </Animateable.View>
      : null }

      <Modal
        transparent={true}
        visible={state.show}
      >
        <View style={{backgroundColor: "#000000aa", flex: 1}}>
          <View style={styles.modal}>
            <Text style={{fontSize: 35}}>Choose Deck</Text>

            <View >
              <Picker
                style={{width: '100%'}}
                selectedValue={state.selectedDeck.deck_name}
                onValueChange={(itemValue, itemIndex) => {state.setSelectedDeck({deck_name: itemValue, id: (itemIndex + 1)})}}
              >
              {pickerItems}
                
              </Picker>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={addCard}>
              <LinearGradient
                colors={['#505050', '#383838']}
                style={styles.addButton}
              >
                <Text style={styles.textAdd}>Add Card</Text>
              </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={closeModal}>
              <LinearGradient
                colors={['#505050', '#383838']}
                style={styles.addButton}
              >
                <Text style={styles.textAdd}>Cancel</Text>
              </LinearGradient>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  // listContainer: {
  //   width: '100%',
  //   position: 'absolute',
  //   top: 0
  // },
  button: {
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'center'
  },
  container: {
    flex: 1, 
    backgroundColor: '#004d46'
  },
  header: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingTop: 10,
      paddingHorizontal: 10
  },
  searchButton: {
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
  textSearch: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    paddingTop: 15,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  addButton: {
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
  textAdd: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  modal: {
    backgroundColor: '#ffffff', 
    margin: 50, 
    padding: 40, 
    borderRadius: 10, 
    flex: .3
  },
});
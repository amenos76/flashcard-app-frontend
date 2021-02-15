import React, { useEffect, useContext } from 'react'
import { View, Button, StyleSheet, TextInput, Text, SafeAreaView, } from 'react-native'
import { ListPicker } from 'react-native-ultimate-modal-picker';
import { decodeHTMLEntities } from '../utilities/decodeHTML';

import { AppContext } from '../provider/AppProvider'
import FlashCardContainer from './FlashCardContainer';

const baseUrl = 'https://opentdb.com/api.php?amount=10'

export default function FormFilter() {

  const state = useContext(AppContext)


  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then(response => response.json())
      .then(data => handleFetch(data.trivia_categories))
  }, [])

  const handleFetch = (categoryArray) => {
    categoryArray.forEach(formatCategories)
    state.setCategories(formatedCategories)
  }

  let formatedCategories = []

  const formatCategories = (category) => {
    let container = {
      label: category.name,
      value: category.id
    }
    formatedCategories.push(container)
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
    console.log(newArray)
    
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


  return (
    <SafeAreaView style={styles.listContainer}>
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
      <View style={styles.button}>
        <Button
          title="Generate" 
          onPress={handleSubmit}
        />
      </View>
      <FlashCardContainer></FlashCardContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    paddingTop: 14,
    position: 'absolute',
    top: 0
  },
  button: {
    alignItems: 'center'
  }
});
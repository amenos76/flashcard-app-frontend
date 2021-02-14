import React, { useState, useEffect } from 'react'

import { decodeHTMLEntities } from '../utilities/decodeHTML'
import { getData } from '../utilities/api'

const SAMPLE_DECKS = getData()
const baseUrl = 'https://opentdb.com/api.php?amount=10'

const AppContext = React.createContext();


const AppProvider = (props) => {

  const [user, setUser] = useState("AUGIE")
  const [loading, setLoading] = useState(false)
  const [exploreDecks, setExploreDecks] = useState([])
  const [userDecks, setUserDecks] = useState(SAMPLE_DECKS)
  const [categories, setCategories] = useState([])

  
  
  
  useEffect(() => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => handleFetch(data.results))
    .catch(error => {
      console.log("Error:", error)
    })
  }, [])
  
  const handleFetch = (questionArray) => {
    questionArray.forEach(formatData)
    console.log(newArray)
    setExploreDecks(newArray)
  }

  let newArray = [];

  const formatData = (questionItem, index) => {
      let newCardObject = {
        id: `${index}-${Date.now()}`,
        category: questionItem.category,
        question: decodeHTMLEntities(questionItem.question),
        answer: decodeHTMLEntities(questionItem.correct_answer),
      }
      newArray.push(newCardObject)
  }

    return (
      <AppContext.Provider
        value={{
          user,
          loading,
          exploreDecks,
          userDecks,
          categories,
          setUser,
          setLoading,
          setExploreDecks,
          setUserDecks,
          setCategories
        }}
      >
        {props.children}
      </AppContext.Provider>
    )
  
}

export { AppProvider, AppContext };
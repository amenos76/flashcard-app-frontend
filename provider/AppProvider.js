import React, { useState, useEffect } from 'react'

import { decodeHTMLEntities } from '../utilities/decodeHTML'
import { HOST_WITH_PORT } from '../environment';

const baseUrl = 'https://opentdb.com/api.php?amount=10'

const AppContext = React.createContext();

const AppProvider = (props) => {

  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({
    email: null,
    password: null, 
    confirm_password: null,
    isValidPassword: true,
    check_textInputChange: false, 
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    createDeckName: null,
    createDeckId: null,
    deckCreatedSuccesfully: false,
    createdCardsNumber: 0,
    createCardQuestion: null,
    createCardAnswer: null,
    cardCreatedSuccessfully: false,
    userID: null,
  });
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [exploreDecks, setExploreDecks] = useState([]);
  const [userDecks, setUserDecks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [searchAmount, setSearchAmount] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState({
    deck_name: 'select a deck',
    id: null,
  });
  const [userDeckNames, setUserDeckNames] = useState([]);
  const [selectedCard, setSelectedCard] = useState({
    question: '',
    answer: '',
  })
  const [showDeck, setShowDeck] = useState(false);
  const [viewSelectedDeck, setViewSelectedDeck] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswerId, setShowAnswerId] = useState(null);
  
  
  
  useEffect(() => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => handleFetch(data.results))
    .catch(error => {
      console.log("Error:", error)
    })
    // fetch(`${HOST_WITH_PORT}/decks`)
    //   .then(response => response.json())
    //   .then(userDecks => setUserDecks(userDecks))
  }, [])
  
  const handleFetch = (questionArray) => {
    questionArray.forEach(formatData)
    // console.log(newArray)
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
          userData,
          userToken,
          isLoading,
          exploreDecks,
          userDecks,
          categories,
          searchAmount,
          searchCategory,
          searchResults,
          searchSubmitted,
          show,
          selectedDeck,
          userDeckNames,
          selectedCard,
          showDeck,
          viewSelectedDeck,
          showAnswer,
          showAnswerId,
          setUser,
          setUserData,
          setUserToken,
          setIsLoading,
          setExploreDecks,
          setUserDecks,
          setCategories,
          setSearchAmount,
          setSearchCategory,
          setSearchResults,
          setSearchSubmitted,
          setShow,
          setSelectedDeck,
          setUserDeckNames,
          setSelectedCard,
          setShowDeck,
          setViewSelectedDeck,
          setShowAnswer,
          setShowAnswerId,
        }}
      >
        {props.children}
      </AppContext.Provider>
    )
  
}

export { AppProvider, AppContext };

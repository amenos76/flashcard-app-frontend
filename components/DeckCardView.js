import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { AppContext } from '../provider/AppProvider'

export default function DeckCardView ( { card } ) {

  const state = useContext(AppContext)

  const showAnswer = (event) => {
    event.stopPropagation()
    console.log( card )
    state.setShowAnswer(true)
  }

  const hideAnswer = (event) => {
    event.stopPropagation()
    // console.log( card )
    state.setShowAnswer(false)
  }

  const editCard = (event) => {
    event.stopPropagation()
    // console.log( card )
    state.setShowAnswer(false)
  }

  const deleteCard = (event) => {
    event.stopPropagation()
    // console.log( card )
    state.setShowAnswer(false)
  }

  return (
      <View style={styles.cardContainer}>

        <View style={{width: '100%', height: '100%', alignItems: 'center', paddingTop: 30}}>
        {/* <View style={{justifyContent: 'center', height: '100%'}}> */}

          <Text style={styles.questionText}>{card.question}</Text>
          {state.showAnswer ? 
          <Text style={styles.answerText}>{card.answer}</Text>
          : null}
        {/* </View> */}
        </View>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', width: '100%', position: 'absolute', bottom: 5}}>
          <View style={{flexDirection: 'column'}}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={showAnswer}>
              <LinearGradient
                colors={['#505050', '#383838']}
                style={styles.buttonGradient}
              >
                <Text style={styles.textButton}>Show Answers</Text>
              </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={hideAnswer}>
              <LinearGradient
                colors={['#505050', '#383838']}
                style={styles.buttonGradient}
              >
                <Text style={styles.textButton}>Hide Answers</Text>
              </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'column'}}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={editCard}>
              <LinearGradient
                colors={['#505050', '#383838']}
                style={styles.buttonGradient}
              >
                <Text style={styles.textButton}>Edit Card</Text>
              </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={deleteCard}>
              <LinearGradient
                colors={['#b30000', '#383838']}
                style={styles.buttonGradient}
              >
                <Text style={styles.textButton}>Delete Card</Text>
              </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    width: 400,
    height: 215,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 4,
  },
  questionText: {
    color: 'black',
    fontSize: 22,
    paddingLeft: 5,
    textAlign: 'center',
  },
  answerText: {
    color: '#05375a',
    fontSize: 22,
    marginTop: 15,
    fontWeight: "bold",
    // display: 'none'
  },
  buttonContainer: {
    paddingTop: 5,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  buttonGradient: {
    width: 100,
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
  textButton: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }

});
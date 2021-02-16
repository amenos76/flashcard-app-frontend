import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animateable from 'react-native-animatable'

import { AppContext } from '../provider/AppProvider'
import { HOST_WITH_PORT } from '../environment';

export default function CreateCard() {

  const state = useContext(AppContext)

  const textQuestionInputChange = (value) => {
    state.setUserData({
      ...state.userData,
      createCardQuestion: value
    });
  }

  const textAnswerInputChange = (value) => {
    state.setUserData({
      ...state.userData,
      createCardAnswer: value
    });
  }

  const submitCard = () => {

      fetch(`${HOST_WITH_PORT}/cards`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: state.userData.createCardQuestion,
          answer: state.userData.createCardAnswer,
          deck_id: state.userData.createDeckId
        })
      }).then(response => {
        if (!response.ok) {
          return console.log("error", response)
          // return Alert.alert('Unable to create card!', 'blah', [
          //   {text: 'Okay'}
          // ])
        }
        return response.json()
      })
      .then(response => console.log(response))
      state.setUserData({
        ...state.userData,
        cardCreatedSuccessfully: true
      })
    
  }

  return (
    <Animateable.View 
        style={styles.footer}
        animation="fadeInUpBig"
        duration={500}
      >
        <Text style={styles.title}>Now create some cards!</Text>
        {/* <Text style={styles.text}>Question and Answer</Text>
        <Animateable.View
          animation="pulse"
        >
          <FontAwesome
              name="chevron-down"
              color="#05275a"
              size={20}
            />
        </Animateable.View> */}

        <TextInput
            style={styles.textInput}
            placeholder="Question"
            value={state.userData.newCardQuestion}
            // autoCapitalize="none"
            onChangeText={(value) => textQuestionInputChange(value)}
          />

        <TextInput
            style={styles.textInput}
            placeholder="Answer"
            value={state.userData.newCardAnswer}
            // autoCapitalize="none"
            onChangeText={(value) => textAnswerInputChange(value)}
          />

        { state.userData.createCardAnswer && state.userData.createCardQuestion !== null ? 
          <Animateable.View 
          style={styles.button}
          animation="fadeInUpBig"
        >
          <TouchableOpacity onPress={() => submitCard()}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Add Card</Text>
              <MaterialIcons
                name="navigate-next"
                color="#fff"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </Animateable.View>
        : null }
      </Animateable.View>
  )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 36,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      fontSize: 20,
      marginTop:5
  },
  textInput: {
    flex: 1,
    fontSize: 26,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
},
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
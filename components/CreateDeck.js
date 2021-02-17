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
import { AuthContext } from '../context/AuthContext'
import { HOST_WITH_PORT } from '../environment';

export default function CreateDeck() {

  const state = useContext(AppContext)
  const authState = useContext(AuthContext)

  const textInputChange = (value) => {
    state.setUserData({
      ...state.userData,
      createDeckName: value
    });
  }

  const submitDeckName = () => {

    if (state.userData.createDeckName.length < 3) {
      Alert.alert('Unable to create deck!', "Deck name must be 3 characters or longer.", [
        {text: 'Okay'}
      ])
    } else {
      fetch(`${HOST_WITH_PORT}/decks`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          deck: {
            deck_name: state.userData.createDeckName,
            user_id: state.user.id
          }
        })
      }).then(response => {
        if (!response.ok) {
          // return Alert.alert('Unable to create deck!', "Deck name may already exist.", [
          //   {text: 'Okay'}
          // ])
          let deckObj = {
            deck: {
              deck_name: state.userData.createDeckName,
              user_id: authState.userId
            }
          }
          console.log("deck object here", deckObj)
          console.log("error", response)
        }
        return response.json()
      })
      .then(response => 
        state.setUserData({
          ...state.userData,
          deckCreatedSuccessfully: true,
          createDeckId: response.id
        })
      )
    }
  }

  return (
    <Animateable.View 
        style={styles.footer}
        animation="fadeInUpBig"
        duration={500}
      >
        <Text style={styles.title}>Create a flashcard deck!</Text>
        {/* <Text style={styles.text}>Start by naming your deck below </Text> */}
        <Animateable.View
          animation="pulse"
        >
          {/* <FontAwesome
              name="chevron-down"
              color="#05275a"
              size={20}
            /> */}
        </Animateable.View>
        <TextInput
            style={styles.textInput}
            placeholder="Enter your deck name"
            value={state.userData.newDeckName}
            // autoCapitalize="none"
            onChangeText={(value) => textInputChange(value)}
          />
        
        { state.userData.createDeckName !== null ? 
        <Animateable.View 
          style={styles.button}
          animation="fadeInUpBig"
        >
          <TouchableOpacity onPress={() => submitDeckName()}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Create Deck</Text>
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
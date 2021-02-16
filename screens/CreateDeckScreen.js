import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animateable from 'react-native-animatable'

import { AppContext } from '../provider/AppProvider'
import { HOST_WITH_PORT } from '../environment';
import CreateDeck from '../components/CreateDeck';
import CreateCard from '../components/CreateCard';

export default function CreateDeckScreen(props) {
  
  const state = useContext(AppContext)

  // const textInputChange = (value) => {
  //   state.setUserData({
  //     ...state.userData,
  //     createDeckName: value
  //   });
  // }

  // const submitDeckName = () => {
  //   fetch(`${HOST_WITH_PORT}/decks`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       deck_name: state.userData.createDeckName
  //     })
  //   }).then(response => {
  //     if (!response.ok) {
  //       return Alert.alert('Unable to create deck!', "Deck name may already exist.", [
  //         {text: 'Okay'}
  //       ])
  //     }
  //     return response.json()
  //   })
  //   .then(response => console.log(response))
  //   state.setUserData({
  //     ...state.userData,
  //     deckCreatedSuccessfully: true
  //   })
  // }

  return (
<View style={styles.container}>
      <View style={styles.header}>
      {state.userData.deckCreatedSuccessfully ?
      <Animateable.View
        animation="fadeInDown"
      >
        <Text style={styles.title}>{state.userData.createDeckName} Deck</Text>
      </Animateable.View>
      : null }
      </View>
      { !state.userData.deckCreatedSuccessfully ?
        <CreateDeck />
      :
        <CreateCard />
      }
    </View>
  )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#00665e'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
//   footer: {
//       flex: 2,
//       backgroundColor: '#fff',
//       borderTopLeftRadius: 30,
//       borderTopRightRadius: 30,
//       paddingVertical: 50,
//       paddingHorizontal: 30
//   },
//   logo: {
//       width: height_logo,
//       height: height_logo
//   },
  title: {
      color: '#fff',
      fontSize: 36,
      fontWeight: 'bold'
  },
//   text: {
//       color: 'grey',
//       fontSize: 20,
//       marginTop:5
//   },
//   textInput: {
//     flex: 1,
//     fontSize: 26,
//     marginTop: Platform.OS === 'android' ? 0 : -12,
//     paddingLeft: 10,
//     color: '#05375a',
// },
//   button: {
//       alignItems: 'flex-end',
//       marginTop: 30
//   },
//   signIn: {
//       width: 150,
//       height: 40,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 50,
//       flexDirection: 'row'
//   },
//   textSign: {
//       color: 'white',
//       fontWeight: 'bold'
//   }
});
import React, { useContext } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { AppContext } from '../provider/AppProvider'

export default function HomeScreen(props) {
  const state = useContext(AppContext)
  
  const handlePress = () => {
    props.navigation.navigate("My Decks")
    // state.setUser("Yall")
    // Alert("clicked!")
  }


  return (
    <View style={styles.container}>

      <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            iterationCount='infinite'
            direction="alternate"
            easing="ease-in-out"
            // duration={5000}
            source={require('../assets/flashcard_logo.png')}
            style={styles.logo}
            resizeMode='stretch'
          />
        </View>
        <Animatable.Text 
          style={styles.title}
          animation="pulse" 
          iterationCount="infinite"
          direction="alternate"
        >
        Welcome!
        </Animatable.Text>
        {/* <Text style={styles.title}>Welcome!</Text> */}

    </View>
  )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#05375a',
    fontSize: 60,
    fontWeight: 'bold',
    flex: 1
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
logo: {
  width: height_logo,
  height: height_logo
},
});
import React, { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  Button,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animateable from 'react-native-animatable'

import { AppContext } from '../../provider/AppProvider'
import { AuthContext } from '../../context/AuthContext'

export default function SignUpScreen( {navigation} ) {
  
  const { signUp } = useContext(AuthContext)
  const state = useContext(AppContext)

  const textInputChange = (value) => {
    if (value.length !== 0) {
      state.setUserData({
        ...state.userData,
        email: value,
        check_textInputChange: true
      });
    } else {
      state.setUserData({
        ...state.userData,
        email: value,
        check_textInputChange: false
      });
    }
  }

  const handlePasswordChange = (value) => {
    state.setUserData({
      ...state.userData,
      password: value,
    });
  }

  const handleConfirmPasswordChange = (value) => {
    state.setUserData({
      ...state.userData,
      confirm_password: value,
    });
  }

  const updateSecureTextEntry = () => {
    state.setUserData({
      ...state.userData,
      secureTextEntry: !state.userData.secureTextEntry
    });
  }
  
  const updateConfirmSecureTextEntry = () => {
    state.setUserData({
      ...state.userData,
      confirm_secureTextEntry: !state.userData.confirm_secureTextEntry
    });
  }

  const handleSubmit = () => {
    signUp(state.userData.email, state.userData.password)
  }

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"></StatusBar>
      <View style={styles.header}>
        <Text style={styles.text_header}>Create your Account!</Text>
      </View>
      <Animateable.View
        animation='fadeInUpBig'
        style={styles.footer}
      >
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#05275a"
            size={20}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your Email"
            autoCapitalize="none"
            onChangeText={(value) => textInputChange(value)}
          />
          {state.userData.check_textInputChange ? 
          <Animateable.View 
            animation="bounceIn"
          >
            <Feather
              name="check-circle"
              color="green"
              size={20}
            />
          </Animateable.View>
          : null}
        </View>

      <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color="#05275a"
            size={20}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your Password"
            autoCapitalize="none"
            secureTextEntry={state.userData.secureTextEntry ? true : false}
            onChangeText={(value) => handlePasswordChange(value)}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {state.userData.secureTextEntry ? 
            <Feather
              name="eye-off"
              color="grey"
              size={20}
            />
            : 
            <Feather
              name="eye"
              color="grey"
              size={20}
            />
            }
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
          <View style={styles.action}>
            <Feather
              name="lock"
              color="#05275a"
              size={20}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Your Password"
              autoCapitalize="none"
              secureTextEntry={state.userData.confirm_secureTextEntry ? true : false}
              onChangeText={(value) => handleConfirmPasswordChange(value)}
            />
            <TouchableOpacity
              onPress={updateConfirmSecureTextEntry}
            >
              {state.userData.confirm_secureTextEntry ? 
              <Feather
                name="eye-off"
                color="grey"
                size={20}
              />
              : 
              <Feather
                name="eye"
                color="grey"
                size={20}
              />
              }
            </TouchableOpacity>
          </View>

        <View style={styles.button}>
            <TouchableOpacity
            style={styles.signIn}
            onPress={() => handleSubmit()}
            >
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.signIn, {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15
              }]}
            >
              <Text style={[styles.textSign, {
                color: '#009387'
              }]}>Sign In</Text>
            </TouchableOpacity>
        </View>

      </Animateable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'android' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});
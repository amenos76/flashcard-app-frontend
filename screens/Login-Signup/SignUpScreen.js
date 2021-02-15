import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
      <Button
        title="Click here"
        onPress={() => Alert("button clicked!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
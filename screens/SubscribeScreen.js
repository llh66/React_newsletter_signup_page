import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, Pressable } from 'react-native';
import { validateEmail } from '../utils/index';

const SubscribeScreen = () => {

  const [email, setEmail] = React.useState('')

  return (
  <View style = {styles.container}>
    <Image style = {styles.image}
      source={require('../assets/little-lemon-logo-grey.png')}
      resizeMode="cover"
      accessible={true}
      accessibilityLabel={'Little Lemon Logo Grey'}
    />
    <Text style = {styles.descriptionText}>
      Subscribe to our newsletter for our latest delicious recipes!
    </Text>
    <TextInput
      style={styles.emailInput}
      onChangeText={setEmail}
      value={email}
      placeholder="Type your email"
      keyboardType="email-address"
    />
    <Pressable 
    style = {validateEmail(email) ? styles.button : styles.inactiveButton}
      onPress={() => {
        if (validateEmail(email)){
          Alert.alert('', 'Thanks for subscribing,\n stay tuned! ', [ {text: 'OK'} ])
        }
      }}
      inactive = {!validateEmail(email)}
      >
      <Text style = {styles.buttonText}>Subscribe</Text>
    </Pressable>
  </View>
);
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24
  },
  descriptionText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 30
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginTop : 30
  },
  button: {
    padding: 12,
    backgroundColor: "#3e524b",
    borderRadius: 12,
    width: "100%",
    marginTop : 30
  },
  inactiveButton: {
    backgroundColor: "#cecece",
    padding: 12,
    borderRadius: 12,
    width: "100%",
    marginTop : 30
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
  emailInput: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    marginTop : 30
  }
});
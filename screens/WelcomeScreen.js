import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
  <View style = {styles.container}>
    <Image
    style = {styles.image}
      source={require('../assets/little-lemon-logo.png')}
      accessible={true}
      accessibilityLabel={'Little Lemon Logo'}
    />
    <Text style = {styles.sloganText}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable style = {styles.button}
      onPress={() => navigation.navigate('Subscribe')}>
      <Text style = {styles.buttonText}>Newsletter</Text>
    </Pressable>
  </View>
);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24
  },
  sloganText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 60
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop : 60
  },
  button: {
    padding: 12,
    backgroundColor: "#3e524b",
    borderRadius: 12,
    width: "100%",
    marginTop: 120
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  }
});
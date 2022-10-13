import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  const Submit = () =>{
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation='bounceIn'
          // duration='1500'
          source={require("../image/logo.jpg")}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
      animation="fadeInUp"
      style={styles.footer}>
        <Text style={styles.text1}>Stay Connect with everyone!</Text>
        <Text style={styles.text2}>Sign in with account</Text>
        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => Submit()}
          >
          <Text style={styles.buttontext}>Get Started</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  footer: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  text1: {
    width: 200,
    paddingTop: 10,
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
  },
  text2: {
    // width:200,
    paddingTop: 10,
    fontSize: 20,
    color: "black",
    fontWeight: "200,",
    // fontWeight:'bold',
  },
  buttonStyle: {
    // textAlign: "center",
    width: 150,
    marginVertical: 20,
    padding: 7,
    borderRadius: 20,
    backgroundColor: "black",
    position: "absolute",
    right: 20,
    bottom: 28,
  },
  buttontext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Splash;

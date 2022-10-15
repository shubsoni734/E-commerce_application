import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import React from "react";
import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Checkbox from "expo-checkbox";
import AppLoading from "expo-app-loading";
// import Register from "./Register";
import { ref, set, get, onValue } from "firebase/database";
import { db } from "./firbass_connect";

//app main contant
const Contact = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  console.log(email, password);
  // const register = () =>{
  //   navigation.navigate('register');
  // }
  const Submit = () => {
    // return Alert.alert(userName,password);

    // insert data into firebase

    // get(child(db, `user/${email}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    //fjxj djcnc
    try {
      if (!email.trim()) {
        Alert.alert("Every Field is required !");
      }
      if (!password.trim()) {
        Alert.alert("Every Field is required !");
      } else {
        const starCountRef = ref(db, "user/" + email);

        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();

          // const email1=data.em ail;
          if (password === data.password) {
            navigation.navigate("Home");
          } else {
            alert("Email and Password is wrong !");
          }
        });
      }
    } catch (error) {
      console.log(error);
      alert("enail is not register ");
    }

    // set(ref(db, "users/" + email), {
    //   Email: email,
    //   Password: password,
    // })
    //   .then(() => {
    //     alert("data is updated");
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });

    // if (email === "shubham" && password === "123") {
    //   Alert.alert("thanks you " + email);
    //   navigation.navigate("Home");
    // } else {
    //   Alert.alert("Email and Password is wrong !");
    // }
  };

  let [fontLoaded, error] = useFonts({
    bold: Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    regular: JosefinSans_400Regular,
    JosefinSans_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading onError={console.warn} />;
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>
        you can reach us Anytime via shubsoni734@gmail.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.lables}>Enter Your Name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          value={email}
          onChangeText={(actualData) => setEmail(actualData)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.lables}>Enter Your Password </Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(acturalpassword) => setPassword(acturalpassword)}
        />
      </View>
      <View style={styles.wrapper}>
        <Checkbox
          //   style={styles.checkbox}
          value={isChecked}
          onValueChange={() => setChecked(!isChecked)}
          color={isChecked ? "#000000" : undefined}
        />
        <Text style={styles.wrappertext}>
          I have read and agreed with the TC
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: isChecked ? "#E69B8B" : "gray" },
        ]}
        disabled={!isChecked}
        onPress={() => Submit()}
      >
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signu}>
        <Text style={styles.Signupt}>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={styles.Signup}>Sign up</Text>
        </TouchableOpacity>
        {/* <Text style={styles.Signup}
        onPress ={()=> register()}
        >SignUp</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "bold",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "regular",
  },
  inputContainer: {
    marginTop: 20,
  },
  lables: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 15,
    fontSize: 18,
    fontFamily: "regular",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 20,
  },
  wrappertext: {
    marginHorizontal: 10,
    color: "#7d7d7d",
  },
  buttonStyle: {
    // textAlign: "center",
    marginVertical: 20,
    padding: 7,
    borderRadius: 20,
    backgroundColor: "gray",
  },
  buttontext: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  signu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Signupt: {
    paddingLeft: 50,
    color: "#63636b",
    // textAlign:'center',
    // justifyContent:'space-between'
  },
  Signup: {
    paddingRight: 70,
    textDecorationLine: "underline",
    color: "#2017d1",
    // textAlign:'center',
    // justifyContent:'space-between'
  },
});
export default Contact;

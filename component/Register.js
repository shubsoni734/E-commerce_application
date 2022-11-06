import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";
import React from "react";
import { useState } from "react";
import { db } from "./firbass_connect";
import { ref, set } from "firebase/database";

const Register = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = () => {
    // try{
      if (!name.trim()) {
        Alert.alert("Every Field is required !");
      }
      if (!password.trim()) {
        Alert.alert("Every Field is required !");
      } 
      if (!password.trim()) {
        Alert.alert("Every Field is required !");
      } 
      else {
        set(ref(db, "user/" + email), {
          email: email,
          name: name,
          password: password,
        })
          .then(() => {
            alert("data is updated");
            navigation.navigate("Login");
          })
          .catch((error) => {
            alert(error);
          });
        setName({name: "" });
        setEmail({name: "" });
        setPassword({name: "" }); 

      }
    // }
    // catch(error){
    //   console.log(error);
    // }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Shree ji</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <Text style={styles.lable}>Name</Text>
          <TextInput
            style={styles.textbox}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"
            value={name}
            onChangeText={(actualData) => setName(actualData)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.lable}>Email</Text>
          <TextInput
            style={styles.textbox}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            value={email}
            onChangeText={(actualData) => setEmail(actualData)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.lable}>Password</Text>
          <TextInput
            style={styles.textbox}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(actualData) => setPassword(actualData)}
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
            { backgroundColor: isChecked ? "black" : "gray" },
          ]}
          disabled={!isChecked}
          onPress={() => Submit()}
        >
          <Text style={styles.buttontext}>SignUp</Text>
        </TouchableOpacity>
        <View style={styles.signu}>
        <Text style={styles.Signupt}>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.Signup}>Login</Text>
        </TouchableOpacity>
        {/* <Text style={styles.Signup}
        onPress ={()=> register()}
        >SignUp</Text> */}
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 2.5,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  lable: {
    marginTop: 10,
    padding: 10,
    paddingLeft: 30,
    fontSize: 18,
    // fontWeight:'bold',
  },
  textbox: {
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 15,
    fontSize: 18,
    fontFamily: "regular",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 20,
    paddingLeft: 30,
  },
  wrappertext: {
    marginHorizontal: 10,
    color: "#7d7d7d",
  },
  buttonStyle: {
    // textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 20,
    padding: 7,
    borderRadius: 20,
    // paddingLeft: 30,
    backgroundColor: "gray",
  },
  buttontext: {
    color: "#fff",
    // paddingLeft: 30,
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

export default Register;

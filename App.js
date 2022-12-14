// import { View, Text } from "react-native";
// import { fire_connect } from "./component/firbass_connect";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Register from "./component/Register";
import Splash from "./component/Splash";
// import Product1 from './component/product1';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Loading" component={Splash} />
        <Stack.Screen name="Login" component={Contact} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="register" component={Register}/>
         <Tab.Screen name="Loading" component={Splash} />
        <Stack.Screen name="Login" component={Contact} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="register" component={Register}/>
        {/* <Stack.Screen name='Product1' component={Product1}/> */}
      </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default App;

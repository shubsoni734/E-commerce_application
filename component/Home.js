import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style= {Style.mainContani}>
      <Text>home</Text>
    </View>
  )
}
const Style = StyleSheet.create({
  mainContani:{
  height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
})
export default Home;
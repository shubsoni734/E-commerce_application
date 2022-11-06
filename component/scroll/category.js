import { Text, StyleSheet, View,Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
        <TouchableOpacity>
        <View style={{ height: 130, width: 130,marginLeft:10,borderWidth:0.4,borderColor:'#ddddd',marginRight:10 }}
        >
        <View style={{ flex: 3 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
            }}
          />
        </View>
        <View style={{ flex: 1 ,paddingLeft:10,paddingTop:10}}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({})
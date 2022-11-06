import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  
  Image,
  Button,
} from "react-native";
import React, { startTransition } from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import { ImageSlider } from "react-native-image-slider-banner";
// import {} from 'react-native-image-slider-box';
import Category from "./scroll/category";

const Home = ({navigation}) => {
  return (
    <View>
      <View style={Style.header}>
        <Text style={Style.head_text}>home</Text>
        <Ionic name="home" />
      </View>
      <View>
        <ImageSlider
          data={[
            {
              img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              img: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ]}
          autoPlay={true}
          // onItemChanged={(item) => console.log("item", item)}
          closeIconColor="#fff"
          timer={2000}
          style={Style.banner}
        />
      </View>
      <View>
        <ScrollView scrollEventThrottle={16}>
          <View>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
            >
              desi product
            </Text>
            <View style={{ height: 130, marginTop: 10, }}>
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
                <Category
                  imageUri={require("../image/code.jpg")}
                  name="code"
                />
                <Category
                
                  imageUri={require("../image/flow.jpg")}
                  name="flower"
                />
                <Category
                  imageUri={require("../image/code.jpg")}
                  name="code"
                />
                <Category
                  imageUri={require("../image/flow.jpg")}
                  name="flower"
                />
              </ScrollView>
            </View>
          </View>
          <View>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20
            ,padding:10 }}
            >
              Fency product
            </Text>
            <View style={{ height: 130, marginTop: 10, }}>
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
                <Category
                  imageUri={require("../image/flow.jpg")}
                  name="flower123"
                  onPress={() => navigation.navigate("Login")}
                />
                <Category
                
                  imageUri={require("../image/code.jpg")}
                  name="flower"
                />
                <Category
                  imageUri={require("../image/flow.jpg")}
                  name="flower"
                />
                <Category
                  imageUri={require("../image/code.jpg")}
                  name="flower"
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Product1")}>
          <Text >Login</Text>
        </TouchableOpacity>
    </View>
  );
};
const Style = StyleSheet.create({
  header: {
    backgroundColor: "black",
  },
  head_text: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    // alignSelf: 'center',
    justifyContent: "center",
    // alignItems: 'center',
    // textAlignVertical: 'center',
    // alignContent: 'center',
  },
  container: {
    flex: 1,
    // flexWrap:'wrap',
    // padding: 20,
  },
  box: {
    margin: 7,
    // flex: 1,
    width: "45%",
    borderRadius: 15,
    height: 200,
    backgroundColor: "darkorange",
  },
  scrollView: {
    height: "30%",
    width: "100%",
    // margin: 20,
    alignSelf: "center",
    // padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "lightblue",
  },
});
export default Home;

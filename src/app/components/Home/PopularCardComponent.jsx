import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const PopularCardComponent = ({ img }) => {
 return (
  <TouchableOpacity>
   <View style={styles.card}>
    <View>
     <Image source={require(img)} />
    </View>
   </View>
  </TouchableOpacity>
 );
};

export default PopularCardComponent;

const styles = StyleSheet.create({
 card: {
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
  shadowColor: "#000",
  shadowOffset: {
   width: 0,
   height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 1,
  flex: 1,
  margin: 5,
  justifyContent: "center",
  alignItems: "center",
 },
});

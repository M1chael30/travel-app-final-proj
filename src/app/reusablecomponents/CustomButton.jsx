import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ children, onPress, variant, height }) => {
 return (
  <TouchableOpacity onPress={onPress}>
   <View style={[styles.btn, { backgroundColor: variant, height: height }]}>
    {children}
   </View>
  </TouchableOpacity>
 );
};

export default CustomButton;

const styles = StyleSheet.create({
 btn: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: 5,
  borderRadius: 10,
  paddingHorizontal: 13,
 },
});

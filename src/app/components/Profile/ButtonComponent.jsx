import { StyleSheet, View } from "react-native";
import React from "react";
import DeleteComponent from "./DeleteComponent";
import LogoutComponent from "./LogoutComponent";

const ButtonComponent = () => {
 return (
  <View style={styles.BTN_CONTAINER}>
   <DeleteComponent />
   <LogoutComponent />
  </View>
 );
};

export default ButtonComponent;

const styles = StyleSheet.create({
 BTN_CONTAINER: {
  position: "absolute",
  bottom: 50,
  left: 0,
  right: 0,
  padding: 10,
 },
});

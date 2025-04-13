import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

export default function TitleComponent() {
 return (
  <View style={styles.TITLE_CONTAINER}>
   <Text variant="titleLarge" style={styles.TITLE}>
    Favorites
   </Text>
  </View>
 );
}

const styles = StyleSheet.create({
 TITLE_CONTAINER: {
  marginBottom: 20,
  display: "flex",
  alignItems: "center",
 },
 TITLE: {
  fontFamily: "Poppins_700Bold",
 },
});

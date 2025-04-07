import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../constants/data";

export default function Container({ children }) {
 return (
  <SafeAreaView>
   <View style={styles.container}>{children}</View>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  padding: 10,
  backgroundColor: COLOR.medyoYellow,
 },
});

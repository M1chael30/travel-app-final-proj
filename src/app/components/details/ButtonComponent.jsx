import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { COLOR } from "../../constants/data";
import { Send } from "lucide-react-native";

export default function ButtonComponent() {
 return (
  <Button mode="contained" style={styles.BUTTON}>
   <View style={styles.BUTTON_CONTENT}>
    <Text variant="labelLarge" style={styles.BUTTON_TEXT}>
     Book Now
    </Text>
    <Send color={COLOR.white} size={20} />
   </View>
  </Button>
 );
}

const styles = StyleSheet.create({
 BUTTON: {
  marginTop: 20,
  backgroundColor: COLOR.gray,
  borderRadius: 10,
  paddingVertical: 5,
  paddingHorizontal: 15,
  position: "absolute",
  bottom: 20,
  left: 10,
  right: 10,
 },
 BUTTON_TEXT: {
  color: COLOR.white,
  fontSize: 16,
  fontWeight: "bold",
 },
 BUTTON_CONTENT: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
 },
});

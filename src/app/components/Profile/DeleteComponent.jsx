import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";
import { COLOR } from "../../constants/data";
import { UserX } from "lucide-react-native";

const DeleteComponent = () => {
 return (
  <Button buttonColor={COLOR.red} textColor={COLOR.white} style={styles.BTN}>
   <View style={styles.BTN_CONTENT}>
    <Text variant="labelLarge" style={styles.DELETE}>
     Delete Account
    </Text>
    <UserX size={20} color={COLOR.white} />
   </View>
  </Button>
 );
};

export default DeleteComponent;

const styles = StyleSheet.create({
 BTN: {
  marginTop: 15,
  paddingVertical: 5,
  borderRadius: 20,
 },
 DELETE: {
  color: COLOR.white,
  fontFamily: "Poppins_500Medium",
 },
 BTN_CONTENT: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
  flexDirection: "row",
 },
});

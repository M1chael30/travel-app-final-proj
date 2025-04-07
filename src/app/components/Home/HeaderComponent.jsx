import { StyleSheet, useWindowDimensions, View } from "react-native";
import React from "react";
import { Avatar, Text } from "react-native-paper";
import { APP_NAME, TITLE_NAME } from "../../constants/data";

const HeaderComponent = () => {
 const { height } = useWindowDimensions();

 return (
  <View style={[styles.container, { height: height / 12 }]}>
   <View>
    <Text style={{ fontFamily: "Poppins_700Bold" }} variant="titleLarge">
     Hello, {TITLE_NAME}
    </Text>
    <Text variant="titleSmall" style={{ fontFamily: "Poppins_400Regular" }}>
     Welcome to {APP_NAME}
    </Text>
   </View>
   <Avatar.Image
    size={45}
    source={{
     uri: "https://imgs.search.brave.com/rc4KLgdyT2x883nnk1BWCInH91PPbv4SEJ3eVwQwXDE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/MmhnZncuanBn",
    }}
   />
  </View>
 );
};
export default HeaderComponent;

const styles = StyleSheet.create({
 container: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
 },
});

import {
 Image,
 StyleSheet,
 TouchableOpacity,
 useWindowDimensions,
 View,
} from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HeaderComponent = () => {
 const { height } = useWindowDimensions();
 const navigation = useNavigation();

 return (
  <View style={[styles.container, { height: height / 12 }]}>
   <View style={styles.LOGO_CONTAINER}>
    <Image
     style={styles.IMG_LOGO}
     source={require("../../../../assets/secondaryLogo-removebg.png")}
    />
   </View>
   <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => navigation.navigate("Profile")}
   >
    <Avatar.Image
     size={50}
     source={require("../../../../assets/profile.jpg")}
    />
   </TouchableOpacity>
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
 IMG_LOGO: {
  width: "auto",
  resizeMode: "center",
  overflow: "hidden",
 },
 LOGO_CONTAINER: {
  width: 68,
  borderRadius: 20,
  overflow: "hidden",
 },
});

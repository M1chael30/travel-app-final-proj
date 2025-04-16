import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

const height = Dimensions.get("window").height;

export default function ImageContainer() {
 return (
  <View style={styles.CONTAINER}>
   <Image
    style={styles.COVER_IMG}
    source={require("../../../../assets/cover-photo.png")}
   />
   <Avatar.Image
    size={100}
    source={require("../../../../assets/profile2.jpg")}
    style={styles.AVATAR_IMG}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 CONTAINER: {
  height: height * 0.26,
  position: "relative",
 },
 COVER_IMG: {
  resizeMode: "contain",
  height: "100%",
  width: "100%",
  borderRadius: 20,
 },
 AVATAR_IMG: {
  zIndex: 1,
  position: "absolute",
  bottom: -50,
  left: 20,
 },
});

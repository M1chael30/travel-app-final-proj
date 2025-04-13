import { Dimensions, Image, StyleSheet, View } from "react-native";

const height = Dimensions.get("window").height;
export default function ImageComponent({ data }) {
 return (
  <View style={styles.CONTAINER}>
   <Image source={data.img} style={styles.IMG} />
  </View>
 );
}

const styles = StyleSheet.create({
 CONTAINER: {
  width: "100%",
  overflow: "hidden",
  borderRadius: 10,
  marginBottom: 20,
  position: "relative",
  height: height / 2.5,
 },
 IMG: {
  width: "100%",
  height: "100%",
  resizeMode: "cover",
 },
});

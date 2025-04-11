import { Dimensions, Image, StyleSheet, View } from "react-native";
import ButtonsComponent from "./ButtonsComponent";

const height = Dimensions.get("window").height;
export default function ImageComponent({ data }) {
 return (
  <View style={[styles.CONTAINER, { height: height / 2.5 }]}>
   <Image source={data.img} style={styles.IMG} />
   <ButtonsComponent isFavorite={data.isFavorite} />
  </View>
 );
}

const styles = StyleSheet.create({
 CONTAINER: {
  backgroundColor: "red",
  width: "100%",
  overflow: "hidden",
  borderRadius: 10,
  marginBottom: 20,
  position: "relative",
 },
 IMG: {
  width: "100%",
  height: "100%",
  resizeMode: "cover",
 },
});

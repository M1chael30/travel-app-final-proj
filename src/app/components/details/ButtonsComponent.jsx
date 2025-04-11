import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { COLOR } from "../../constants/data";
import { Heart, MoveLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function ButtonsComponent({ isFavorite }) {
 const navigation = useNavigation();

 return (
  <View style={styles.CONTAINER}>
   <View style={styles.CONTAINER_BTN}>
    <Button
     buttonColor={COLOR.white}
     style={styles.BTN}
     onPress={() => navigation.goBack()}
    >
     <MoveLeft size={25} color={COLOR.gray} />
    </Button>
    <Button buttonColor={COLOR.white} style={styles.BTN}>
     {isFavorite ? (
      <Heart size={25} fill={"red"} strokeWidth={0} />
     ) : (
      <Heart color={COLOR.gray} size={25} />
     )}
    </Button>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 CONTAINER: {
  position: "absolute",
  top: 10,
  width: "100%",
  zIndex: 1,
 },
 CONTAINER_BTN: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginHorizontal: 10,
 },
});

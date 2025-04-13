import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLOR } from "../../constants/data";
import { ChevronLeft, Heart } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";

export default function ButtonsComponent({ isFavorite }) {
 const navigation = useNavigation();

 return (
  <View style={styles.CONTAINER}>
   <View style={styles.CONTAINER_BTN}>
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
     <ChevronLeft size={30} color={COLOR.gray} />
    </TouchableOpacity>
    <Text variant="titleLarge" style={styles.DETAILS}>
     Details
    </Text>
    <TouchableOpacity activeOpacity={0.7}>
     {isFavorite ? (
      <Heart size={30} fill={"red"} strokeWidth={0} />
     ) : (
      <Heart color={COLOR.gray} size={25} />
     )}
    </TouchableOpacity>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 CONTAINER: {
  width: "100%",
  marginBottom: 20,
 },
 CONTAINER_BTN: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
 },
 DETAILS: {
  fontFamily: "Poppins_700Bold",
 },
});

import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLOR } from "../../constants/data";
import { ChevronLeft, Heart } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";
import { useData } from "../../context/DataProvider";
import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";

export default function ButtonsComponent({ item }) {
 const navigation = useNavigation();
 const [isFavorite, setIsFavorites] = useState(false);
 const { handleToggleIsFavorite, favorites } = useData();
 const { current_user } = useAuth();
 const isfavorite = favorites.some(
  (f) => f.travel_id === item.id && f.id === current_user?.id
 );

 const addFavorites = async () => {
  if (!favorites) {
   return false;
  }

  setIsFavorites(!isFavorite);

  handleToggleIsFavorite(item.id, !isFavorite);
 };

 return (
  <View style={styles.CONTAINER}>
   <View style={styles.CONTAINER_BTN}>
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
     <ChevronLeft size={30} color={COLOR.gray} />
    </TouchableOpacity>
    <Text variant="titleLarge" style={styles.DETAILS}>
     Details
    </Text>
    <TouchableOpacity activeOpacity={0.7} onPress={addFavorites}>
     {isfavorite ? (
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

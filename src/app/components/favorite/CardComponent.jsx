import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { COLOR } from "../../constants/data";
import { Cloud, Minus, Star } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useData } from "../../context/DataProvider";

export default function CardComponent({ item, indexKey }) {
 const navigation = useNavigation();
 const [isFavorite, setIsFavorites] = useState(true);
 const { handleToggleIsFavorite, favorites } = useData();

 const removeFavorite = async () => {
  if (!favorites) {
   return false;
  }

  setIsFavorites(!isFavorite);

  handleToggleIsFavorite(item.id, !isFavorite);
 };

 return (
  <TouchableOpacity
   activeOpacity={1}
   onPress={() => navigation.navigate("Details", { item })}
   key={item.id}
  >
   <Card style={styles.CARD}>
    <Card.Content style={styles.CARD_CONTENT}>
     <Card.Cover source={item.img} style={styles.CARD_IMG} />
     <View style={styles.CARD_TITLE_CONTAINER}>
      <View style={styles.CARD_TITLE_CONTAINER_INNER}>
       <Text variant="titleMedium" style={styles.CARD_TITLE}>
        {item.location?.substring(0, 13) + "..."}
       </Text>
       <View style={styles.STATUS_CONTAINER}>
        <View style={styles.STATUS}>
         <Cloud color={COLOR.gray} size={20} fill={COLOR.gray} />
         <Text variant="bodyMedium" style={styles.STATUS_TEXT}>
          {item.weather}
         </Text>
        </View>
        <View style={styles.STATUS}>
         <Star
          color={COLOR.gray}
          size={20}
          fill={"#ffd60a"}
          stroke={"#ffd60a"}
         />
         <Text variant="bodyMedium" style={styles.STATUS_TEXT}>
          {item.rating}
         </Text>
        </View>
       </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={removeFavorite}>
       <View style={styles.CARD_TITLE_ICON}>
        <Minus size={25} color={COLOR.white} />
       </View>
      </TouchableOpacity>
     </View>
    </Card.Content>
   </Card>
  </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
 CARD: {
  height: 150,
  backgroundColor: COLOR.white,
  width: "100%",
  marginBottom: 10,
 },
 CARD_CONTENT: {
  height: "100%",
  display: "flex",
  flexDirection: "row",
  gap: 8,
  width: "100%",
 },
 CARD_IMG: {
  height: "100%",
  width: 120,
  resizeMode: "center",
 },
 CARD_TITLE: {
  fontFamily: "Poppins_700Bold",
 },
 CARD_SUBTITLE: {
  fontFamily: "Poppins_500Medium",
 },
 CARD_TITLE_CONTAINER: {
  // backgroundColor: "red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: 205,
 },
 CARD_TITLE_CONTAINER_INNER: {
  width: "auto",
 },
 CARD_TITLE_ICON: {
  backgroundColor: COLOR.orange,
  padding: 5,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
 },
 STATUS_TEXT: {
  fontFamily: "Poppins_500Medium",
 },
 STATUS_CONTAINER: {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 10,
 },
 STATUS: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: COLOR.gray,
  flexDirection: "row",
  gap: 5,
 },
});

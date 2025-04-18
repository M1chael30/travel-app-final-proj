import { Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Heart, MapPinned } from "lucide-react-native";
import { COLOR } from "../../constants/data";
import { useNavigation } from "@react-navigation/native";
import { useData } from "../../context/DataProvider";
import { useAuth } from "../../context/AuthProvider";

const MyComponent = ({ item }) => {
 const navigation = useNavigation();
 const { favorites } = useData();
 const { current_user } = useAuth();
 const isFavorite = favorites.some(
  (f) => f.travel_id === item.id && f.id === current_user?.id
 );


 return (
  <Card
   style={styles.card}
   onPress={() => navigation.navigate("Details", { item })}
  >
   {/* heart */}
   <View style={styles.heart}>
    {isFavorite ? (
     <Heart color={"black"} size={30} fill={"red"} strokeWidth={0} />
    ) : (
     <Heart color={"black"} size={30} strokeWidth={2} />
    )}
   </View>
   <Card.Cover style={styles.img} source={item.img} />

   <Card.Content style={styles.cardContent}>
    <View style={styles.title}>
     {/* location */}
     <Text variant="titleMedium" style={{ fontFamily: "Poppins_700Bold" }}>
      {item.location}
     </Text>
    </View>

    {/* address */}
    <View style={styles.description}>
     <MapPinned color={COLOR.gray} size={15} />
     <Text variant="titleSmall" style={{ fontFamily: "Poppins_400Regular" }}>
      {item.address}
     </Text>
    </View>
   </Card.Content>
  </Card>
 );
};
export default MyComponent;

const styles = StyleSheet.create({
 card: {
  margin: 5,
  position: "relative",
 },
 img: {
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  resizeMode: "center",
 },
 cardContent: {
  marginTop: 10,
 },
 title: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  gap: 1,
 },
 description: {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  gap: 5,
 },
 heart: {
  position: "absolute",
  right: 20,
  top: 20,
  zIndex: 1,
 },
});

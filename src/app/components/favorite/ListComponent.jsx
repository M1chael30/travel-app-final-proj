import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import CardComponent from "./CardComponent";
import { TRAVEL_DATA } from "../../constants/data";
import { useData } from "../../context/DataProvider";
import { useAuth } from "../../context/AuthProvider";
import { Text } from "react-native-paper";

const { height } = Dimensions.get("window");

export default function ListComponent() {
 const { favorites } = useData();
 const { current_user } = useAuth();

 // compare travel data and favorites from async storage then if true create new array
 const filteredTravelData = TRAVEL_DATA.filter((travel) =>
  favorites.some(
   (favorite) =>
    favorite?.travel_id === travel?.id && favorite?.id === current_user?.id
  )
 );

 return (
  <View style={styles.CONTAINER}>
   <ScrollView showsVerticalScrollIndicator={false}>
    {filteredTravelData.length > 0 ? (
     filteredTravelData.map((item) => {
      return <CardComponent item={item} />;
     })
    ) : (
     <View style={styles.EMPTY_CONTAINER}>
      <Text variant="bodyLarge" style={styles.EMPTY}>
       No Favorites.
      </Text>
     </View>
    )}
   </ScrollView>
  </View>
 );
}

const styles = StyleSheet.create({
 CONTAINER: {
  height: height * 0.88,
 },
 EMPTY: {
  fontFamily: "Poppins_500Medium",
 },
 EMPTY_CONTAINER: {
  height: height * 0.88,
  alignItems: "center",
  justifyContent: "center",
 },
});

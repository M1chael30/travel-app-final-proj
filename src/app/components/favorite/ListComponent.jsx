import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import CardComponent from "./CardComponent";
import { TRAVEL_DATA } from "../../constants/data";

const { height } = Dimensions.get("window");

export default function ListComponent() {
 return (
  <View style={styles.CONTAINER}>
   <FlatList
    data={TRAVEL_DATA}
    keyExtractor={(item) => item.address}
    renderItem={({ item }) => item.isFavorite && <CardComponent item={item} />}
    showsVerticalScrollIndicator={false}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 CONTAINER: {
  height: height * 0.88,
 },
});

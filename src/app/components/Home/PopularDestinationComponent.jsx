import { Dimensions, FlatList, View } from "react-native";
import React from "react";
import PopularCardComponent from "./PopularCardComponent";
import { TRAVEL_DATA } from "../../constants/data";
import { Text } from "react-native-paper";

const { height } = Dimensions.get("window");
const PopularDestinationComponent = () => {
 return (
  <View style={styles.container}>
   <Text
    variant="titleMedium"
    style={{ fontFamily: "Poppins_700Bold", marginBottom: 10 }}
   >
    Popular Destinations
   </Text>
   <FlatList
    data={TRAVEL_DATA}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <PopularCardComponent item={item} />}
    showsVerticalScrollIndicator={false}
   />
  </View>
 );
};

export default PopularDestinationComponent;

const styles = {
 container: {
  marginTop: 20,
  height: height * 0.82,
 },
};

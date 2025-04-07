import { Dimensions, FlatList, View } from "react-native";
import React from "react";
import PopularCardComponent from "./PopularCardComponent";
import { TRAVEL_DATA } from "../../constants/data";
import { Text } from "react-native-paper";

const PopularDestinationComponent = ({ navigation }) => {
 const { height } = Dimensions.get("window");

 return (
  <View style={[styles.container, { height: height * 0.82 }]}>
   <Text variant="titleMedium" style={{ fontFamily: "Poppins_700Bold" }}>
    Popular Destinations
   </Text>
   <FlatList
    data={TRAVEL_DATA}
    keyExtractor={(item) => item.address}
    renderItem={({ item }) => (
     <PopularCardComponent
      location={item.location}
      address={item.address}
      price={item.price}
      isFavorite={item.isFavorite}
      img={item?.img}
     />
    )}
    showsVerticalScrollIndicator={false}
   />
  </View>
 );
};

export default PopularDestinationComponent;

const styles = {
 container: {
  marginTop: 20,
 },
};

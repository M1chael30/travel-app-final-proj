import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PopularCardComponent from "./PopularCardComponent";
import { TRAVEL_DATA } from "../../constants/data";

const PopularDestinationComponent = () => {
 return (
  <View style={styles.container}>
   <Text style={styles.heading}>Popular Destination</Text>
   <FlatList
    data={TRAVEL_DATA}
    keyExtractor={(item) => item.address}
    renderItem={({ item }) => <PopularCardComponent img={item.img} />}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
   />
  </View>
 );
};

export default PopularDestinationComponent;

const styles = StyleSheet.create({
 container: {
  padding: 10,
 },
 heading: {
  fontSize: 20,
  marginBottom: 10,
  fontFamily: "Poppins_700Bold",
 },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "../components/Container";
import { TRAVEL_DATA } from "../constants/data";

export default function DetailsScreen({ route }) {
 const { address } = route.params;
 const detail = TRAVEL_DATA.find((item) => item.address === address);

 console.log("DetailsScreen", TRAVEL_DATA);

 return (
  <Container>
   <Text>{detail.address}</Text>
   <Text>{detail.description}</Text>
  </Container>
 );
}

const styles = StyleSheet.create({});

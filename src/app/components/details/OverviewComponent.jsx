import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import { Clock, Cloud, Star } from "lucide-react-native";
import { COLOR } from "../../constants/data";

const height = Dimensions.get("window").height;

export default function OverviewComponent({
 travelTime,
 weather,
 rating,
 description,
}) {
 return (
  <View style={styles.CONTAINER}>
   <Text variant="titleLarge" style={styles.DETAILS}>
    Details
   </Text>

   <View style={styles.STATUS_CONTAINER}>
    <View style={styles.STATUS}>
     <Clock color={COLOR.gray} size={20} />
     <Text variant="bodyMedium" style={styles.STATUS_TEXT}>
      {travelTime}
     </Text>
    </View>
    <View style={styles.STATUS}>
     <Cloud color={COLOR.gray} size={20} />
     <Text variant="bodyMedium" style={styles.STATUS_TEXT}>
      {weather}
     </Text>
    </View>
    <View style={styles.STATUS}>
     <Star color={COLOR.gray} size={20} />
     <Text variant="bodyMedium" style={styles.STATUS_TEXT}>
      {rating}
     </Text>
    </View>
   </View>
   <View style={styles.LINE}></View>
   <View style={styles.DESCRIPTION_CONTAINER}>
    <Text variant="bodyMedium" style={styles.DESCRIPTION_TEXT}>
     {description}
    </Text>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 CONTAINER: {
  marginTop: 30,
  backgroundColor: COLOR.white,
  padding: 15,
  height: "auto",
  borderRadius: 10,
  shadowColor: COLOR.gray,
  shadowOffset: {
   width: 0,
   height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 2,
 },
 DETAILS: {
  fontFamily: "Poppins_600Medium",
 },
 STATUS_TEXT: {
  fontFamily: "Poppins_600Medium",
 },
 STATUS_CONTAINER: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: 10,
 },
 STATUS: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: COLOR.gray,
  flexDirection: "row",
  gap: 5,
 },
 DESCRIPTION_CONTAINER: {
  marginTop: 30,
 },
 DESCRIPTION_TEXT: {
  fontFamily: "Poppins_400Regular",
  textAlign: "justify",
 },
 LINE: {
  borderBottomColor: COLOR.gray,
  borderBottomWidth: 1,
 },
});

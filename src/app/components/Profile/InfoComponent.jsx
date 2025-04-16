import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import PropTypes from "prop-types";

const InfoComponent = ({ title, iconTop, iconBottom, onPress }) => {
 return (
  <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
   <View style={styles.INFO_CONTAINER}>
    <View style={styles.INFO_CONTAINER_TEXT_LEFT}>
     {iconTop}
     <Text variant="titleMedium" style={styles.INFO_CONTAINER_TEXT}>
      {title}
     </Text>
    </View>
    {iconBottom}
   </View>
  </TouchableOpacity>
 );
};

InfoComponent.propTypes = {
 title: PropTypes.string.isRequired,
 iconTop: PropTypes.element.isRequired,
 iconBottom: PropTypes.element.isRequired,
 onPress: PropTypes.func,
};

export default InfoComponent;

const styles = StyleSheet.create({
 INFO_CONTAINER: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  marginVertical: 15,
 },
 INFO_CONTAINER_TEXT_LEFT: {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: 10,
 },
 INFO_CONTAINER_TEXT: {
  fontFamily: "Poppins_500Medium",
 },
});

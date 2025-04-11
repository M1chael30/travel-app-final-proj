import { DollarSign, MapPinned } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { COLOR } from "../../constants/data";

export default function TitleComponent({ location, address, price }) {
 return (
  <View style={styles.CONTAINER_TITLE}>
   <View>
    <Text variant="titleLarge" style={styles.TITLE}>
     {location}
    </Text>
    <View style={styles.DESCRIPTION}>
     <MapPinned color={COLOR.gray} size={15} />
     <Text variant="titleSmall" style={{ fontFamily: "Poppins_400Regular" }}>
      {address}
     </Text>
    </View>
   </View>
   <View style={styles.PRICE}>
    <DollarSign size={17} color={COLOR.orange} strokeWidth={3} />
    <Text variant="titleMedium" style={styles.PRICE_TEXT}>
     {price}
    </Text>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 TITLE: {
  fontFamily: "Poppins_700Bold",
 },
 SUB_TITLE: {
  fontFamily: "Poppins_400Regular",
 },
 PRICE: {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  gap: 1,
 },
 CONTAINER_TITLE: {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
 },
 PRICE_TEXT: {
  fontFamily: "Poppins_600Medium",
  color: COLOR.orange,
  fontSize: 16,
 },
 DESCRIPTION: {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  gap: 5,
 },
});

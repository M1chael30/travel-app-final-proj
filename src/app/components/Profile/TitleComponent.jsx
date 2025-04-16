import { Dimensions, StyleSheet, View } from "react-native";
import { APP_NAME, COLOR } from "../../constants/data";
import { AtSign, Mail } from "lucide-react-native";
import { Text } from "react-native-paper";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const height = Dimensions.get("window").height;

export default function TitleComponent() {
 const { currentUser } = useContext(AuthContext);

 return (
  <View style={styles.APP_CONTAINER}>
   <View style={styles.APP_CONTAINER_INNER}>
    <AtSign size={15} color={COLOR.gray} />
    <Text variant="titleSmall" style={styles.APP_NAME}>
     {APP_NAME}
    </Text>
   </View>

   <View style={styles.TITLE_CONTAINER}>
    <Text variant="titleLarge" style={styles.TITLE_TEXT}>
     {currentUser?.name}
    </Text>
    <View style={styles.EMAIL_CONTAINER}>
     <Mail color={COLOR.gray} size={15} />
     <Text variant="titleSmall" style={styles.EMAIL}>
      {currentUser?.email}
     </Text>
    </View>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 APP_CONTAINER: {
  marginVertical: 25,
  height: height * 0.15,
 },
 APP_NAME: {
  fontFamily: "Poppins_400Regular",
 },
 APP_CONTAINER_INNER: {
  position: "absolute",
  right: 10,
  top: 10,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 2,
 },
 TITLE_TEXT: {
  fontFamily: "Poppins_700Bold",
 },
 EMAIL_CONTAINER: {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: 2,
 },
 EMAIL: {
  fontFamily: "Poppins_400Regular",
 },
 TITLE_CONTAINER: {
  position: "absolute",
  bottom: 25,
  left: 25,
 },
});

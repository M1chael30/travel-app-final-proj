import {
 Dimensions,
 Image,
 StyleSheet,
 TouchableOpacity,
 View,
} from "react-native";
import { Avatar, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { APP_NAME } from "../../constants/data";

const height = Dimensions.get("window").height;

const HeaderComponent = () => {
 const navigation = useNavigation();

 return (
  <View style={styles.container}>
   <View style={styles.LOGO_CONTAINER}>
    <Image
     style={styles.IMG_LOGO}
     source={require("../../../../assets/secondaryLogo-removebg.png")}
    />
   </View>
   <Text variant="titleLarge" style={styles.TITLE}>
    {APP_NAME}
   </Text>
   <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => navigation.navigate("Profile")}
   >
    <Avatar.Image
     size={50}
     source={{ uri: "https://avatar.iran.liara.run/public" }}
    />
   </TouchableOpacity>
  </View>
 );
};
export default HeaderComponent;

const styles = StyleSheet.create({
 container: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: height * 0.08,
 },
 IMG_LOGO: {
  width: "auto",
  resizeMode: "center",
  overflow: "hidden",
 },
 LOGO_CONTAINER: {
  width: 68,
  borderRadius: 20,
  overflow: "hidden",
 },
 TITLE: {
  fontFamily: "Poppins_500Medium",
 },
});

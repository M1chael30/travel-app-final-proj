import { Image, StyleSheet, Text, View } from "react-native";
import Container from "../components/Container";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthProvider";

const SplashScreen = () => {
 const navigation = useNavigation();

 const { currentUser } = useContext(AuthContext);

 useEffect(() => {
  setTimeout(() => {
   navigation.replace(currentUser ? "HomeIndex" : "Login");
  }, 1500);
 }, [navigation]);

 return (
  <Container>
   <View style={styles.CONTAINER}>
    <Image
     style={styles.IMG}
     source={require("../../../assets/primaryLogo-removebg.png")}
    />
   </View>
  </Container>
 );
};

export default SplashScreen;

const styles = StyleSheet.create({
 CONTAINER: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
 IMG: {
  height: 400,
  width: 400,
  resizeMode: "contain",
 },
});

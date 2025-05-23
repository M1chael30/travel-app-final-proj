import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import Container from "../components/Container";
import { COLOR } from "../constants/data";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
 const navigation = useNavigation();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const value = useAuth();

 const login = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|me)$/;

  // validate email and password and check a valid email
  if (!email || !password) {
   alert("All fields are required");
   return;
  }

  if (!emailRegex.test(email)) {
   alert("Enter a valid email");
   setEmail("");
   return;
  }
  setEmail("");
  setPassword("");
  await value.login_function(email, password);
 };

 return (
  <Container>
   <View style={styles.CONTAINER}>
    <Image
     style={styles.IMG}
     source={require("../../../assets/secondaryLogo-removebg.png")}
    />
    <Card style={styles.CARD_CONTAINER}>
     <Card.Content style={styles.CARD_CONTENT}>
      <Text variant="titleLarge" style={styles.LOGIN}>
       Log in
      </Text>

      <View style={styles.TEXT_INPUT_CONTAINER}>
       <TextInput
        mode="outlined"
        placeholder="Email"
        outlineColor={COLOR.orange}
        activeOutlineColor={COLOR.orange}
        value={email}
        onChangeText={(value) => setEmail(value)}
       />
       <TextInput
        mode="outlined"
        placeholder="Password"
        outlineColor={COLOR.orange}
        activeOutlineColor={COLOR.orange}
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
       />
      </View>

      <Button
       textColor={COLOR.white}
       buttonColor={COLOR.orange}
       mode="contained"
       style={styles.REGISTER_BTN}
       onPress={login}
      >
       Login
      </Button>
      <Text style={styles.TITLE}>Don't have an account?</Text>
      <TouchableOpacity
       onPress={() => navigation.navigate("Register")}
       activeOpacity={0.7}
      >
       <Text style={styles.REGISTER}>Register</Text>
      </TouchableOpacity>
     </Card.Content>
    </Card>
   </View>
  </Container>
 );
};

export default LoginScreen;

const styles = StyleSheet.create({
 CONTAINER: {
  flex: 0.7,
  justifyContent: "center",
  alignItems: "center",
 },
 CARD_CONTAINER: {
  backgroundColor: COLOR.white,
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  width: "100%",
  overflow: "hidden",
 },
 LOGIN: {
  fontFamily: "Poppins_700Bold",
  textAlign: "center",
  marginVertical: 10,
 },
 CARD_CONTENT: {
  minWidth: "100%",
  overflow: "hidden",
 },
 TEXT_INPUT_CONTAINER: {
  display: "flex",
  gap: 20,
  marginVertical: 15,
 },
 REGISTER_BTN: {
  borderRadius: 10,
  paddingVertical: 5,
  marginBottom: 10,
 },
 IMG: {
  width: 100,
  height: 100,
 },
 REGISTER: {
  textDecorationLine: "underline",
  textAlign: "center",
  fontFamily: "Poppins_500Medium",
 },
 TITLE: {
  textAlign: "center",
  fontFamily: "Poppins_500Medium",
 },
});

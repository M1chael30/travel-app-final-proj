import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Container from "../components/Container";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { COLOR } from "../constants/data";
import { useAuth } from "../context/AuthProvider";

const RegisterScreen = () => {
 const navigation = useNavigation();
 const value = useAuth();

 const [email, setEmail] = useState("");
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");

 const register = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|me)$/;

  // validate email and password and check a valid email
  if (!email || !password || !confirmPassword || !username) {
   alert("All fields are required");
   return;
  }

  if (!emailRegex.test(email)) {
   setPassword("");
   setConfirmPassword("");
   alert("Enter a valid email");
   return;
  }

  if (confirmPassword !== password) {
   setPassword("");
   setConfirmPassword("");
   alert("Password doesn't match");
   return;
  }
  setEmail("");
  setUsername("");
  setConfirmPassword("");
  setPassword("");
  await value.register_function(email, username, password);
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
      <Text variant="titleLarge" style={styles.REGISTER}>
       Register
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
        placeholder="Username / Display name"
        outlineColor={COLOR.orange}
        activeOutlineColor={COLOR.orange}
        value={username}
        onChangeText={(value) => setUsername(value)}
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
       <TextInput
        mode="outlined"
        placeholder="Confirm Password"
        outlineColor={COLOR.orange}
        activeOutlineColor={COLOR.orange}
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(value) => setConfirmPassword(value)}
       />
      </View>

      <Button
       textColor={COLOR.white}
       buttonColor={COLOR.orange}
       mode="contained"
       style={styles.REGISTER_BTN}
       onPress={register}
      >
       Register
      </Button>
      <Text style={styles.TITLE}>Already have an Account?</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
       <Text style={styles.LOGIN}>Login In</Text>
      </TouchableOpacity>
     </Card.Content>
    </Card>
   </View>
  </Container>
 );
};

export default RegisterScreen;

const styles = StyleSheet.create({
 CONTAINER: {
  flex: 0.8,
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
 REGISTER: {
  fontFamily: "Poppins_700Bold",
  textAlign: "center",
  marginVertical: 10,
 },
 CARD_CONTENT: {
  minWidth: "100%",
  // backgroundColor: "red",
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
 LOGIN: {
  textDecorationLine: "underline",
  textAlign: "center",
  fontFamily: "Poppins_500Medium",
 },
 TITLE: {
  textAlign: "center",
  fontFamily: "Poppins_500Medium",
 },
});

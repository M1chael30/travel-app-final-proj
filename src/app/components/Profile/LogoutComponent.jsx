import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { COLOR } from "../../constants/data";
import { LogOut } from "lucide-react-native";
import { useAuth } from "../../context/AuthProvider";

const LogoutComponent = () => {
 const value = useAuth();

 return (
  <Button
   buttonColor={COLOR.gray}
   textColor={COLOR.white}
   style={styles.BTN}
   onPress={value.logout_function}
  >
   <View style={styles.BTN_CONTENT}>
    <Text variant="labelLarge" style={styles.LOGOUT}>
     Logout
    </Text>
    <LogOut size={18} color={COLOR.white} />
   </View>
  </Button>
 );
};

export default LogoutComponent;

const styles = StyleSheet.create({
 BTN: {
  marginTop: 15,
  paddingVertical: 5,
  borderRadius: 20,
 },
 LOGOUT: {
  color: COLOR.white,
  fontFamily: "Poppins_500Medium",
 },
 BTN_CONTENT: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  flexDirection: "row",
 },
});

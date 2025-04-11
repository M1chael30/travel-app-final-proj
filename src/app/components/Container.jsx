import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const height = Dimensions.get("window").height;

export default function Container({ children }) {
 return (
  <SafeAreaView>
   <View style={styles.container}>
    {children}
    <StatusBar style="auto" />
   </View>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  padding: 10,
  height: height,
  position: "relative",
 },
});

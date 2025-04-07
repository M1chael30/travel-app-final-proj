import { StyleSheet, useWindowDimensions, View } from "react-native";
import { Search } from "lucide-react-native";
import { COLOR } from "../../constants/data";
import { Button, TextInput } from "react-native-paper";

const SearchComponent = () => {
 const { width, height } = useWindowDimensions();

 return (
  <View style={[styles.container, { height: height / 12, width: width }]}>
   {/* search input */}
   <TextInput
    mode="outlined"
    label={"Search destination"}
    outlineColor="black"
    activeOutlineColor="black"
    style={{ borderRadius: 10, width: "80%" }}
   />

   {/* search button */}
   <Button
    style={{ backgroundColor: COLOR.orange, borderRadius: 10 }}
    mode="contained"
   >
    <Search color={"white"} size={20} />
   </Button>
  </View>
 );
};

export default SearchComponent;

const styles = StyleSheet.create({
 container: {
  marginVertical: 10,
  padding: 10,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
 },
 txtInput: {
  backgroundColor: "white",
  borderColor: "black",
  borderRadius: 10,
  width: "80%",
  fontFamily: "Poppins_500Medium",
  display: "flex",
  alignItems: "center",
  fontSize: 15,
  height: 50,
  paddingHorizontal: 10,
 },
});

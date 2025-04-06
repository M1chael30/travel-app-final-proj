import { StyleSheet, TextInput, useWindowDimensions, View } from "react-native";
import { Search } from "lucide-react-native";
import CustomButton from "../../reusablecomponents/CustomButton";
import { COLOR } from "../../constants/data";

const SearchComponent = () => {
 const { width, height } = useWindowDimensions();

 return (
  <View style={[styles.container, { height: height / 12, width: width }]}>
   {/* search input */}
   <TextInput placeholder="Search destination..." style={styles.txtInput} />

   {/* search button */}
   <CustomButton variant={COLOR.orange} height={45}>
    <Search color={"white"} size={20} />
   </CustomButton>
  </View>
 );
};

export default SearchComponent;

const styles = StyleSheet.create({
 container: {
  // backgroundColor: "pink",
  marginVertical: 10,
  padding: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
 },
 txtInput: {
  backgroundColor: "white",
  borderColor: "black",
  borderRadius: 10,
  width: "85%",
  fontFamily: "Poppins_500Medium",
  display: "flex",
  alignItems: "center",
  fontSize: 15,
 },
});

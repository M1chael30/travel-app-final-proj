import { Image, StyleSheet, Text, View } from "react-native";
import plane from "../../../../assets/plane.png";
import { COLOR } from "../../constants/data";
import CustomButton from "../../reusablecomponents/CustomButton";
import { SquareArrowOutUpRight } from "lucide-react-native";

const PromotionsComponent = () => {
 return (
  <View style={styles.container}>
   <View style={styles.card}>
    <View>
     <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 20 }}>
      Hollyweek Sale!
     </Text>
     <Text style={{ color: COLOR.orange, fontFamily: "Poppins_500Medium" }}>
      Up to 50% Off on Hotels
     </Text>
     <Text
      style={{
       color: COLOR.gray,
       fontFamily: "Poppins_500Medium",
       fontSize: 12,
      }}
     >
      Limited Time Offer
     </Text>
     <CustomButton variant={COLOR.orange} height={40}>
      <Text
       style={{
        color: "white",
        fontFamily: "Poppins_700Bold",
        marginBottom: -4,
       }}
      >
       Book Now
      </Text>
      <SquareArrowOutUpRight size={20} color={"white"} />
     </CustomButton>
    </View>
    <Image source={plane} style={styles.planeImg} />
   </View>
  </View>
 );
};

export default PromotionsComponent;

const styles = StyleSheet.create({
 container: {
  padding: 10,
 },
 card: {
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 15,
  display: "flex",

  width: "100%",
  position: "relative",
 },
 planeImg: {
  width: 220,
  height: 220,
  resizeMode: "contain",
  position: "absolute",
  right: -15,
  top: -65,
 },
});

import { StyleSheet } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { COLOR } from "../../constants/data";
import InfoComponent from "./InfoComponent";
import { ChevronRight, Headset, Tag, UserRoundPen } from "lucide-react-native";

export default function CardComponent() {
 return (
  <Card style={styles.CARD}>
   <Card.Content>
    <InfoComponent
     iconTop={<UserRoundPen size={25} color={COLOR.gray} />}
     title={"Edit Profile"}
     iconBottom={<ChevronRight size={25} color={COLOR.gray} />}
    />
    <InfoComponent
     iconTop={<Tag size={25} color={COLOR.gray} />}
     title={"Discount Voucher"}
     iconBottom={<ChevronRight size={25} color={COLOR.gray} />}
    />
    <InfoComponent
     iconTop={<Headset size={25} color={COLOR.gray} />}
     title={"Support"}
     iconBottom={<ChevronRight size={25} color={COLOR.gray} />}
    />
   </Card.Content>
  </Card>
 );
}

const styles = StyleSheet.create({
 CARD: {
  backgroundColor: COLOR.white,
 },
});

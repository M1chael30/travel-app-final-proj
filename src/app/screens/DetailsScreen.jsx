import { ScrollView } from "react-native";
import Container from "../components/Container";
import ButtonsComponent from "../components/details/ButtonsComponent";
import DetailComponent from "../components/details/DetailComponent";
import ImageComponent from "../components/details/ImageComponent";

export default function DetailsScreen({ route }) {
 const { item } = route.params;

 return (
  <Container>
   <ScrollView showsVerticalScrollIndicator={false}>
    <ButtonsComponent item={item} />
    <ImageComponent data={item} />
    <DetailComponent data={item} />
   </ScrollView>
  </Container>
 );
}

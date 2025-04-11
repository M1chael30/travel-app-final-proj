import Container from "../components/Container";
import ButtonComponent from "../components/details/ButtonComponent";
import DetailComponent from "../components/details/DetailComponent";
import ImageComponent from "../components/details/ImageComponent";

export default function DetailsScreen({ route }) {
 const { item } = route.params;

 return (
  <Container>
   <ImageComponent data={item} />
   <DetailComponent data={item} />
   <ButtonComponent />
  </Container>
 );
}

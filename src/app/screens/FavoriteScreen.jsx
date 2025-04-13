import Container from "../components/Container";
import ListComponent from "../components/favorite/ListComponent";
import TitleComponent from "../components/favorite/TitleComponent";

export default function FavoriteScreen() {
 return (
  <Container>
   <TitleComponent />
   <ListComponent />
  </Container>
 );
}

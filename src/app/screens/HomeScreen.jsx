import Container from "../components/Container";
import HeaderComponent from "../components/Home/HeaderComponent";
import PopularDestinationComponent from "../components/Home/PopularDestinationComponent";

const HomeScreen = () => {
 return (
  <>
   <Container>
    <HeaderComponent />
    <PopularDestinationComponent />
   </Container>
  </>
 );
};
export default HomeScreen;

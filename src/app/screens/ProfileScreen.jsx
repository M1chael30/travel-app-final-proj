import Container from "../components/Container";
import ImageContainer from "../components/Profile/ImageContainer";
import TitleComponent from "../components/Profile/TitleComponent";
import CardComponent from "../components/Profile/CardComponent";
import ButtonComponent from "../components/Profile/ButtonComponent";

const ProfileScreen = () => {
 return (
  <>
   <Container>
    <ImageContainer />
    <TitleComponent />
    <CardComponent />
    <ButtonComponent />
   </Container>
  </>
 );
};

export default ProfileScreen;

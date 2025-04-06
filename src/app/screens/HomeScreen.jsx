import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderComponent from "../components/Home/HeaderComponent";
import SearchComponent from "../components/Home/SearchComponent";
import { ScrollView } from "react-native";
import PromotionsComponent from "../components/Home/PromotionsComponent";
import PopularDestinationComponent from "../components/Home/PopularDestinationComponent";

const HomeScreen = () => {
 return (
  <>
   <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
     <HeaderComponent />
     <SearchComponent />
     <PromotionsComponent />
     <PopularDestinationComponent />
    </ScrollView>
   </SafeAreaView>
  </>
 );
};
export default HomeScreen;

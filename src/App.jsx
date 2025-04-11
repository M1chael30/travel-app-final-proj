import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./app/navigation/StackNavigation";
import FontProvider from "./app/context/FontProvider";

export default function App() {
 return (
  <>
   <SafeAreaProvider>
    <NavigationContainer>
     <FontProvider>
      <StackNavigation />
     </FontProvider>
    </NavigationContainer>
   </SafeAreaProvider>
  </>
 );
}

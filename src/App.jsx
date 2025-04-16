import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./app/navigation/StackNavigation";
import FontProvider from "./app/context/FontProvider";
import AuthProvider from "./app/context/AuthProvider";

export default function App() {
 return (
  <>
   <AuthProvider>
    <FontProvider>
     <SafeAreaProvider>
      <NavigationContainer>
       <StackNavigation />
      </NavigationContainer>
     </SafeAreaProvider>
    </FontProvider>
   </AuthProvider>
  </>
 );
}

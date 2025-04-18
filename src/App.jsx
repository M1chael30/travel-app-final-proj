import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigation from "./app/navigation/StackNavigation";
import FontProvider from "./app/context/FontProvider";
import AuthProvider from "./app/context/AuthProvider";
import DataProvider from "./app/context/DataProvider";

export default function App() {
 return (
  <>
   <AuthProvider>
    <FontProvider>
     <DataProvider>
      <SafeAreaProvider>
       <NavigationContainer>
        <StackNavigation />
       </NavigationContainer>
      </SafeAreaProvider>
     </DataProvider>
    </FontProvider>
   </AuthProvider>
  </>
 );
}

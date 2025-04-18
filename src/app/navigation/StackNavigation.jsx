import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACK_SCREENS } from "../constants/screens";
import BottomNavigation from "./BottomNavigation";
import DetailsScreen from "../screens/DetailsScreen";
import { useAuth } from "../context/AuthProvider";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
 const value = useAuth();

 return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
   {!value.current_user ? (
    STACK_SCREENS.map((screen) => {
     return (
      <Stack.Screen
       options={{ headerShown: screen?.headerShown }}
       key={screen.name}
       name={screen.name}
       component={screen.component}
      />
     );
    })
   ) : (
    <>
     <Stack.Screen name="HomeIndex" component={BottomNavigation} />
     <Stack.Screen name="Details" component={DetailsScreen} />
    </>
   )}
  </Stack.Navigator>
 );
};

export default StackNavigation;

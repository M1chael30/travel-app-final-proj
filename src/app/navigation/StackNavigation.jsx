import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACK_SCREENS } from "../constants/screens";
import BottomNavigation from "./BottomNavigation";
import { AuthContext } from "../context/AuthProvider";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
 const { currentUser } = useContext(AuthContext);

 return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
   {!currentUser ? (
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
     <Stack.Screen
      name="Details"
      component={DetailsScreen}
     />
    </>
   )}
  </Stack.Navigator>
 );
};

export default StackNavigation;

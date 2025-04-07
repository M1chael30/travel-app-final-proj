import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACK_SCREENS } from "../constants/screens";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
 return (
  <Stack.Navigator
   screenOptions={{ headerShown: false }}
   initialRouteName="HomeIndex"
  >
   {STACK_SCREENS.map((screen) => {
    return (
     <Stack.Screen
      options={{ headerShown: screen?.headerShown }}
      key={screen.name}
      name={screen.name}
      component={screen.component}
     />
    );
   })}
  </Stack.Navigator>
 );
};

export default StackNavigation;

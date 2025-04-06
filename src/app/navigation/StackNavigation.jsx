import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { STACK_SCREENS } from "../constants/screens";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
 return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
   {STACK_SCREENS.map((screen) => {
    return (
     <Stack.Screen
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

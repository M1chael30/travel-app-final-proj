import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BOTTOM_SCREENS } from "../constants/screens";
import { COLOR } from "../constants/data";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
 return (
  <Tab.Navigator
   screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
     backgroundColor: COLOR.medyoYellow,
     borderTopWidth: 0,
    },
   }}
  >
   {BOTTOM_SCREENS.map((screen) => {
    return (
     <Tab.Screen
      key={screen.name}
      name={screen.name}
      component={screen.component}
      options={{
       tabBarActiveTintColor: COLOR.orange,
       tabBarInactiveTintColor: COLOR.gray,
       tabBarIcon: ({ _, color, size }) => (
        <screen.icon color={color} size={size} strokeWidth={2.5} />
       ),
      }}
     />
    );
   })}
  </Tab.Navigator>
 );
};

export default BottomNavigation;

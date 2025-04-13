import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";
import BottomNavigation from "../navigation/BottomNavigation";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";

import { Heart, Home, User } from "lucide-react-native";

export const STACK_SCREENS = [
 {
  name: "Splash",
  component: SplashScreen,
  headerShown: false,
 },
 {
  name: "Login",
  component: LoginScreen,
  headerShown: false,
 },
 {
  name: "Register",
  component: RegisterScreen,
  headerShown: false,
 },
 {
  name: "HomeIndex",
  component: BottomNavigation,
  headerShown: false,
 },
 {
  name: "Details",
  component: DetailsScreen,
  headerShown: false,
 },
];

export const BOTTOM_SCREENS = [
 {
  name: "Home",
  component: HomeScreen,
  icon: Home,
 },
 {
  name: "Favorite",
  component: FavoriteScreen,
  icon: Heart,
 },
 {
  name: "Profile",
  component: ProfileScreen,
  icon: User,
 },
];

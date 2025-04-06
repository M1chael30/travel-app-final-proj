import {
 Poppins_400Regular,
 Poppins_500Medium,
 Poppins_700Bold,
 useFonts,
} from "@expo-google-fonts/poppins";
import React, { createContext } from "react";

export const FontContext = createContext();

export default function FontProvider({ children }) {
 let [fontsLoaded] = useFonts({
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
 });
 if (!fontsLoaded) {
  return null;
 }
 return <FontContext.Provider value={null}>{children}</FontContext.Provider>;
}

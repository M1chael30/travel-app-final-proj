import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
 const [currentUser, setCurrentUser] = useState(null);

 // load user on app start
 useEffect(() => {
  const loadUser = async () => {
   try {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
     setCurrentUser(JSON.parse(storedUser));
    }
   } catch (e) {
    console.error("Error loading user", e);
   }
  };

  loadUser();
 }, []);

 // save user to storage whenever it changes
 useEffect(() => {
  const saveUser = async () => {
   if (currentUser) {
    await AsyncStorage.setItem("user", JSON.stringify(currentUser));
   } else {
    await AsyncStorage.removeItem("user");
   }
  };

  saveUser();
 }, [currentUser]);

 return (
  <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
   {children}
  </AuthContext.Provider>
 );
}

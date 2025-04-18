import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

export const DataContext = createContext();

export const useData = () => {
 return useContext(DataContext);
};

export default function DataProvider({ children }) {
 const [favorites, setFavorites] = useState([]);
 const value = useAuth();

 const userId = value?.current_user?.id;

 // load is favorite
 useEffect(() => {
  const loadIsFavorite = async () => {
   try {
    const favoritesData = await AsyncStorage.getItem("favorites");
    if (favoritesData) {
     setFavorites(JSON.parse(favoritesData));
     console.log("favorites ", favoritesData);
     return;
    }
   } catch (error) {
    console.log("error saving isFavorite: ", error.message);
   }
  };
  loadIsFavorite();
 }, []);

 const handleToggleIsFavorite = async (id, isfavorite) => {
  const newIsFavorite = {
   id: userId,
   travel_id: id,
   isFavorite: isfavorite,
  };
  console.log(newIsFavorite);

  try {
   const existingFavorites = await AsyncStorage.getItem("favorites");
   if (existingFavorites) {
    const parsedFavorites = JSON.parse(existingFavorites);
    const favoriteIndex = parsedFavorites.findIndex((f) => f.travel_id === id);

    if (favoriteIndex !== -1 && parsedFavorites[favoriteIndex].id === userId) {
     // Remove from favorites if it already exists and belongs to the current user
     const updatedFavorites = parsedFavorites.filter(
      (f) => f.travel_id !== id || f.id !== userId
     );
     await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
     setFavorites(updatedFavorites);
     alert("Removed from favorites");
     return;
    }
   }

   const updatedFavorites = [...favorites, newIsFavorite];
   await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
   setFavorites(updatedFavorites);
   alert("Added to favorites");
  } catch (error) {
   console.log(error.message);
  }
 };

 const values = {
  favorites,
  setFavorites,
  handleToggleIsFavorite,
 };

 return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}

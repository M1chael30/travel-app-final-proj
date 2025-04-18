import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
 return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
 const [currentUser, setCurrentUser] = useState(null);
 const [users, setUsers] = useState([]);

 // load user on app start
 useEffect(() => {
  const loadUser = async () => {
   try {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
     setCurrentUser(JSON.parse(storedUser));
     console.log("user -> ", storedUser);
    }
   } catch (e) {
    console.error("Error loading user ", e.message);
   }
  };

  loadUser();
 }, []);

 // load users[] on app start
 useEffect(() => {
  const loadUsers = async () => {
   try {
    const storedUsers = await AsyncStorage.getItem("users");
    if (storedUsers) {
     setUsers(JSON.parse(storedUsers));
     console.log("users -> ", storedUsers);
    }
   } catch (e) {
    console.error("Error loading users ", e.message);
   }
  };

  loadUsers();
 }, []);

 // register
 const handleRegister = async (email, username, password) => {
  // creating a object to pass it in the currentUser state
  const newUser = {
   id: Date.now(),
   email,
   username,
   password,
  };

  try {
   // before storing check email first
   const userData = await AsyncStorage.getItem("users");
   const user = userData ? JSON.parse(userData) : [];

   const existingEmail = user.some((e) => e.email === email);

   if (existingEmail) {
    alert("Email already taken");
    return;
   }

   // storing on async storage
   await AsyncStorage.setItem("users", JSON.stringify([...user, newUser]));

   // updating the global state
   setUsers((prev) => [...prev, newUser]);
   console.log("users -> ", newUser);
   alert("Registered successfull");
  } catch (error) {
   console.error("Error saving user:", error.message);
   alert("Login failed, please try again.");
  }
 };

 // login
 const handleLogin = async (email, password) => {
  try {
   // check if there is existing users
   const userData = await AsyncStorage.getItem("users");
   const user = userData ? JSON.parse(userData) : [];

   // check email and password
   const existingEmailAndPassword = user.find(
    (e) => e.email === email && e.password === password
   );

   if (!existingEmailAndPassword) {
    alert("Invalid credentials");
    return;
   }

   // storing on async storage
   const storedUser = await AsyncStorage.setItem(
    "user",
    JSON.stringify({
     id: existingEmailAndPassword.id,
     email: existingEmailAndPassword.email,
     isLoggedIn: true,
    })
   );

   // updating the global state
   setCurrentUser({
    id: existingEmailAndPassword.id,
    email: existingEmailAndPassword.email,
    isLoggedIn: true,
   });
   console.log("user -> ", storedUser);
   alert("Login successfull");
  } catch (error) {
   console.error("Error saving user:", error.message);
   alert("Login failed, please try again.");
  }
 };

 // logout
 const handleLogout = async () => {
  try {
   // removing item from async storage
   const removedUser = await AsyncStorage.removeItem("user");
   // const removedUsers = await AsyncStorage.removeItem("users");
   // set the global state to null
   setCurrentUser(null);
   // setUsers([]);
   console.log("user -> ", removedUser);
   alert("Log out successfull");
  } catch (error) {
   console.log("error removing data -> ", error.message);
  }
 };

 // delete account
 const handleDeleteAccount = async (id) => {
  try {
   // get user favorites
   const favoritesData = await AsyncStorage.getItem("favorites");
   const favorites = favoritesData ? JSON.parse(favoritesData) : [];

   // get the user data
   const userData = await AsyncStorage.getItem("users");
   const user = userData ? JSON.parse(userData) : [];

   // filter favorites data to remove
   const updatedFavorites = favorites.filter((f) => f.id !== id);

   // filter the data to remove account
   const updatedUser = user.filter((u) => u.id !== id);

   // remove data from users and user automatically logout
   await AsyncStorage.setItem("users", JSON.stringify(updatedUser));
   await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
   await AsyncStorage.removeItem("user");

   // set the global state
   setUsers(updatedUser);
   setCurrentUser(null);

   //
   alert("Deleted sucessfully");
  } catch (error) {
   alert("Error deleting account");
   console.log("error deleting account -> ", error.message);
  }
 };

 const value = {
  current_user: currentUser,
  users: users,
  set_current_user: setCurrentUser,
  login_function: handleLogin,
  logout_function: handleLogout,
  register_function: handleRegister,
  delete_function: handleDeleteAccount,
 };

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

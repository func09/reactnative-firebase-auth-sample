import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import useAuth from "./app/hooks/useAuth";

// Screens
import GuestScreen from "./app/screens/Guest";
import LoggedScreen from "./app/screens/Logged";

export default function App() {
  const currentUser = useAuth();
  if (currentUser) {
    return <LoggedScreen />;
  } else {
    return <GuestScreen />;
  }
}

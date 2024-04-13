import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./navigation/StackNavigator";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";


export default function App() {
  return (
    <>
      <StackNavigator />
    </>
  );
}

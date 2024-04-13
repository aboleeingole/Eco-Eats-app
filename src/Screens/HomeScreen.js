import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import HomeHeaderNav from "../components/HomeHeaderNav";
import { Feather } from "@expo/vector-icons";
import Categories from "../components/Categories";
import Slider from "../components/Slider";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeaderNav />
      <View style={styles.searchbox}>
        <Feather
          name="search"
          size={20}
          color="black"
          style={styles.searchicon}
        />
        <TextInput placeholder="Search" />
      </View>
      <Categories/>
      <Slider/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
  },

  searchbox: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    margin: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    width: "90%",
    fontSize: 18,
    color: "green",
  },
  searchicon: {
    color: "green",
  },
});

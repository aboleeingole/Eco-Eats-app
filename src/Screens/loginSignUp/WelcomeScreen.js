import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import logo from "../../../assets/logo.png";
const StartScreen = ({navigation}) => {
  return (
    <ScrollView>
    <ImageBackground
      source={require("../../../assets/bgh.png")} 
      style={{ flex: 1, alignItems: "center" }}
    >
      <View style={styles.container}>
      <View style={styles.logoout}>
          <Image source={logo} style={styles.logo} />
        </View>
        <Text style={styles.title1}>WELCOME TO</Text>
        <Text style={styles.title2}>ECO EATS</Text>
        

        <Text style={styles.text}>
          Find the best food around you at lowest price.
        </Text>

        <View style={styles.btnout}>
          <TouchableOpacity onPress={()=> navigation.navigate("register")}>
            <Text style={styles.btn}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("login")}>
            <Text style={styles.btn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    </ScrollView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  logoout: {
    width: "40%",
    height: "15%",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  title1: {
    fontSize: 40,
    color: "black",
    textAlign: "center",
    marginVertical: 10,
    fontWeight:"bold",
  },
  title2: {
    fontSize: 40,
    color: "black",
    textAlign: "center",
    marginVertical: 10,
    fontWeight:"bold",
    marginTop: -15,
  },
  
  text: {
    fontSize: 18,
    backgroundColor: "white",
    width: "80%",
    color: "black",
    textAlign: "center",
    marginVertical: 300,
    fontWeight: "900"
  },
  btnout: {
    flexDirection: "row",
  },
  btn: {
    fontSize: 20,
    color: "green",
    textAlign: "center",
    marginVertical: -550,
    marginHorizontal: 10,
    fontWeight: "700",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});
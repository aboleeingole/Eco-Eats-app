import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import logo from "../assets/logo.png"
const StartScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/try.png")} // Specify the path to your background image
      style={{ flex: 1, alignItems: "center" }}
    >
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO</Text>
      <Text style={styles.title}>ECO EATS</Text>
      <View style ={styles.logoout}>
        <Image source ={logo} style={styles.logo}/>
      </View>
      
      <Text style={styles.text}>Find the best food around you at lowest price.</Text>

      <View style={styles.btnout}>
      <TouchableOpacity>
        <Text style={styles.btn}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btn}>Login</Text>
      </TouchableOpacity>
      </View>
      
    </View>
    </ImageBackground>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width:"100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    fontWeight:"bold",
    fontSize: 50,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "200",
  },
  logoout:{
    width:"80%",
    height:"30%",
    alignItems: "center"
  },
  logo:{
    width: "100%",
    height: "100%",
  },
  text:{
    fontSize: 18, 
    width:"80%",
    color:"white",
    textAlign: "center",
  },
  btnout:{
    flexDirection: "row",

  },
  btn:{
    fontSize: 20, 
    color: "green",
    textAlign: "center",
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: "700",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },

})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

const HomeHeaderNav = () => {
  return (
    <View style={styles.conatainer}>
        <EvilIcons name="navicon" size={24} color="black" styles={styles.myicon}/>
      <View style={styles.containerin}>
        <Text style={styles.mytext}>Eco-Eats</Text>
      </View>
      <EvilIcons name="user" size={24} color="black" styles={styles.myicon}/>
    </View>
  )
}

export default HomeHeaderNav

const styles = StyleSheet.create({
    conatainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        backgroundColor: "white",
        elevation: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    containerin:{
      flexDirection: 'row',
      alignItems: "center",
    },
    myicon:{
      color: "red",
    },
    mytext:{
      color: "#2e8b57",
      fontSize: 24
    }
})
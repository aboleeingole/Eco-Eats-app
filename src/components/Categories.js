import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>

      <ScrollView horizontal >
      <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.mytext}>Burger</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome5
            name="pizza-slice"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.mytext}>Pizza</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons
            name="noodles"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.mytext}>Noodles</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome6
            name="plate-wheat"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.mytext}>Roti-Sabji</Text>
        </View>

        <View style={styles.box}>
          <FontAwesome6
            name="bowl-rice"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.mytext}>Rice Bowls</Text>
        </View>

        <View style={styles.box}>
        <MaterialIcons name="bakery-dining" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.mytext}>Bakery</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2e8b57",
    width: "100%",
    // height: 100 #0b6e4f,
    // alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
  },
  head: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    alignSelf: "center",
    paddingBottom: 5,
    borderBottomColor: "white",
    borderBottomWidth: 3,
  },
  box: {
    backgroundColor: "white",
    elevation: 20,
    margin: 10,
    padding: 10,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  myicon: {
    color: "green",
  },
  mytext: {
    color: "green",
  },
});

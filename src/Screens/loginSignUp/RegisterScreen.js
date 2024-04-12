import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const navigation = useNavigation();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      alert("Submitting data...");

      const response = await axios.post(
        "http://192.168.1.14:8000/register",
        {
          name,
          email,
          phoneNumber,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error registering user:", error);
      Alert.alert("Error", "Failed to register. Please try again later.");
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <View>
              <Text style={styles.head}>Register</Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    paddingVertical: 5,
                    borderRadius: 5,
                    marginTop: 10,
                    borderWidth: 2,
                    borderColor: "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <Ionicons
                    style={{ marginLeft: 10 }}
                    name="person-outline"
                    size={24}
                    color="black"
                  />

                  <TextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={{
                      color: "black",
                      marginVertical: 10,
                      width: 300,
                      fontSize: password ? 16 : 16,
                    }}
                    placeholder="Enter Name"
                  />
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    paddingVertical: 5,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <AntDesign
                    style={{ marginLeft: 10 }}
                    name="mobile1"
                    size={24}
                    color="black"
                  />
                  <TextInput
                    value={phoneNumber}
                    onChangeText={(text) => setphoneNumber(text)}
                    style={{
                      color: "gray",
                      marginVertical: 10,
                      width: 300,
                      fontSize: password ? 16 : 16,
                    }}
                    placeholder="Enter Phone Number"
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginTop: 20,
                  borderWidth: 2,
                  borderColor: "black",
                  backgroundColor: "transparent",
                }}
              >
                <Fontisto
                  style={{ marginLeft: 10 }}
                  name="email"
                  size={24}
                  color="black"
                />
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: email ? 16 : 16,
                  }}
                  placeholder="Enter email"
                />
              </View>

              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    paddingVertical: 5,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: "black",
                    backgroundColor: "transparent",
                  }}
                >
                  <MaterialIcons
                    style={{ marginLeft: 10 }}
                    name="password"
                    size={24}
                    color="black"
                  />
                  <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    style={{
                      color: "gray",
                      marginVertical: 10,
                      width: 300,
                      fontSize: password ? 16 : 16,
                    }}
                    placeholder="Enter password"
                  />
                </View>
              </View>

              <Pressable
                onPress={handleRegister}
                style={{
                  marginTop: 40,
                  width: 200,
                  backgroundColor: "#53a127",
                  borderRadius: 6,
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: 15,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.register()}
                style={{ marginTop: 15 }}
              >
                <Text style={styles.x} onPress={() => navigation.navigate("login")}>
                  Already have an account? 
                  <Text styles={styles.signup}> Login!</Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
  },
  head: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 3,
    color: "green",
  },
  signup: {
    color: "green",
  },
  x:{
    alignSelf: "center",
  },
});

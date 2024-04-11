import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/a.jpg")} // Specify the path to your background image
      style={{ flex: 1, alignItems: "center" }}
    >
      <ScrollView>
        <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
          <View>
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 150, height: 120, marginTop: 50 }}
            />
          </View>
          <KeyboardAvoidingView>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 12,
                  color: "#000",
                }}
              >
                Login in to your Account
              </Text>
            </View>

            <View style={{ marginTop: 50 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginTop: 30,
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
                    marginTop: 30,
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

              <View
                style={{
                  marginTop: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text>Keep me logged in</Text>

                <Text style={{ color: "#007FFF", fontWeight: "500" }}>
                  Forgot Password
                </Text>
              </View>

              <Pressable
                style={{
                  marginTop: 20,
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
                  Login
                </Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate("Register")}
                style={{ marginTop: 15 }}
              >
                <Text
                  style={{ textAlign: "center", color: "black", fontSize: 16 }}
                >
                  Don't have an account? Sign Up!
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

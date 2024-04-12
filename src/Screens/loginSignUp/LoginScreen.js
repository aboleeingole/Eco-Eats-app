import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
          
            <View>
              <Text style={styles.head}>Sign In</Text>
            </View>

            <View>
              <View style={styles.box}>
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
                    color: "grey",
                    marginVertical: 10,
                    width: 300,
                    fontSize: email ? 16 : 16,
                  }}
                  placeholder="Enter email"
                />
              </View>

              <View>
                <View style={styles.box}>
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

              <Pressable style={styles.btn}>
                <Text style={styles.btntext} onPress={()=> navigation.navigate("home")}>Login</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.forgot}>Forgot password</Text>
              <Text style={styles.or}>OR</Text>
              <Text style={styles.gftext}>Sign In With</Text>
            </View>

            <View style={styles.gf}>
              <TouchableOpacity>
                <View style={styles.gficon}>
                  <AntDesign name="google" size={24} color="green" />
                </View>
              </TouchableOpacity>
            </View>

            <Text onPress={()=> navigation.navigate("register")}>
              Don't have an account? 
              <Text styles={{color: "green"}}> Register!</Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 150,
  },
  
  head: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 12,
    color: "green",
  },
  btn: {
    marginTop: 20,
    width: 350,
    backgroundColor: "#53a127",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
  btntext: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  forgot: {
    color: "grey",
    marginTop: 20,
  },
  or: {
    alignSelf: "center",
    color: "green",
    marginVertical: 20,
    fontWeight: "bold",
  },
  gftext: {
    color: "black",
    marginVertical: 10,
    fontSize: 20,
  },
  gf: {
    alignItems: "center",
  },
  gficon: {
    backgroundColor: "white",
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 20,
  },
  signup:{
    color: "blue",
  }
});

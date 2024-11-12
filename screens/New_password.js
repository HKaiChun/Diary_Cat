import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const New_password = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/9.png")}
      />

      {/* Back Button */}
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require("../assets/1.png")} style={styles.backIcon} />
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>請輸入新密碼</Text>

      {/* New Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry={true}
        autoCapitalize="none"
      />

      {/* Confirm New Password Input */}
      <Text style={styles.label}>再輸入一次</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm new password"
        secureTextEntry={true}
        autoCapitalize="none"
      />

      {/* Confirm Button */}
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>確定</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dde2f2', // Placeholder background color
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    contentFit: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backIcon: {
    width: 30,
    height: 30,
    tintColor: '#438EFF',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
    marginBottom: 5,
    fontSize: 16,
    paddingLeft: 40, // Align the label with the input field
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#438EFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default New_password;

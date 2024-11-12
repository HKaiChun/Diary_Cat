import * as React from "react";
import { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../FirebaseConfig"; // Import Firebase auth instance
import { sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth"; // Import for sending email verification
// import auth from '@react-native-firebase/auth'; // Firebase Authentication

import { db } from "../FirebaseConfig"; // for realtime database
import { ref, set } from 'firebase/database'; // Import Firebase Realtime Database methods

import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Sign_up = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  // Authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Realtime Database
  const [userUid, setuserUid] = useState("");

  const handleSignUp = async (email, password) => {

    // Check if email or password is empty
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "帳號密碼不能為空");
      return; // Stop further execution if either field is empty
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const user = userCredential.user;
  
      // Send email verification
      await sendEmailVerification(user);
  
      Alert.alert("註冊成功，請查看電子郵件進行驗證");
  
      // Save user profile in Realtime Database
      const userRef = ref(db, `uid/${user.uid}/profile/`);
      await set(userRef, {
        // email,
        catName: "",
        gender: "",
        breed: "",
        color: "",
        age: "",
        birthday: "",
        ligation: ""
      });
  
      navigation.navigate("Login");
  
    } catch (error) {
      let errorMessage = error.message;
  
      // Handle specific error codes
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "帳號已經存在";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "密碼至少輸入六位數";
      }
  
      // console.error(errorMessage);
      Alert.alert("註冊失敗", errorMessage); // Display the error message
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/2.png")}
      />

      {/* Back Button */}
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/1.png')} style={styles.backIcon} />
      </Pressable>

      {/* Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>創建帳號</Text>

        <Text style={styles.label}>Email：</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          // value={email}
          // onChangeText={setEmail}
          onChangeText={(email) => setEmail(email)}
        />

        <Text style={styles.label}>密碼：</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          // value={password}
          // onChangeText={setPassword}
          onChangeText={(password) => setPassword(password)}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
        ) : (
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#bababa' : '#FFFFFF' },
            styles.button]}
          onPress={() => handleSignUp(email, password)/*() => navigation.navigate("Sign_up_confirmation")*/}
        >
          <Text style={styles.buttonText}>確定</Text>
        </Pressable>
        )}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dde2f2',
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
  formContainer: {
    width: '80%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: 'white',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#438EFF',
    fontSize: 18,
  },
});

export default Sign_up;

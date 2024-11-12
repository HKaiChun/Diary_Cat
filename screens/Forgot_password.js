import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useState } from "react"; // Import useState
import { sendPasswordResetEmail, fetchSignInMethodsForEmail  } from "firebase/auth";
import { FIREBASE_AUTH } from '../FirebaseConfig';

const Forgot_password = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(''); // Declare email state
  const auth = FIREBASE_AUTH;

  const validateEmail = (email) => {
    // Simple regex for email format validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const resetPassword = async() => {
    if (email === '') {
      alert("請輸入 email！");
    } else if (!validateEmail(email)) {
      alert("請輸入有效的 email 格式！");
    } else {
      // Check if the email exists
      // const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      // if (signInMethods.length === 0) {
      //   alert("該 email 不存在！");
      //   return;
      // }

      try {
        await sendPasswordResetEmail(auth, email);
        alert("已發送郵件，請檢查您的郵箱並按照說明重設密碼。");
        
        // Navigate to the Login screen after showing the alert
        navigation.navigate("Login");
  
      } catch (error) {
        alert(error.message);
      }
    }
  }

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
      <Text style={styles.title}>忘記密碼</Text>

      {/* Email Input */}
      <Text style={styles.label}>請輸入Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your registered email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail} // Update email state on input change
      />

      {/* Confirm Button */}
      <Pressable
        style={styles.button}
        onPress={() => resetPassword()}
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
    fontSize: 50,
    color: 'white',
    marginBottom: 40,
    // fontWeight: 'bold',
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
    marginBottom: 40,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#438EFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Forgot_password;

import * as React from "react";
import { Image } from "expo-image";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Pressable, View, TextInput, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from '../FirebaseConfig'
import { Border } from "../GlobalStyles";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from "../screens/AuthContext";

const Login = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    auth.signOut(); // 每次進入登入頁面時，強制登出
  }, []);

  const signIn = async () => {
    if (!email || !password) {
      // alert('Please enter a valid email and password.');
      alert('帳號密碼不能為空');
      return;
    }

    // Enhanced email format validation
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert('帳號格式錯誤');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if email is verified
      if (!user || !user.emailVerified) {
          alert("請驗證您的電子郵件後再嘗試登錄");
          setLoading(false);
          return; // Early return if email is not verified
      }
      
      navigation.replace('Mainpage'); // Proceed to main page
  } catch (error) {
      console.log(error);
      alert("帳號或密碼錯誤")
  }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/15.png")}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>登入</Text>
        
        {/* 以下{user.email}測試是否有成功登出，正常來講不應該會出現文字 */}
        {/* <Text style={styles.title}>{user.email}</Text> */}

        <Text style={styles.label}>Email：</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>密碼：</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true} // Hide the password input
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

{loading ? ( // Show loading indicator while loading
          <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
        ) : (
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? '#4e4cc2' : '#5E5BFF' },
              styles.button]}
            onPress={signIn}
          >
            <Text style={styles.buttonText}>登入</Text>
          </Pressable>
        )}

        <Pressable onPress={() => navigation.navigate("Forgot_password")}>
          <Text style={[styles.linkText, styles.underLine]}>忘記密碼？</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Sign_up")}>
          <Text style={styles.linkText}>註冊</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F365F',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    contentFit: 'cover',
  },
  formContainer: {
    width: '80%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    borderRadius: Border.br_61xl,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
  },
  rememberMeText: {
    color: 'white',
  },
  button: {
    width: '100%',
    height: 50,
    // backgroundColor: '#5E5BFF',
    borderRadius: Border.br_61xl,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  linkText: {
    color: 'white',
    marginTop: 25,
    fontSize: 18,
  },
  underLine: {
    textDecorationLine: "underline",
  }
});

export default Login;

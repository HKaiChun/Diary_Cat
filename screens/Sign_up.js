import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../FirebaseConfig"; // Import Firebase auth instance
import { sendSignInLinkToEmail } from "firebase/auth"; // Import for sending email verification
import { createUserWithEmailAndPassword } from "firebase/auth";

import { db } from "../FirebaseConfig"; // for realtime database
import { ref, set } from 'firebase/database'; // Import Firebase Realtime Database methods

import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Sign_up = () => {
  const navigation = useNavigation();
  // Authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Realtime Database
  const [userUid, setuserUid] = useState("");

  const handleSignUp = async () => {
    // Check if email or password is empty
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "帳號密碼不能為空");
      return; // Stop further execution if either field is empty
    }

    createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then(async (userCredential) => {
        // User registered successfully
        const user = userCredential.user;
        console.log("User registered:", user.email);

        // Save the user UID as a key without any value
        const userRef = ref(db, `uid/${user.uid}/`); // Specify the path to store just the UID
        await set(userRef, {
          description: '其他的內容'
        });


        // Show success message and navigate to Login
        Alert.alert(
          "註冊成功",
          `歡迎, ${user.email}! 您的帳號已創建.`,
          [
            {
              text: "確定",
              onPress: () => navigation.navigate("Login"),
            },
          ]
        );
      })
      .catch((error) => {
        let errorMessage = error.message;

        // Handle specific error codes
        if (error.code === "auth/email-already-in-use") {
          errorMessage = "帳號已經存在";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "密碼至少輸入六位數";
        }

        console.error("Error during sign up:", errorMessage);
        Alert.alert("註冊錯誤", errorMessage); // Display the error message
      });
  };

  return (
    // <Pressable
    //   style={styles.pressable}
    //   onPress={() => navigation.navigate("Sign_up_confirmation")}
    // >
    //   <Image
    //     style={[styles.icon, styles.iconPosition1]}
    //     contentFit="cover"
    //     source={require("../assets/2.png")}
    //   />
    //   <Text style={styles.text}>創建帳號</Text>
    //   <Image
    //     style={[styles.child, styles.itemLayout]}
    //     contentFit="cover"
    //     source={require("../assets/rectangle-14.png")}
    //   />
    //   <Image
    //     style={[styles.item, styles.itemLayout]}
    //     contentFit="cover"
    //     source={require("../assets/rectangle-14.png")}
    //   />
    //   <Text style={[styles.email, styles.textTypo]}>Email:</Text>
    //   <Text style={[styles.text1, styles.textTypo]}>密碼</Text>
    //   <Image
    //     style={[styles.icon1, styles.iconPosition]}
    //     contentFit="cover"
    //     source={require("../assets/3.png")}
    //   />
    //   <Image
    //     style={styles.icon2}
    //     contentFit="cover"
    //     source={require("../assets/1.png")}
    //   />
    //   <View style={[styles.rectangleParent, styles.groupChildLayout]}>
    //     <View style={[styles.groupChild, styles.groupChildLayout]} />
    //     <Text style={[styles.text2, styles.textTypo]}>確定</Text>
    //   </View>
    //   <Image
    //     style={[styles.inner, styles.iconPosition]}
    //     contentFit="cover"
    //     source={require("../assets/rectangle-2.png")}
    //   />
    //   <Image
    //     style={[styles.rectangleIcon, styles.iconPosition]}
    //     contentFit="cover"
    //     source={require("../assets/rectangle-2.png")}
    //   />
    // </Pressable>

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
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>密碼：</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

        <Pressable
          style={styles.button}
          onPress={handleSignUp/*() => navigation.navigate("Sign_up_confirmation")*/}
        >
          <Text style={styles.buttonText}>確定</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // iconPosition1: {
  //   left: 0,
  //   top: 0,
  // },
  // itemLayout: {
  //   height: 70,
  //   width: 275,
  //   borderRadius: Border.br_61xl,
  // },
  // textTypo: {
  //   fontFamily: FontFamily.katibehRegular,
  //   textAlign: "left",
  //   position: "absolute",
  // },
  // iconPosition: {
  //   left: 57,
  //   position: "absolute",
  // },
  // groupChildLayout: {
  //   height: 44,
  //   width: 128,
  //   position: "absolute",
  // },
  // icon: {
  //   width: 393,
  //   height: 852,
  //   position: "absolute",
  // },
  // text: {
  //   top: 188,
  //   left: 75,
  //   fontSize: FontSize.size_41xl,
  //   fontFamily: FontFamily.kapakana,
  //   textAlign: "left",
  //   color: Color.colorWhite,
  //   position: "absolute",
  // },
  // child: {
  //   left: 61,
  //   width: 275,
  //   borderRadius: Border.br_61xl,
  //   position: "absolute",
  //   top: 319,
  // },
  // item: {
  //   top: 487,
  //   left: 61,
  //   width: 275,
  //   borderRadius: Border.br_61xl,
  //   position: "absolute",
  // },
  // email: {
  //   top: 271,
  //   fontSize: FontSize.size_21xl,
  //   left: 78,
  //   fontFamily: FontFamily.katibehRegular,
  //   color: Color.colorWhite,
  // },
  // text1: {
  //   top: 426,
  //   fontSize: FontSize.size_13xl,
  //   left: 78,
  //   fontFamily: FontFamily.katibehRegular,
  //   color: Color.colorWhite,
  // },
  // icon1: {
  //   top: 25,
  //   width: 78,
  //   height: 71,
  // },
  // icon2: {
  //   top: 37,
  //   left: 71,
  //   width: 48,
  //   height: 48,
  //   position: "absolute",
  //   overflow: "hidden",
  // },
  // groupChild: {
  //   borderRadius: Border.br_34xl,
  //   left: 0,
  //   top: 0,
  //   backgroundColor: Color.colorWhite,
  // },
  // text2: {
  //   top: 15,
  //   left: 44,
  //   fontSize: FontSize.size_5xl,
  //   color: Color.colorMediumblue,
  //   width: 53,
  // },
  // rectangleParent: {
  //   top: 663,
  //   left: 134,
  // },
  // inner: {
  //   height: 70,
  //   width: 275,
  //   borderRadius: Border.br_61xl,
  //   top: 319,
  // },
  // rectangleIcon: {
  //   top: 464,
  //   height: 70,
  //   width: 275,
  //   borderRadius: Border.br_61xl,
  // },
  // pressable: {
  //   flex: 1,
  //   width: "100%",
  //   height: 844,
  //   overflow: "hidden",
  //   backgroundColor: Color.colorWhite,
  // },

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
    backgroundColor: '#FFFFFF',
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

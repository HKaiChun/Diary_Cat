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
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return emailRegex.test(email);
  };

  const resetPassword = async() => {
    if (email === '') {
      alert("請輸入 email！");
    } else if (!validateEmail(email)) {
      alert("請輸入有效的 email 格式！");
    } else {
      // Check if the email exists
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length === 0) {
        alert("該 email 不存在！");
        return;
      }

      await sendPasswordResetEmail(auth, email)
        .then(() => {
          // Alert after email is sent
          alert(
            "已發送郵件，請檢查您的郵箱並按照說明重設密碼。",
            [
              { text: "確定", onPress: () => navigation.navigate("Login") }
            ]
          );
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }

  return (
    // <Pressable
    //   style={styles.pressable}
    //   onPress={() => navigation.navigate("Forgot_password_verification")}
    // >
    //   <Image
    //     style={[styles.icon, styles.iconPosition]}
    //     contentFit="cover"
    //     source={require("../assets/9.png")}
    //   />
    //   <View style={[styles.rectangleParent, styles.groupChildLayout]}>
    //     <View style={[styles.groupChild, styles.groupChildLayout]} />
    //     <Text style={styles.text}>確定</Text>
    //   </View>
    //   <Text style={[styles.text1, styles.text1Clr]}>忘記密碼</Text>
    //   <Image
    //     style={styles.child}
    //     contentFit="cover"
    //     source={require("../assets/rectangle-1.png")}
    //   />
    //   <Text style={[styles.email, styles.text1Clr]}>
    //     <Text style={styles.text2}>請輸入註冊Email:</Text>
    //   </Text>
    //   <Pressable
    //     style={styles.pressable1}
    //     onPress={() => navigation.navigate("Login")}
    //   >
    //     <Image
    //       style={styles.icon1}
    //       contentFit="cover"
    //       source={require("../assets/10.png")}
    //     />
    //   </Pressable>
    //   <Image
    //     style={styles.icon2}
    //     contentFit="cover"
    //     source={require("../assets/11.png")}
    //   />
    // </Pressable>

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
  // iconPosition: {
  //   left: 0,
  //   top: 0,
  // },
  // groupChildLayout: {
  //   height: 43,
  //   width: 128,
  //   position: "absolute",
  // },
  // text1Clr: {
  //   color: Color.colorWhite,
  //   textAlign: "left",
  //   position: "absolute",
  // },
  // icon: {
  //   width: 393,
  //   position: "absolute",
  //   height: 833,
  // },
  // groupChild: {
  //   borderRadius: Border.br_34xl,
  //   backgroundColor: Color.colorWhite,
  //   left: 0,
  //   top: 0,
  // },
  // text: {
  //   top: 15,
  //   left: 44,
  //   color: Color.colorMediumblue,
  //   width: 53,
  //   height: 28,
  //   textAlign: "left",
  //   fontFamily: FontFamily.katibehRegular,
  //   fontSize: FontSize.size_5xl,
  //   position: "absolute",
  // },
  // rectangleParent: {
  //   top: 628,
  //   left: 132,
  // },
  // text1: {
  //   top: "20%",
  //   // left: 76,
  //   alignSelf: "center",
  //   fontSize: FontSize.size_41xl,
  //   fontFamily: FontFamily.kapakana,
  //   // width: 240,
  //   // height: 58,
  // },
  // child: {
  //   top: 396,
  //   left: 61,
  //   borderRadius: Border.br_61xl,
  //   width: 275,
  //   height: 68,
  //   position: "absolute",
  // },
  // text2: {
  //   fontSize: FontSize.size_5xl,
  // },
  // email1: {
  //   fontSize: FontSize.size_21xl,
  // },
  // email: {
  //   top: 359,
  //   left: 77,
  //   width: 199,
  //   height: 47,
  //   fontFamily: FontFamily.katibehRegular,
  //   color: Color.colorWhite,
  // },
  // icon1: {
  //   height: "100%",
  //   width: "100%",
  // },
  // pressable1: {
  //   left: 10,
  //   top: 20,
  //   width: 101,
  //   height: 103,
  //   position: "absolute",
  // },
  // icon2: {
  //   top: 50,
  //   left: 37,
  //   width: 48,
  //   height: 48,
  //   overflow: "hidden",
  //   position: "absolute",
  // },
  // pressable: {
  //   flex: 1,
  //   height: 833,
  //   width: "100%",
  // },

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

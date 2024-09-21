import * as React from "react";
import { Image } from "expo-image";
import { useState } from 'react';
import { StyleSheet, Text, Pressable, View, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from '../FirebaseConfig'
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';

const Login = () => {
  const navigation = useNavigation();

  // return (
  //   <View style={styles.view}>
  //     <Image
  //       style={styles.icon}
  //       contentFit="cover"
  //       source={require("../assets/15.png")}
  //     />
  //     <Text style={[styles.text1, styles.textFlexBox]}>登入</Text>
  //     {/* email 輸入框 */}
  //     {/* <Image
  //       style={[styles.child, styles.itemLayout]}
  //       contentFit="cover"
  //       source={require("../assets/rectangle-13.png")}
  //     /> */}
  //     <TextInput
  //       style={[styles.input, styles.itemLayout]}
  //       placeholder="Enter your email"
  //       keyboardType="email-address"
  //       autoCapitalize="none"
  //     />

  //     {/* password 輸入框 */}
  //     {/* <Image
  //       style={[styles.item, styles.itemLayout]}
  //       contentFit="cover"
  //       source={require("../assets/rectangle-13.png")}
  //     /> */}
  //     <TextInput
  //       style={[styles.input, styles.itemLayout]}
  //       placeholder="Enter your password"
  //       secureTextEntry={true} // Hide the password input
  //       autoCapitalize="none"
  //     />
  //     {/* <View style={styles.inner} /> */}
  //     <Pressable style={styles.inner}
  //       onPress={() => navigation.navigate("Mainage")}
  //     >
  //       {/* <Text style={[styles.text2, styles.textTypo]}>登入</Text> */}
  //       <Text>登入</Text>
  //     </Pressable>

  //     {/* <Image
  //       style={styles.vectorIcon}
  //       contentFit="cover"
  //       source={require("../assets/vector2.png")}
  //     /> */}
  //     <Pressable
  //       style={styles.pressable1}
  //       onPress={() => navigation.navigate("Sign_up")}
  //     >
  //       <Text style={[styles.text3, styles.textTypo]}>註冊</Text>
  //     </Pressable>
  //     {/* <Text style={[styles.text4, styles.textFlexBox]}>忘記密碼</Text> */}
  //     <Pressable
  //       style={styles.pressable}
  //       onPress={() => navigation.navigate("Forgot_password")}
  //     >
  //       <Text style={[styles.text, styles.textFlexBox]}>忘記密碼</Text>
  //     </Pressable>
  //   </View>
  // );

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    if (!email || !password) {
      // alert('Please enter a valid email and password.');
      alert('帳號密碼不能為空');
      return;
    }

    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        navigation.replace('Mainpage', { userEmail: user.user.email }); // pass the email
      }
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    }
    setLoading(false);
  };

  // 這是註冊（新增使用者）函式，這裡還用不到
  // const signUp = async () => {
  //   setLoading(true);
  //   try {
  //     const user = await createUserWithEmailAndPassword(auth, email, password);
  //     if (user) router.replace('/Sign_up');
  //   } catch (error) {
  //     console.log(error);
  //     alert('Sign in failed: ' + error.message);
  //   }
  //   setLoading(false);
  // };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("../assets/15.png")}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>登入</Text>
        
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
        
        {/* <View style={styles.rememberMeContainer}>
          <Pressable style={styles.checkbox}>
          </Pressable>
          <Text style={styles.rememberMeText}>記住密碼</Text>
        </View> */}
        
        <Pressable 
          style={styles.button}
          onPress={signIn/*() => navigation.navigate("Mainpage")*/}
        >
          <Text style={styles.buttonText}>登入</Text>
        </Pressable>
        
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

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     marginBottom: 16,
//     padding: 8,
//     borderRadius: 4,
//     backgroundColor: Color.colorGainsboro_200,
//   },
//   textFlexBox: {
//     // textAlign: "left",
//     color: Color.colorWhite,
//   },
//   itemLayout: {
//     top: "40%",
//     height: 70,
//     width: 275,
//     borderRadius: Border.br_61xl,
//     left: 59,
//     // position: "absolute",
//   },
//   emailPosition: {
//     left: 67,
//     textAlign: "left",
//     color: Color.colorWhite,
//     fontFamily: FontFamily.katibehRegular,
//     position: "absolute",
//   },
//   textTypo: {
//     fontSize: FontSize.size_5xl,
//     textAlign: "left",
//     fontFamily: FontFamily.katibehRegular,
//   },
//   icon: {
//     top: 0,
//     left: -5,
//     width: 393,
//     position: "absolute",
//     height: 852,
//   },
//   text: {
//     fontSize: 28,
//     fontFamily: FontFamily.katibehRegular,
//     textDecorationLine: "underline",
//     textAlign: "left",
//   },
//   pressable: {
//     left: "37.4%",
//     top: "65.26%",
//     position: "absolute",
//   },
//   text1: {
//     top: 187,
//     left: 136,
//     fontSize: FontSize.size_41xl,
//     fontFamily: FontFamily.kapakana,
//     position: "absolute",
//   },
//   child: {
//     top: "40%",
//   },
//   // item: {
//   //   top: "50%",
//   // },
//   email: {
//     top: 266,
//     fontSize: FontSize.size_21xl,
//   },
//   inner: {
//     top: 604,
//     left: 128,
//     borderRadius: Border.br_34xl,
//     backgroundColor: Color.colorGainsboro_200,
//     width: 128,
//     height: 44,
//     position: "absolute",
//   },
//   text2: {
//     top: 621,
//     left: 173,
//     // color: Color.colorMediumblue,
//     color: Color.colorWhite,
//     width: 53,
//     height: 94,
//     position: "absolute",
//   },
//   vectorIcon: {
//     height: "3.17%",
//     width: "7.12%",
//     top: "64.55%",
//     right: "66.67%",
//     bottom: "32.28%",
//     left: "26.21%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     maxHeight: "100%",
//     position: "absolute",
//   },
//   text3: {
//     textShadowColor: "rgba(0, 0, 0, 0.25)",
//     textShadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     textShadowRadius: 4,
//     color: Color.colorWhite,
//     fontSize: FontSize.size_5xl,
//   },
//   pressable1: {
//     left: 167,
//     top: 775,
//     position: "absolute",
//   },
//   text4: {
//     height: "5.4%",
//     width: "27.48%",
//     top: "83.92%",
//     left: "38.42%",
//     fontSize: FontSize.size_xl,
//     fontFamily: FontFamily.katibehRegular,
//     textDecorationLine: "underline",
//     textAlign: "left",
//     position: "absolute",
//   },
//   text5: {
//     top: 426,
//     fontSize: FontSize.size_13xl,
//   },
//   view: {
//     flex: 1,
//     width: "100%",
//     height: 852,
//   },
// });


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
    backgroundColor: '#5E5BFF',
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

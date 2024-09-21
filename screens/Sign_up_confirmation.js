import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../FirebaseConfig"; // Import Firebase auth instance
import { verifyPasswordResetCode } from "firebase/auth"; // Import for verification
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Sign_up_confirmation = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params; // Get email passed from Sign_up
  const [verificationCode, setVerificationCode] = useState("");
  
  const handleVerifyCode = async () => {
    try {
      await verifyPasswordResetCode(FIREBASE_AUTH, verificationCode);
      // Now you can create the user in Firebase
      // Example: createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      Alert.alert("驗證成功", "帳戶創建成功");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Verification failed:", error);
      Alert.alert("驗證失敗", error.message);
    }
  };

  return (
    // <Pressable
    //   style={styles.pressable}
    //   onPress={() => navigation.navigate("Login")}
    // >
    //   <Image
    //     style={[styles.icon, styles.iconPosition]}
    //     contentFit="cover"
    //     source={require("../assets/2.png")}
    //   />
    //   <Image
    //     style={styles.icon1}
    //     contentFit="cover"
    //     source={require("../assets/3.png")}
    //   />
    //   <Image
    //     style={styles.icon2}
    //     contentFit="cover"
    //     source={require("../assets/1.png")}
    //   />
    //   <Image
    //     style={styles.child}
    //     contentFit="cover"
    //     source={require("../assets/rectangle-2.png")}
    //   />
    //   <Text style={styles.text}>請輸入驗證碼</Text>
    //   <View style={[styles.rectangleParent, styles.groupChildLayout]}>
    //     <View style={[styles.groupChild, styles.groupChildLayout]} />
    //     <Text style={[styles.text1, styles.textTypo]}>確定</Text>
    //   </View>
    //   <Text style={[styles.text2, styles.textTypo]}>沒收到驗證嗎?</Text>
    // </Pressable>

    <View style={styles.container}>
      {/* Background Image */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/2.png")}
      />

      {/* Back Button */}
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require("../assets/1.png")} style={styles.backIcon} />
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>請輸入驗證碼</Text>

      {/* Verification Code Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your code"
        keyboardType="number-pad"
      />

      {/* Resend Verification */}
      <Pressable onPress={() => { /* Add resend logic here */ }}>
        <Text style={styles.linkText}>沒收到驗證嗎?</Text>
      </Pressable>

      {/* Confirm Button */}
      <Pressable 
        style={styles.button}
        onPress={handleVerifyCode/*() => navigation.navigate("Login")*/}
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
  //   height: 44,
  //   width: 128,
  //   position: "absolute",
  // },
  // textTypo: {
  //   fontFamily: FontFamily.katibehRegular,
  //   fontSize: FontSize.size_5xl,
  //   textAlign: "left",
  //   position: "absolute",
  // },
  // icon: {
  //   width: 393,
  //   position: "absolute",
  //   height: 852,
  // },
  // icon1: {
  //   top: 22,
  //   left: 22,
  //   width: 78,
  //   height: 71,
  //   position: "absolute",
  // },
  // icon2: {
  //   top: 33,
  //   left: 37,
  //   width: 48,
  //   height: 48,
  //   overflow: "hidden",
  //   position: "absolute",
  // },
  // child: {
  //   top: 327,
  //   left: 65,
  //   borderRadius: Border.br_61xl,
  //   width: 275,
  //   height: 70,
  //   position: "absolute",
  // },
  // text: {
  //   top: 225,
  //   left: 45,
  //   fontSize: FontSize.size_33xl,
  //   fontFamily: FontFamily.kapakana,
  //   color: Color.colorGray_400,
  //   textAlign: "left",
  //   position: "absolute",
  // },
  // groupChild: {
  //   borderRadius: Border.br_34xl,
  //   backgroundColor: Color.colorWhite,
  //   left: 0,
  //   top: 0,
  // },
  // text1: {
  //   top: 15,
  //   left: 44,
  //   color: Color.colorMediumblue,
  //   width: 53,
  // },
  // rectangleParent: {
  //   top: 562,
  //   left: 138,
  // },
  // text2: {
  //   top: 465,
  //   left: 121,
  //   color: Color.colorWhite,
  // },
  // pressable: {
  //   flex: 1,
  //   width: "100%",
  //   height: 852,
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
  title: {
    fontSize: 50,
    color: 'white',
    marginBottom: 40,
    // fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  linkText: {
    color: 'white',
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 18,
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

export default Sign_up_confirmation;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Forgot_password_verification = () => {
  const navigation = useNavigation();

  return (
    // <Pressable
    //   style={styles.pressable}
    //   onPress={() => navigation.navigate("New_password")}
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
    //   <Pressable
    //     style={styles.pressable1}
    //     onPress={() => navigation.navigate("Forgot_password")}
    //   >
    //     <Image
    //       style={styles.icon2}
    //       contentFit="cover"
    //       source={require("../assets/1.png")}
    //     />
    //   </Pressable>
    //   <Image
    //     style={styles.child}
    //     contentFit="cover"
    //     source={require("../assets/rectangle-2.png")}
    //   />
    //   <Text style={styles.text}>請輸入驗證碼</Text>
    //   <Pressable
    //     style={[styles.rectangleParent, styles.groupChildLayout]}
    //     onPress={() => navigation.navigate("New_password")}
    //   >
    //     <View style={[styles.groupChild, styles.groupChildLayout]} />
    //     <Text style={[styles.text1, styles.textTypo]}>確定</Text>
    //   </Pressable>
    //   <Text style={[styles.text2, styles.textTypo]}>沒收到驗證嗎?</Text>
    // </Pressable>

    <View style={styles.container}>
      {/* Background Image */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/2.png")}
      />

      {/* Back Button */}
      <Pressable onPress={() => navigation.navigate("Forgot_password")} style={styles.backButton}>
        <Image source={require("../assets/1.png")} style={styles.backIcon} />
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>請輸入驗證碼</Text>

      {/* Verification Code Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter verification code"
        keyboardType="number-pad"
      />

      {/* Resend Verification Text */}
      <Text style={styles.linkText}>沒收到驗證嗎?</Text>

      {/* Confirm Button */}
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate("New_password")}
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
  //   height: "100%",
  //   overflow: "hidden",
  //   width: "100%",
  // },
  // pressable1: {
  //   left: 37,
  //   top: 33,
  //   width: 48,
  //   height: 48,
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
  //   height: 852,
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

export default Forgot_password_verification;

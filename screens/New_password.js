import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const New_password = () => {
  const navigation = useNavigation();

  return (
    // <View style={styles.view}>
    //   <Image
    //     style={[styles.icon, styles.iconPosition]}
    //     contentFit="cover"
    //     source={require("../assets/13.png")}
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
    //     style={[styles.child, styles.itemLayout]}
    //     contentFit="cover"
    //     source={require("../assets/rectangle-2.png")}
    //   />
    //   <Text style={styles.text}>請輸入新密碼</Text>
    //   <Pressable
    //     style={[styles.rectangleParent, styles.groupChildLayout]}
    //     onPress={() => navigation.navigate("Login")}
    //   >
    //     <View style={[styles.groupChild, styles.groupChildLayout]} />
    //     <Text style={[styles.text1, styles.textTypo]}>確定</Text>
    //   </Pressable>
    //   <Text style={[styles.text2, styles.textTypo]}>再輸入一次</Text>
    //   <Image
    //     style={[styles.item, styles.itemLayout]}
    //     contentFit="cover"
    //     source={require("../assets/rectangle-2.png")}
    //   />
    // </View>

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
  // iconPosition: {
  //   left: 0,
  //   top: 0,
  // },
  // itemLayout: {
  //   height: 70,
  //   width: 275,
  //   borderRadius: Border.br_61xl,
  //   left: 56,
  //   position: "absolute",
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
  //   top: 277,
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
  //   top: 672,
  //   left: 133,
  // },
  // text2: {
  //   top: 397,
  //   color: Color.colorWhite,
  //   left: 133,
  // },
  // item: {
  //   top: 441,
  // },
  // view: {
  //   flex: 1,
  //   width: "100%",
  //   height: 852,
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

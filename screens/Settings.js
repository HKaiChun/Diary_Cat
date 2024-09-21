import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/0.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/rectangle-15.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Enter_old_password")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/rectangle-15.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textFlexBox]}>通知</Text>
      <Text style={[styles.text1, styles.textTypo]}>切換帳號</Text>
      <Text style={[styles.text2, styles.textTypo]}>更改密碼</Text>
      <Text style={[styles.text3, styles.textFlexBox]}>Diary_Cat</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.text4, styles.textFlexBox]}>開啟</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 60,
    width: 283,
    left: 54,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    height: 40,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  icon: {
    top: 19,
    left: 21,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon1: {
    top: 30,
    left: 36,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    top: 238,
    left: 53,
    width: 285,
    height: 58,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    borderRadius: Border.br_xl,
    width: "100%",
  },
  wrapper: {
    top: 611,
  },
  container: {
    top: 422,
  },
  text: {
    top: 246,
    left: 124,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  text1: {
    top: 621,
    left: 141,
    width: 128,
  },
  text2: {
    top: 432,
    left: 130,
    width: 190,
  },
  text3: {
    marginTop: -403,
    marginLeft: -65,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
    width: 242,
  },
  vectorIcon: {
    height: "4.86%",
    width: "10%",
    top: "29.03%",
    right: "37.44%",
    bottom: "66.11%",
    left: "52.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text4: {
    top: 247,
    left: 261,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  view: {
    backgroundColor: Color.colorLightyellow,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Settings;

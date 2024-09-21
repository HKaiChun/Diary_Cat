import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Initial_screen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate("Login")}
    >
      <View style={[styles.view, styles.viewPosition]}>
        <Image
          style={[styles.icon, styles.viewPosition]}
          contentFit="cover"
          source={require("../assets/7.png")}
        />
        <Image
          style={styles.s6266884PreviewRev11Icon}
          contentFit="cover"
          source={require("../assets/s--6266884-preview-rev-1-1.png")}
        />
        <Text style={[styles.welcome, styles.textTypo]}>Welcome !</Text>
        <Text style={[styles.text, styles.textTypo]}>點擊畫面進入</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  viewPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 852,
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.katibehRegular,
    position: "absolute",
  },
  icon: {
    width: 393,
  },
  s6266884PreviewRev11Icon: {
    top: 195,
    left: 43,
    width: 300,
    height: 214,
    position: "absolute",
  },
  welcome: {
    top: 409,
    left: 35,
    fontSize: 96,
  },
  text: {
    top: 636,
    left: 121,
    fontSize: FontSize.size_5xl,
  },
  view: {
    backgroundColor: Color.colorWhite,
    width: 390,
    overflow: "hidden",
  },
  pressable: {
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default Initial_screen;

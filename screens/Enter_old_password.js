import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Enter_old_password = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/13.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/3.png")}
      />
      <Image
        style={styles.icon2}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>請輸入舊密碼</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("New_password")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.text1, styles.textFlexBox]}>確定</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 128,
    position: "absolute",
  },
  icon: {
    left: -3,
    width: 393,
    top: 0,
    position: "absolute",
    height: 852,
  },
  icon1: {
    top: 22,
    left: 22,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon2: {
    top: 33,
    left: 37,
    width: 48,
    height: 48,
    overflow: "hidden",
    position: "absolute",
  },
  child: {
    top: 348,
    left: 64,
    borderRadius: Border.br_61xl,
    width: 275,
    height: 70,
    position: "absolute",
  },
  text: {
    top: 225,
    left: 45,
    fontSize: FontSize.size_33xl,
    fontFamily: FontFamily.kapakana,
    color: Color.colorGray_400,
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_34xl,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  text1: {
    top: 15,
    left: 44,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.katibehRegular,
    color: Color.colorMediumblue,
    width: 53,
  },
  rectangleParent: {
    top: 672,
    left: 133,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 852,
  },
});

export default Enter_old_password;

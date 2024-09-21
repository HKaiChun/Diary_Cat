import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Pets_only= () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Weight_homepage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/0.png")}
        />
      </Pressable>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <View style={[styles.child, styles.itemLayout]} />
      <Image
        style={styles.githubIcon}
        contentFit="cover"
        source={require("../assets/github.png")}
      />
      <Pressable
        style={[styles.item, styles.itemLayout]}
        onPress={() => navigation.navigate("User_and_pets")}
      />
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union1.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>人+寵物</Text>
      <Text style={[styles.text1, styles.textTypo1]}>僅寵物</Text>
      <Text style={[styles.text2, styles.textTypo]}>寵物重量</Text>
      <View style={[styles.inner, styles.kgPosition]} />
      <Text style={[styles.kg, styles.kgPosition]}>kg</Text>
      <Text style={[styles.text3, styles.text3Position]}>測量日期:</Text>
      <View style={[styles.rectangleView, styles.text3Position]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Weight_homepage")}
      />
      <Text style={[styles.text4, styles.textFlexBox]}>記一筆</Text>
      <Text style={[styles.text5, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 167,
    width: 158,
    borderWidth: 1,
    borderColor: Color.colorGoldenrod,
    borderStyle: "solid",
    borderRadius: Border.br_4xl,
    top: 166,
    position: "absolute",
  },
  textTypo1: {
    height: 40,
    width: 125,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  textTypo: {
    height: 34,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  kgPosition: {
    top: 434,
    position: "absolute",
  },
  text3Position: {
    left: 32,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    left: 13,
    top: 51,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon1: {
    top: 62,
    width: 48,
    height: 48,
    left: 28,
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    left: 216,
    backgroundColor: Color.colorDarkseagreen,
  },
  githubIcon: {
    top: 178,
    left: 253,
    width: 82,
    height: 83,
    position: "absolute",
    overflow: "hidden",
  },
  item: {
    backgroundColor: Color.colorCornsilk,
    left: 28,
    width: 158,
    borderWidth: 1,
    borderColor: Color.colorGoldenrod,
    borderStyle: "solid",
    borderRadius: Border.br_4xl,
    top: 166,
  },
  unionIcon: {
    width: 112,
    height: 77,
  },
  text: {
    top: 261,
    left: 47,
  },
  text1: {
    top: 268,
    left: 249,
  },
  text2: {
    top: 377,
    left: 34,
    width: 277,
    height: 34,
    position: "absolute",
  },
  inner: {
    left: 100,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 160,
    height: 47,
  },
  kg: {
    left: 205,
    width: 41,
    height: 34,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  text3: {
    top: 534,
    height: 34,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    width: 277,
  },
  rectangleView: {
    top: 583,
    backgroundColor: "rgba(118, 118, 118, 0.35)",
    width: 352,
    height: 53,
  },
  rectanglePressable: {
    top: 680,
    left: 89,
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorMistyrose_100,
    width: 231,
    height: 85,
    position: "absolute",
  },
  text4: {
    top: 698,
    left: 154,
    width: 239,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    height: 48,
  },
  text5: {
    marginTop: -374,
    marginLeft: -71.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
    width: 242,
  },
  view: {
    backgroundColor: Color.colorLightgoldenrodyellow,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Pets_only;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const User_and_pets = () => {
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
      <View style={[styles.child, styles.itemLayout]} />
      <Pressable
        style={[styles.item, styles.itemLayout]}
        onPress={() => navigation.navigate("Pets_only")}
      />
      <Text style={[styles.text, styles.textTypo1]}>人+寵物</Text>
      <Text style={[styles.text1, styles.textTypo1]}>僅寵物</Text>
      <Image
        style={styles.githubIcon}
        contentFit="cover"
        source={require("../assets/github.png")}
      />
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>主人+寵物重量</Text>
      <Text style={[styles.text3, styles.textTypo]}>主人重量</Text>
      <Text style={[styles.text4, styles.textTypo]}>寵物重量:</Text>
      <Text style={[styles.text5, styles.textTypo]}>測量日期:</Text>
      <View style={styles.inner} />
      <Text style={[styles.kg, styles.kgTypo]}>kg</Text>
      <View style={[styles.rectangleView, styles.child1Layout]} />
      <Text style={[styles.kg1, styles.kgTypo]}>kg</Text>
      <View style={[styles.child1, styles.child1Layout]} />
      <Text style={[styles.kg2, styles.kgTypo]}>kg</Text>
      <View style={styles.child2} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Weight_homepage")}
      />
      <Text style={[styles.text6, styles.textFlexBox]}>記一筆</Text>
      <Text style={[styles.text7, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 166,
    width: 158,
    borderWidth: 1,
    borderColor: Color.colorGoldenrod,
    borderStyle: "solid",
    borderRadius: Border.br_4xl,
    top: 160,
    position: "absolute",
  },
  textTypo1: {
    height: 40,
    width: 125,
    top: 261,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  textTypo: {
    height: 34,
    width: 277,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  kgTypo: {
    width: 41,
    height: 34,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  child1Layout: {
    left: 115,
    height: 47,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    top: 51,
    left: 13,
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
    left: 30,
    backgroundColor: Color.colorDarkseagreen,
  },
  item: {
    left: 216,
    backgroundColor: Color.colorCornsilk,
  },
  text: {
    left: 47,
  },
  text1: {
    left: 249,
  },
  githubIcon: {
    top: 178,
    left: 253,
    width: 82,
    height: 83,
    position: "absolute",
    overflow: "hidden",
  },
  unionIcon: {
    width: 112,
    height: 76,
  },
  text2: {
    top: 376,
    left: 36,
    height: 34,
    width: 277,
  },
  text3: {
    top: 494,
    left: 36,
    height: 34,
    width: 277,
  },
  text4: {
    top: 625,
    left: 132,
  },
  text5: {
    top: 744,
    left: 28,
  },
  inner: {
    left: 116,
    height: 47,
    width: 160,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_5xl,
    top: 428,
    position: "absolute",
  },
  kg: {
    left: 221,
    top: 428,
    width: 41,
  },
  rectangleView: {
    top: 550,
  },
  kg1: {
    left: 220,
    top: 550,
  },
  child1: {
    top: 678,
  },
  kg2: {
    top: 681,
    left: 228,
  },
  child2: {
    top: 793,
    backgroundColor: Color.colorGainsboro_100,
    width: 352,
    height: 53,
    left: 28,
    position: "absolute",
  },
  rectanglePressable: {
    top: 890,
    left: 85,
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorMistyrose_100,
    width: 231,
    height: 85,
    position: "absolute",
  },
  text6: {
    top: 908,
    left: 150,
    width: 239,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    height: 48,
  },
  text7: {
    marginTop: -461,
    marginLeft: -75.5,
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
    width: "100%",
    height: 1004,
    overflow: "hidden",
  },
});

export default User_and_pets;

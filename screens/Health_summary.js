import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Health_summary = () => {
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
      <View style={[styles.child, styles.childLayout]} />
      <Text style={[styles.text, styles.textTypo]}>飲水</Text>
      <View style={[styles.item, styles.itemLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>支出</Text>
      <View style={[styles.inner, styles.childLayout]} />
      <View style={[styles.rectangleView, styles.text3Position]} />
      <Text style={styles.text2}>體重</Text>
      <Text style={[styles.text3, styles.text3Position]}>疫苗接種</Text>
      <View style={styles.child1} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Mainpage")}
      />
      <Text style={styles.text4}>確定</Text>
      <Text style={styles.text5}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 37,
    width: 125,
    left: 60,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  textTypo: {
    color: Color.iconDefaultDefault,
    textAlign: "left",
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
  },
  itemLayout: {
    left: 219,
    height: 37,
    width: 125,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
  },
  text3Position: {
    top: 206,
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
    top: 132,
  },
  text: {
    textAlign: "left",
    left: 98,
    color: Color.iconDefaultDefault,
    top: 132,
    position: "absolute",
  },
  item: {
    top: 130,
    position: "absolute",
  },
  text1: {
    left: 257,
    textAlign: "left",
    top: 132,
    position: "absolute",
  },
  inner: {
    top: 208,
  },
  rectangleView: {
    left: 219,
    height: 37,
    width: 125,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
  },
  text2: {
    top: 210,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
    left: 98,
    position: "absolute",
  },
  text3: {
    left: 239,
    textAlign: "left",
    color: Color.iconDefaultDefault,
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
  },
  child1: {
    top: 293,
    left: 49,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 286,
    height: 399,
    position: "absolute",
  },
  rectanglePressable: {
    top: 744,
    left: 113,
    width: 165,
    height: 62,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  text4: {
    top: 755,
    left: 163,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  text5: {
    marginTop: -403,
    marginLeft: -59,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
    width: 242,
    textAlign: "left",
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorLightyellow,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Health_summary;

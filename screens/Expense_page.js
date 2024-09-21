import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Expense_page = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/5.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/6.png")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Mainpage")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/0.png")}
        />
      </Pressable>
      <Image
        style={styles.icon3}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Image
        style={[styles.child, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-17.png")}
      />
      <Image
        style={[styles.item, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.inner, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>本月支出</Text>
      <Text style={[styles.text1, styles.textTypo1]}>累計支出</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Expense_overview")}
      />
      <View style={[styles.rectangleView, styles.text2Position]} />
      <Text style={[styles.text2, styles.text2Position]}>{`記帳分類
(我還沒想好)`}</Text>
      <View style={[styles.child1, styles.childPosition]} />
      <View style={[styles.child2, styles.childPosition]} />
      <Text style={[styles.text3, styles.textTypo]}>最近幾筆紀錄</Text>
      <Text style={[styles.text4, styles.textTypo]}>記帳</Text>
      <Text style={[styles.text5, styles.iconPosition]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    left: 73,
    position: "absolute",
  },
  itemLayout: {
    height: 137,
    width: 152,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  text2Position: {
    display: "none",
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorGainsboro_200,
    left: 73,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    marginLeft: -64.5,
    top: 122,
    width: 141,
    height: 142,
  },
  icon1: {
    top: 133,
    left: 142,
    width: 122,
    height: 121,
    position: "absolute",
  },
  icon2: {
    width: "100%",
    height: "100%",
  },
  pressable: {
    left: 24,
    top: 39,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon3: {
    top: 50,
    left: 39,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    top: 543,
    height: 75,
    width: 277,
  },
  item: {
    top: 264,
    left: 37,
  },
  inner: {
    top: 267,
    left: 215,
  },
  text: {
    top: 320,
    textAlign: "left",
    left: 73,
    position: "absolute",
  },
  text1: {
    top: 319,
    left: 247,
    width: 103,
    height: 25,
    textAlign: "left",
    position: "absolute",
  },
  rectanglePressable: {
    top: 419,
    left: 87,
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorMistyrose_100,
    width: 231,
    height: 85,
    position: "absolute",
  },
  rectangleView: {
    top: 844,
    left: 55,
    backgroundColor: "#ffedd3",
    width: 295,
    height: 570,
  },
  text2: {
    top: 1017,
    left: 155,
    width: 195,
    height: 172,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  child1: {
    top: 636,
    height: 68,
    width: 277,
  },
  child2: {
    top: 727,
    width: 276,
    height: 79,
  },
  text3: {
    top: 559,
    left: 113,
  },
  text4: {
    top: 442,
    left: 167,
    width: 151,
    height: 103,
  },
  text5: {
    marginTop: -409.5,
    marginLeft: -65.5,
    top: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
    width: 242,
    textAlign: "left",
  },
  view: {
    backgroundColor: Color.colorLightgoldenrodyellow,
    width: 393,
    height: 883,
    overflow: "hidden",
  },
});

export default Expense_page;

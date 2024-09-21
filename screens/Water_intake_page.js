import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Water_intake_page = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.icon}
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
        style={[styles.icon3, styles.textLayout]}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <View style={styles.child} />
      <View style={styles.item} />
      <Text style={[styles.text, styles.textTypo]}>今日喝水表現</Text>
      <Text style={[styles.text1, styles.text1Position]}>今日喝水時間</Text>
      <View style={styles.inner} />
      <Text style={[styles.text2, styles.textTypo]}>轉圖表</Text>
      <Image
        style={[styles.barChartIcon, styles.text1Position]}
        contentFit="cover"
        source={require("../assets/bar-chart.png")}
      />
      <Image
        style={[styles.smileIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/smile.png")}
      />
      <Image
        style={[styles.mehIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/meh.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Text style={styles.text3}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 48,
    position: "absolute",
  },
  textTypo: {
    width: 239,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  text1Position: {
    left: 102,
    height: 48,
    position: "absolute",
  },
  iconPosition: {
    top: 429,
    height: 48,
    width: 48,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    top: 122,
    width: 141,
    height: 142,
    left: "50%",
    marginLeft: -64.5,
    position: "absolute",
  },
  icon1: {
    top: 133,
    left: 142,
    width: 122,
    height: 121,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
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
    overflow: "hidden",
  },
  child: {
    top: 288,
    left: 29,
    borderRadius: 44,
    backgroundColor: "#ffcfcf",
    width: 339,
    height: 282,
    position: "absolute",
  },
  item: {
    top: 623,
    left: 49,
    backgroundColor: "#fef6f6",
    width: 299,
    height: 408,
    position: "absolute",
  },
  text: {
    top: 307,
    left: 93,
    height: 48,
    position: "absolute",
  },
  text1: {
    top: 645,
    width: 239,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  inner: {
    top: 1054,
    left: 79,
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorMistyrose_100,
    width: 231,
    height: 85,
    position: "absolute",
  },
  text2: {
    top: 1082,
    left: 168,
    height: 48,
    position: "absolute",
  },
  barChartIcon: {
    top: 1074,
    width: 48,
    overflow: "hidden",
  },
  smileIcon: {
    left: 287,
  },
  mehIcon: {
    left: 55,
  },
  rectangleIcon: {
    top: 488,
    left: 58,
    width: 284,
    height: 18,
    position: "absolute",
  },
  text3: {
    marginTop: -546,
    top: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
    width: 242,
    textAlign: "left",
    left: "50%",
    marginLeft: -64.5,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorLightgoldenrodyellow,
    flex: 1,
    height: 1156,
    overflow: "hidden",
    width: "100%",
  },
});

export default Water_intake_page;

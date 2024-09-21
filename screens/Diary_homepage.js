import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Diary_homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Mainpage")}
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
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Diary_record")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textFlexBox]}>+</Text>
      <Pressable
        style={styles.child}
        onPress={() => navigation.navigate("Diary_record")}
      />
      <Text style={[styles.text1, styles.textTypo2]}>描述事件</Text>
      <Text style={[styles.text2, styles.textTypo1]}>活動時間</Text>
      <Image
        style={[styles.item, styles.childLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <View style={[styles.inner, styles.childLayout]} />
      <Text style={[styles.text3, styles.textTypo]}>標籤</Text>
      <View style={[styles.rectangleView, styles.childBorder]} />
      <Text style={[styles.text4, styles.textTypo2]}>描述事件</Text>
      <Text style={[styles.text5, styles.textTypo1]}>活動時間</Text>
      <Image
        style={[styles.ellipseIcon, styles.childLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <View style={[styles.child1, styles.text6Position]} />
      <Text style={[styles.text6, styles.text6Position]}>標籤</Text>
      <View style={[styles.child2, styles.childBorder]} />
      <Text style={[styles.text7, styles.textTypo2]}>描述事件</Text>
      <Text style={[styles.text8, styles.textTypo1]}>活動時間</Text>
      <Image
        style={[styles.child3, styles.childLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <View style={[styles.child4, styles.text9Position]} />
      <Text style={[styles.text9, styles.text9Position]}>標籤</Text>
      <View style={[styles.child5, styles.childBorder]} />
      <Text style={[styles.text10, styles.textTypo2]}>描述事件</Text>
      <Text style={[styles.text11, styles.textTypo2]}>活動時間</Text>
      <Image
        style={[styles.child6, styles.childLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <View style={[styles.child7, styles.child7Position]} />
      <Text style={[styles.text12, styles.child7Position]}>標籤</Text>
      <Text style={[styles.text13, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo2: {
    height: 62,
    width: 225,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo1: {
    left: 187,
    height: 62,
    width: 225,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  childLayout2: {
    height: 101,
    width: 106,
    position: "absolute",
  },
  childLayout: {
    height: 41,
    width: 115,
    backgroundColor: Color.colorDimgray,
    borderRadius: Border.br_27xl,
  },
  textTypo: {
    height: 29,
    width: 75,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  childBorder: {
    borderColor: Color.colorGainsboro_100,
    height: 155,
    width: 350,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_12xl,
    position: "absolute",
  },
  text6Position: {
    top: 429,
    position: "absolute",
  },
  text9Position: {
    top: 599,
    position: "absolute",
  },
  child7Position: {
    top: 769,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    top: 39,
    height: 71,
    width: 78,
    left: 24,
    position: "absolute",
  },
  icon1: {
    top: 50,
    left: 39,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  wrapper: {
    left: 300,
    top: 38,
    width: 74,
    height: 72,
    position: "absolute",
  },
  text: {
    top: 32,
    left: 315,
    fontSize: 64,
    height: 83,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    width: 78,
  },
  child: {
    top: 151,
    borderColor: "#ccbbef",
    height: 155,
    width: 350,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_12xl,
    left: 21,
    position: "absolute",
  },
  text1: {
    top: 182,
    left: 196,
    height: 62,
    width: 225,
    fontSize: FontSize.size_13xl,
  },
  text2: {
    top: 244,
  },
  item: {
    top: 164,
    left: 49,
    width: 106,
  },
  inner: {
    left: 47,
    height: 41,
    width: 115,
    backgroundColor: Color.colorDimgray,
    borderRadius: Border.br_27xl,
    top: 259,
    position: "absolute",
  },
  text3: {
    left: 68,
    height: 29,
    width: 75,
    color: Color.colorGainsboro_100,
    top: 259,
    position: "absolute",
  },
  rectangleView: {
    top: 321,
    left: 21,
    borderColor: Color.colorGainsboro_100,
  },
  text4: {
    top: 352,
    left: 196,
    height: 62,
    width: 225,
    fontSize: FontSize.size_13xl,
  },
  text5: {
    top: 414,
  },
  ellipseIcon: {
    top: 334,
    left: 49,
    width: 106,
  },
  child1: {
    height: 41,
    width: 115,
    backgroundColor: Color.colorDimgray,
    borderRadius: Border.br_27xl,
    left: 47,
  },
  text6: {
    height: 29,
    width: 75,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 68,
  },
  child2: {
    top: 491,
    left: 21,
    borderColor: Color.colorGainsboro_100,
  },
  text7: {
    top: 522,
    left: 196,
    height: 62,
    width: 225,
    fontSize: FontSize.size_13xl,
  },
  text8: {
    top: 584,
  },
  child3: {
    top: 504,
    left: 49,
    width: 106,
  },
  child4: {
    height: 41,
    width: 115,
    backgroundColor: Color.colorDimgray,
    borderRadius: Border.br_27xl,
    left: 47,
  },
  text9: {
    height: 29,
    width: 75,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 68,
  },
  child5: {
    top: 661,
    borderColor: Color.colorGainsboro_100,
    left: 24,
  },
  text10: {
    top: 692,
    left: 199,
  },
  text11: {
    top: 754,
    left: 190,
  },
  child6: {
    top: 674,
    left: 52,
  },
  child7: {
    left: 50,
    height: 41,
    width: 115,
    backgroundColor: Color.colorDimgray,
    borderRadius: Border.br_27xl,
  },
  text12: {
    left: 71,
    height: 29,
    width: 75,
    color: Color.colorGainsboro_100,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  text13: {
    marginTop: -386,
    marginLeft: -91.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
    width: 242,
  },
  view: {
    backgroundColor: "#fcfdce",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Diary_homepage;

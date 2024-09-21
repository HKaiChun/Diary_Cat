import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Delete_vaccine = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Vaccine_details")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/0.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon1, styles.icon1Layout]}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Text style={[styles.text, styles.textTypo2]}>疫苗名稱</Text>
      <Text style={[styles.text1, styles.textTypo2]}>副作用</Text>
      <Text style={[styles.text2, styles.textTypo2]}>日期</Text>
      <View style={[styles.child, styles.itemBorder]} />
      <View style={[styles.item, styles.itemBorder]} />
      <View style={[styles.inner, styles.viewLayout]} />
      <View style={[styles.rectangleView, styles.viewLayout]} />
      <View style={[styles.child1, styles.viewLayout]} />
      <Text style={[styles.text3, styles.textTypo1]}>年</Text>
      <Text style={[styles.text4, styles.textTypo1]}>月</Text>
      <Image
        style={[styles.calendarViewMonth, styles.viewLayout]}
        contentFit="cover"
        source={require("../assets/calendar-view-month.png")}
      />
      <View style={styles.child2} />
      <View style={[styles.child3, styles.childLayout]} />
      <Text style={[styles.text5, styles.textTypo]}>取消</Text>
      <Text style={[styles.text6, styles.textFlexBox]}>確定刪除?</Text>
      <View style={[styles.child4, styles.childLayout]} />
      <Pressable
        style={styles.pressable1}
        onPress={() => navigation.navigate("Vaccine_homepage")}
      >
        <Text style={styles.textTypo}>刪除</Text>
      </Pressable>
      <Text style={[styles.text8, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1Layout: {
    height: 48,
    overflow: "hidden",
  },
  textTypo2: {
    height: 62,
    width: 225,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  itemBorder: {
    width: 362,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_2xl,
    left: 14,
    position: "absolute",
  },
  viewLayout: {
    width: 58,
    position: "absolute",
  },
  textTypo1: {
    top: 383,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  childLayout: {
    height: 56,
    width: 89,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  textTypo: {
    height: 33,
    width: 91,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
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
    left: 33,
    top: 31,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon1: {
    top: 38,
    left: 48,
    width: 48,
    position: "absolute",
  },
  text: {
    top: 125,
    left: 131,
  },
  text1: {
    top: 481,
    left: 134,
  },
  text2: {
    top: 298,
    left: 158,
  },
  child: {
    top: 187,
    height: 58,
  },
  item: {
    top: 543,
    height: 154,
  },
  inner: {
    left: 38,
    top: 367,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
  },
  rectangleView: {
    left: 280,
    top: 367,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
  },
  child1: {
    left: 159,
    top: 367,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
  },
  text3: {
    left: 111,
  },
  text4: {
    left: 230,
  },
  calendarViewMonth: {
    top: 295,
    left: 96,
    height: 48,
    overflow: "hidden",
  },
  child2: {
    top: 285,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorLightpink,
    width: 313,
    height: 196,
    left: 38,
    position: "absolute",
  },
  child3: {
    top: 402,
    left: 70,
    backgroundColor: Color.colorRoyalblue,
  },
  text5: {
    top: 417,
    left: 88,
    position: "absolute",
  },
  text6: {
    top: 330,
    left: 127,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  child4: {
    top: 403,
    left: 235,
    backgroundColor: Color.colorSalmon,
  },
  pressable1: {
    left: 265,
    top: 419,
    position: "absolute",
  },
  text8: {
    marginTop: -384,
    marginLeft: -60,
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
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Delete_vaccine;

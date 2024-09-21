import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Add_vaccine_record = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Vaccine_homepage")}
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
      <Text style={[styles.text, styles.textLayout]}>疫苗名稱</Text>
      <Text style={[styles.text1, styles.textLayout]}>副作用</Text>
      <Text style={[styles.text2, styles.textLayout]}>日期</Text>
      <View style={[styles.child, styles.itemBorder]} />
      <View style={[styles.item, styles.itemBorder]} />
      <View style={[styles.inner, styles.viewLayout]} />
      <View style={[styles.rectangleView, styles.viewLayout]} />
      <View style={[styles.child1, styles.viewLayout]} />
      <Text style={[styles.text3, styles.textTypo]}>年</Text>
      <Text style={[styles.text4, styles.textTypo]}>月</Text>
      <Text style={[styles.text5, styles.textTypo]}>日</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.textLayout]}
        onPress={() => navigation.navigate("Vaccine_homepage")}
      />
      <Text style={[styles.text6, styles.textFlexBox]}>送出</Text>
      <Image
        style={[styles.calendarViewMonth, styles.viewLayout]}
        contentFit="cover"
        source={require("../assets/calendar-view-month.png")}
      />
      <Text style={[styles.text7, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1Layout: {
    height: 48,
    overflow: "hidden",
  },
  textLayout: {
    height: 62,
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
  textTypo: {
    top: 402,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
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
    left: 40,
    top: 36,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon1: {
    top: 43,
    left: 55,
    width: 48,
    position: "absolute",
    height: 48,
  },
  text: {
    top: 144,
    left: 124,
    width: 225,
    height: 62,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  text1: {
    top: 500,
    left: 127,
    width: 225,
    height: 62,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  text2: {
    top: 317,
    left: 151,
    width: 225,
    height: 62,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  child: {
    top: 206,
    height: 58,
  },
  item: {
    top: 569,
    height: 154,
  },
  inner: {
    left: 31,
    top: 386,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
  },
  rectangleView: {
    left: 273,
    top: 386,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
  },
  child1: {
    left: 152,
    top: 386,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
  },
  text3: {
    left: 104,
  },
  text4: {
    left: 223,
  },
  text5: {
    left: 344,
  },
  rectanglePressable: {
    top: 752,
    left: 108,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGainsboro_100,
    width: 165,
  },
  text6: {
    top: 763,
    left: 158,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  calendarViewMonth: {
    top: 314,
    left: 89,
    height: 48,
    overflow: "hidden",
  },
  text7: {
    marginTop: -382,
    marginLeft: -53,
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

export default Add_vaccine_record;

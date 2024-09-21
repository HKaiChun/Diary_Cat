import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Edit_vaccine = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={styles.child} />
      <Text style={[styles.text, styles.textFlexBox]}>確定送出</Text>
      <Text style={[styles.text, styles.textFlexBox]}>確定送出</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Vaccine_detail")}
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
      <Text style={[styles.text2, styles.textTypo1]}>疫苗名稱</Text>
      <Text style={[styles.text3, styles.textTypo1]}>副作用</Text>
      <Text style={[styles.text4, styles.textTypo1]}>日期</Text>
      <View style={[styles.item, styles.itemBorder]} />
      <View style={[styles.inner, styles.itemBorder]} />
      <View style={[styles.rectangleView, styles.childViewLayout]} />
      <View style={[styles.child1, styles.childViewLayout]} />
      <View style={[styles.child2, styles.childViewLayout]} />
      <Text style={[styles.text5, styles.textTypo]}>年</Text>
      <Text style={[styles.text6, styles.textTypo]}>月</Text>
      <Image
        style={[styles.calendarViewMonth, styles.childViewLayout]}
        contentFit="cover"
        source={require("../assets/calendar-view-month.png")}
      />
      <Text style={[styles.text7, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  icon1Layout: {
    height: 48,
    overflow: "hidden",
  },
  textTypo1: {
    width: 225,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
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
  childViewLayout: {
    width: 58,
    position: "absolute",
  },
  textTypo: {
    top: 383,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  child: {
    top: 735,
    left: 122,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGainsboro_100,
    width: 165,
    height: 62,
    position: "absolute",
  },
  text: {
    top: 746,
    left: 145,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
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
    height: 48,
  },
  text2: {
    top: 125,
    left: 131,
  },
  text3: {
    top: 481,
    left: 134,
  },
  text4: {
    top: 298,
    left: 158,
  },
  item: {
    top: 187,
    height: 58,
  },
  inner: {
    top: 543,
    height: 154,
  },
  rectangleView: {
    left: 38,
    top: 367,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
  },
  child1: {
    left: 280,
    top: 367,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
  },
  child2: {
    left: 159,
    top: 367,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
  },
  text5: {
    left: 111,
  },
  text6: {
    left: 230,
  },
  calendarViewMonth: {
    top: 295,
    left: 96,
    height: 48,
    overflow: "hidden",
  },
  text7: {
    marginTop: -384,
    marginLeft: -73,
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

export default Edit_vaccine;

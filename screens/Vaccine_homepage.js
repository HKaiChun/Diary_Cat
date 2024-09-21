import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Vaccine_homepage = () => {
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
        style={[styles.child, styles.itemLayout]}
        onPress={() => navigation.navigate("Vaccine_details")}
      />
      <Text style={[styles.text, styles.textTypo1]}>副作用</Text>
      <Text style={[styles.text1, styles.textTypo1]}>疫苗名稱</Text>
      <Text style={[styles.text2, styles.textTypo1]}>日期</Text>
      <View style={[styles.item, styles.itemLayout]} />
      <Text style={[styles.text3, styles.textTypo]}>副作用</Text>
      <Text style={[styles.text4, styles.textTypo1]}>疫苗名稱</Text>
      <Text style={[styles.text5, styles.textTypo]}>日期</Text>
      <View style={[styles.inner, styles.itemLayout]} />
      <Text style={[styles.text6, styles.textTypo]}>副作用</Text>
      <Text style={[styles.text7, styles.textTypo1]}>疫苗名稱</Text>
      <Text style={[styles.text8, styles.textTypo1]}>日期</Text>
      <Image
        style={[styles.historyIcon, styles.plus1Position]}
        contentFit="cover"
        source={require("../assets/history.png")}
      />
      <Text style={[styles.text9, styles.textFlexBox]}>請輸入關鍵字查詢</Text>
      <Pressable
        style={[styles.plus1, styles.plus1Position]}
        onPress={() => navigation.navigate("Add_vaccine_record")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/plus-11.png")}
        />
      </Pressable>
      <Text style={[styles.text10, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 155,
    width: 350,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorOldlace,
    borderRadius: Border.br_12xl,
    position: "absolute",
  },
  textTypo1: {
    height: 62,
    width: 225,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  textTypo: {
    left: 145,
    height: 62,
    width: 225,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  plus1Position: {
    top: 138,
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
    top: 33,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon1: {
    top: 40,
    left: 55,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    top: 202,
    left: 17,
  },
  text: {
    top: 314,
    left: 141,
  },
  text1: {
    top: 218,
    left: 126,
  },
  text2: {
    top: 270,
    left: 149,
  },
  item: {
    top: 605,
    left: 13,
  },
  text3: {
    top: 713,
  },
  text4: {
    top: 621,
    left: 122,
  },
  text5: {
    top: 673,
  },
  inner: {
    top: 394,
    left: 21,
  },
  text6: {
    top: 506,
  },
  text7: {
    top: 410,
    left: 130,
  },
  text8: {
    top: 462,
    left: 153,
  },
  historyIcon: {
    width: 53,
    height: 51,
    left: 21,
    overflow: "hidden",
  },
  text9: {
    top: 122,
    left: 26,
    width: 277,
    height: 65,
    display: "none",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  plus1: {
    left: 307,
    width: 47,
    height: 42,
  },
  text10: {
    marginTop: -385,
    marginLeft: -59,
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

export default Vaccine_homepage;

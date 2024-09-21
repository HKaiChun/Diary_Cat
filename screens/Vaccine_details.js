import * as React from "react";
import { Image } from "expo-image";
import { TextInput, StyleSheet, Text, View, Pressable, KeyboardAvoidingView, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Vaccine_details = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/0.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>疫苗名稱</Text>
      <Text style={[styles.text1, styles.textTypo1]}>副作用</Text>
      <Text style={[styles.text2, styles.textTypo1]}>日期</Text>
      <TextInput
      style={[styles.child, styles.itemBorder, styles.textInput]}/>
      {/* <View style={[styles.item, styles.itemBorder]} />
      <View style={[styles.inner, styles.innerPosition]} />
      <View style={[styles.rectangleView, styles.innerPosition]} />
      <View style={[styles.child1, styles.innerPosition]} /> */}
      <TextInput
        style={[styles.item, styles.itemBorder, styles.textInput]}
        placeholder=""
      />
      <TextInput
        style={[styles.inner, styles.innerPosition, styles.textInput]}
        placeholder=""
      />
      <TextInput
        style={[styles.rectangleView, styles.innerPosition, styles.textInput]}
        placeholder=""
      />
      <TextInput
        style={[styles.child1, styles.innerPosition, styles.textInput]}
        placeholder=""
      />
      <Text style={[styles.text3, styles.textTypo]}>年</Text>
      <Text style={[styles.text4, styles.textTypo]}>月</Text>
      <Text style={[styles.text5, styles.textTypo]}>日</Text>
      <Image
        style={[styles.calendarViewMonth, styles.pressableLayout]}
        contentFit="cover"
        source={require("../assets/calendar-view-month.png")}
      />
      <Pressable
        style={styles.edit}
        onPress={() => navigation.navigate("Edit_vaccine")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/edit3.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Delete_vaccine")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("Vaccine_homepage")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/1.png")}
        />
      </Pressable>
      <Text style={styles.text6}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    height: 62,
    width: 225,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
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
  innerPosition: {
    top: 386,
    width: 58,
    backgroundColor: Color.colorGainsboro_200,
    height: 71,
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
  pressableLayout: {
    height: 48,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  icon: {
    top: 36,
    left: 40,
    width: 78,
    height: 71,
    position: "absolute",
  },
  text: {
    top: 144,
    left: 124,
  },
  text1: {
    top: 500,
    left: 127,
  },
  text2: {
    top: 317,
    left: 151,
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
    width: 58,
  },
  rectangleView: {
    left: 273,
    width: 58,
  },
  child1: {
    left: 152,
    width: 58,
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
  calendarViewMonth: {
    top: 314,
    left: 89,
    width: 58,
    overflow: "hidden",
  },
  // edit: {
  //   left: 71,
  //   top: 771,
  //   width: 56,
  //   height: 51,
  //   position: "absolute",
  // },
  edit: {
    left: "15.13%",
    top: "90.76%",
    right: "15.13%",
    bottom: "3.91%",
    width: "10%",
    height: "5.33%",
    // position: "absolute",
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "74.87%",
    top: "90.76%",
    right: "15.13%",
    bottom: "3.91%",
    width: "10%",
    height: "5.33%",
    position: "absolute",
  },
  icon3: {
    overflow: "hidden",
  },
  pressable: {
    left: 55,
    top: 48,
    width: 48,
  },
  text6: {
    marginTop: -379,
    marginLeft: -68,
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
    backgroundColor: Color.colorLightgoldenrodyellow,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Vaccine_details;

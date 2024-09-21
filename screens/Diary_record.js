import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Diary_record = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Diary_homepage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/0.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>描述事件</Text>
      <Text style={[styles.text1, styles.textTypo]}>事件日期和時間:</Text>
      <View style={styles.child} />
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.inner, styles.itemLayout]} />
      <Text style={[styles.text2, styles.textTypo]}>上傳圖片</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Diary_homepage")}
      />
      <Text style={[styles.save, styles.saveFlexBox]}>{`save
`}</Text>
      <Image
        style={[styles.editIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit.png")}
      />
      <Image
        style={styles.uploadIcon}
        contentFit="cover"
        source={require("../assets/upload1.png")}
      />
      <Text style={[styles.text3, styles.saveFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 48,
    width: 48,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    height: 62,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  itemLayout: {
    height: 58,
    width: 362,
    borderRadius: Border.br_2xl,
    left: 20,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  saveFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    top: 39,
    width: 78,
    height: 71,
    left: 24,
    position: "absolute",
  },
  icon1: {
    top: 50,
    left: 39,
  },
  text: {
    top: 173,
    left: 125,
    width: 225,
    height: 62,
  },
  text1: {
    top: 328,
    left: 79,
    width: 292,
  },
  child: {
    top: 520,
    borderRadius: 30,
    width: 344,
    height: 163,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    left: 24,
    position: "absolute",
  },
  item: {
    top: 235,
  },
  inner: {
    top: 407,
  },
  text2: {
    top: 621,
    left: 132,
    width: 225,
    height: 62,
  },
  rectanglePressable: {
    top: 739,
    left: 102,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGainsboro_100,
    width: 165,
    height: 85,
    position: "absolute",
  },
  save: {
    top: 762,
    left: 184,
    width: 129,
    height: 57,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  editIcon: {
    top: 754,
    left: 124,
  },
  uploadIcon: {
    top: 533,
    left: 155,
    width: 77,
    height: 69,
    position: "absolute",
    overflow: "hidden",
  },
  text3: {
    marginTop: -386,
    marginLeft: -73.5,
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
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Diary_record;

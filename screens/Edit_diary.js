import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Edit_diary = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Diary_record_changes")}
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
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={styles.item} />
      <Text style={[styles.text, styles.textFlexBox]}>標籤</Text>
      <View style={[styles.inner, styles.innerBg]} />
      <Text style={[styles.text1, styles.textTypo]}>{`筆記:
`}</Text>
      <Text style={[styles.text2, styles.textTypo]}>活動時間:</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.innerBg]}
        onPress={() => navigation.navigate("Diary_homepage")}
      />
      <Text style={styles.save}>{`save
`}</Text>
      <Image
        style={[styles.editIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit.png")}
      />
      <Text style={[styles.text3, styles.textFlexBox]}>Diary_Cat</Text>
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
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  innerBg: {
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  textTypo: {
    height: 62,
    width: 225,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  icon: {
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
  icon1: {
    top: 50,
    left: 39,
  },
  child: {
    top: 128,
    width: 151,
    height: 146,
    left: 116,
    position: "absolute",
  },
  item: {
    top: 286,
    left: 132,
    borderRadius: Border.br_27xl,
    backgroundColor: Color.colorDimgray,
    width: 124,
    height: 53,
    position: "absolute",
  },
  text: {
    top: 298,
    left: 162,
    color: Color.colorGainsboro_100,
    width: 75,
    height: 29,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  inner: {
    top: 361,
    left: 26,
    borderRadius: Border.br_mini,
    width: 341,
    height: 242,
  },
  text1: {
    top: 481,
    left: 45,
  },
  text2: {
    top: 373,
    left: 39,
  },
  rectanglePressable: {
    top: 690,
    borderRadius: Border.br_base,
    width: 165,
    height: 85,
    left: 116,
  },
  save: {
    top: 713,
    left: 198,
    width: 129,
    height: 57,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  editIcon: {
    top: 705,
    left: 138,
  },
  text3: {
    marginTop: -390,
    marginLeft: -71.5,
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

export default Edit_diary;

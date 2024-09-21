import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Diary_record_changes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={[styles.pressable, styles.childPosition]}
        onPress={() => navigation.navigate("Diary_homepage")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/0.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.child, styles.itemLayout]}
        onPress={() => navigation.navigate("Delete_diary")}
      />
      <Pressable
        style={[styles.item, styles.itemBg]}
        onPress={() => navigation.navigate("Edit_diary")}
      />
      <Pressable
        style={[styles.pressable1, styles.iconLayout]}
        onPress={() => navigation.navigate("Diary_homepage")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/1.png")}
        />
      </Pressable>
      <Image
        style={[styles.trash2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/trash-2.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>編輯</Text>
      <Text style={[styles.text1, styles.textTypo1]}>刪除</Text>
      <Image
        style={[styles.editIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/edit.png")}
      />
      <Image
        style={styles.inner}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.text2, styles.textFlexBox]}>標籤</Text>
      <View style={[styles.child1, styles.itemBg]} />
      <Text style={[styles.text3, styles.textTypo]}>{`筆記:
`}</Text>
      <Text style={[styles.text4, styles.textTypo]}>活動時間:</Text>
      <Text style={[styles.text5, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 24,
    position: "absolute",
  },
  itemLayout: {
    height: 85,
    width: 165,
    borderRadius: Border.br_base,
    top: 633,
  },
  itemBg: {
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  iconLayout: {
    height: 48,
    width: 48,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  textTypo1: {
    height: 57,
    width: 129,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    height: 62,
    width: 225,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  pressable: {
    top: 39,
    width: 78,
    height: 71,
  },
  child: {
    backgroundColor: Color.colorSalmon,
    left: 24,
    position: "absolute",
  },
  item: {
    left: 209,
    height: 85,
    width: 165,
    borderRadius: Border.br_base,
    top: 633,
  },
  icon1: {
    overflow: "hidden",
  },
  pressable1: {
    top: 50,
    left: 39,
  },
  trash2Icon: {
    top: 652,
    left: 39,
    overflow: "hidden",
  },
  text: {
    top: 656,
    left: 291,
  },
  text1: {
    top: 658,
    left: 102,
  },
  editIcon: {
    top: 648,
    left: 231,
    overflow: "hidden",
  },
  inner: {
    top: 128,
    left: 116,
    width: 151,
    height: 146,
    position: "absolute",
  },
  rectangleView: {
    top: 286,
    left: 132,
    borderRadius: Border.br_27xl,
    backgroundColor: Color.colorDimgray,
    width: 124,
    height: 53,
    position: "absolute",
  },
  text2: {
    top: 298,
    left: 162,
    color: Color.colorGainsboro_100,
    width: 75,
    height: 29,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  child1: {
    top: 361,
    left: 26,
    borderRadius: Border.br_mini,
    width: 341,
    height: 242,
  },
  text3: {
    top: 481,
    left: 45,
  },
  text4: {
    top: 373,
    left: 39,
  },
  text5: {
    marginTop: -381,
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

export default Diary_record_changes;

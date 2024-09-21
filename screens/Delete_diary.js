import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Delete_diary = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.view, styles.viewLayout]}>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/0.png")}
      />
      <View style={[styles.child, styles.itemLayout]} />
      <View style={[styles.item, styles.itemBg]} />
      <Pressable
        style={[styles.pressable, styles.iconLayout]}
        onPress={() => navigation.navigate("Diary_homepage")}
      >
        <Image
          style={[styles.icon1, styles.viewLayout]}
          contentFit="cover"
          source={require("../assets/1.png")}
        />
      </Pressable>
      <Image
        style={[styles.trash2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/trash-2.png")}
      />
      <Text style={[styles.text, styles.textTypo2]}>編輯</Text>
      <Text style={[styles.text1, styles.textTypo2]}>刪除</Text>
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
      <View style={[styles.rectangleView, styles.text5Position]} />
      <Text style={styles.text2}>標籤</Text>
      <View style={[styles.child1, styles.itemBg]} />
      <Text style={[styles.text3, styles.textTypo1]}>{`筆記:
`}</Text>
      <Text style={[styles.text4, styles.textTypo1]}>活動時間:</Text>
      <View style={styles.child2} />
      <Pressable
        style={[styles.rectanglePressable, styles.child3Layout]}
        onPress={() => navigation.navigate("Diary_record_changes")}
      />
      <Text style={[styles.text5, styles.text5Position]}>確定刪除?</Text>
      <Pressable
        style={[styles.child3, styles.child3Layout]}
        onPress={() => navigation.navigate("Diary_homepage")}
      />
      <Text style={[styles.text6, styles.textTypo]}>刪除</Text>
      <Text style={[styles.text7, styles.textTypo]}>取消</Text>
      <Text style={styles.text8}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iconPosition: {
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
  textTypo2: {
    height: 57,
    width: 129,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  text5Position: {
    left: 132,
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
  child3Layout: {
    height: 56,
    width: 89,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    top: 350,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
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
    height: "100%",
    overflow: "hidden",
  },
  pressable: {
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
    borderRadius: Border.br_27xl,
    backgroundColor: Color.colorDimgray,
    width: 124,
    height: 53,
  },
  text2: {
    top: 298,
    left: 162,
    color: Color.colorGainsboro_100,
    width: 75,
    height: 29,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
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
  child2: {
    top: 216,
    left: 43,
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorLightpink,
    width: 313,
    height: 196,
    position: "absolute",
  },
  rectanglePressable: {
    top: 333,
    left: 75,
    backgroundColor: Color.colorRoyalblue,
  },
  text5: {
    top: 261,
    textAlign: "left",
    color: Color.colorBlack,
    left: 132,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  child3: {
    top: 334,
    left: 240,
    backgroundColor: Color.colorSalmon,
  },
  text6: {
    left: 270,
    width: 91,
    height: 33,
  },
  text7: {
    left: 99,
  },
  text8: {
    marginTop: -381,
    marginLeft: -77.5,
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
    height: 852,
    overflow: "hidden",
  },
});

export default Delete_diary;

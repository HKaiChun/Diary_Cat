import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Open_product_results = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/0.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>案例一</Text>
      <Pressable
        style={styles.icon}
        onPress={() => navigation.navigate("Search_product_results")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/0.png")}
        />
      </Pressable>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <View style={styles.child} />
      <Text style={styles.text1}>以上案例僅供參考</Text>
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.inner, styles.itemLayout]} />
      <Text style={[styles.text2, styles.textTypo]}>上一則</Text>
      <Text style={[styles.text3, styles.textTypo]}>下一則</Text>
      <Text style={[styles.text4, styles.textFlexBox]}>點擊轉跳購買畫面</Text>
      <Text style={[styles.text5, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  itemLayout: {
    height: 54,
    width: 82,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
    top: 779,
    position: "absolute",
  },
  textTypo: {
    top: 794,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    top: 29,
    left: 18,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon1: {
    top: 40,
    left: 33,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 279,
    left: 151,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  child: {
    top: 159,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 354,
    height: 188,
    left: 14,
    position: "absolute",
  },
  text1: {
    top: 742,
    left: 115,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  item: {
    left: 14,
  },
  inner: {
    left: 286,
  },
  text2: {
    left: 21,
  },
  text3: {
    left: 297,
  },
  text4: {
    top: 666,
    left: 105,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  text5: {
    marginTop: -392,
    marginLeft: -69,
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

export default Open_product_results;

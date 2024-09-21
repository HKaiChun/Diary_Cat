import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Search_product_results = () => {
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
      <View style={[styles.child, styles.itemLayout]} />
      <Text style={[styles.text, styles.textFlexBox]}>案例一</Text>
      <View style={[styles.item, styles.itemLayout]} />
      <Text style={[styles.text1, styles.textFlexBox]}>案例二</Text>
      <View style={[styles.inner, styles.itemLayout]} />
      <Text style={[styles.text2, styles.textFlexBox]}>案例三</Text>
      <Pressable
        style={styles.icon}
        onPress={() => navigation.navigate("Search_products")}
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
      <Pressable
        style={[styles.child, styles.itemLayout]}
        onPress={() => navigation.navigate("tips")}
      />
      <Image
        style={[styles.ellipseIcon, styles.childLayout1]}
        contentFit="cover"
        source={require("../assets/6.png")}
      />
      <Text style={[styles.text3, styles.textFlexBox]}>{`價格:
款式:`}</Text>
      <View style={[styles.item, styles.itemLayout]} />
      <Image
        style={[styles.child1, styles.childLayout1]}
        contentFit="cover"
        source={require("../assets/6.png")}
      />
      <Text style={[styles.text4, styles.textFlexBox]}>{`價格:
款式:`}</Text>
      <View style={[styles.inner, styles.itemLayout]} />
      <Image
        style={[styles.child3, styles.childLayout1]}
        contentFit="cover"
        source={require("../assets/6.png")}
      />
      <Text style={[styles.text5, styles.textFlexBox]}>{`價格:
款式:`}</Text>
      <Text style={[styles.text6, styles.textFlexBox]}>
        點擊進入詳細產品介紹
      </Text>
      <View style={[styles.child4, styles.childLayout]} />
      <View style={[styles.child5, styles.childLayout]} />
      <Text style={[styles.text7, styles.textTypo]}>上一頁</Text>
      <Text style={[styles.text8, styles.textTypo]}>下一頁</Text>
      <Text style={[styles.text9, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 147,
    width: 354,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_2xl,
    left: 14,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  childLayout1: {
    height: 121,
    width: 122,
    left: 233,
    position: "absolute",
  },
  childLayout: {
    height: 54,
    width: 82,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
    top: 696,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    top: 711,
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
  child: {
    top: 157,
  },
  text: {
    top: 211,
    left: 151,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
  },
  item: {
    top: 337,
  },
  text1: {
    top: 380,
    left: 143,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
  },
  inner: {
    top: 516,
  },
  text2: {
    top: 559,
    left: 146,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  ellipseIcon: {
    top: 168,
  },
  text3: {
    top: 190,
    left: 45,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
  },
  child1: {
    top: 349,
  },
  text4: {
    top: 367,
    left: 53,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
  },
  child3: {
    top: 531,
  },
  text5: {
    top: 553,
    left: 57,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_13xl,
  },
  text6: {
    top: 782,
    left: 93,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  child4: {
    left: 22,
  },
  child5: {
    left: 294,
  },
  text7: {
    left: 29,
  },
  text8: {
    left: 305,
  },
  text9: {
    marginTop: -387,
    marginLeft: -65,
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

export default Search_product_results;

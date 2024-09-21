import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Search_products = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Mainpage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/0.png")}
        />
      </Pressable>
      <Pressable
        style={styles.pressable1}
        onPress={() => navigation.navigate("Mainpage")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/1.png")}
        />
      </Pressable>
      <View style={styles.child} />
      <Text style={[styles.text, styles.textTypo]}>{`輸入產品
`}</Text>
      <Pressable
        style={styles.item}
        onPress={() => navigation.navigate("Search_product_results")}
      />
      <Text style={[styles.text1, styles.textTypo]}>送出</Text>
      <Text style={styles.search}>Search</Text>
      <Text style={styles.text2}>Diary_Cat</Text>
      <Pressable
        style={[styles.pressable2, styles.pressableLayout]}
        onPress={() => navigation.navigate("Search_products")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.pressable3, styles.pressableLayout]}
        onPress={() => navigation.navigate("Search_products")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/4.png")}
        />
      </Pressable>
      <Text style={[styles.pchome, styles.momoTypo]}>PChome</Text>
      <Text style={[styles.momo, styles.momoTypo]}>momo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  pressableLayout: {
    height: 42,
    width: 40,
    position: "absolute",
  },
  momoTypo: {
    height: 50,
    width: 176,
    fontFamily: FontFamily.kaushanScriptRegular,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    color: Color.colorBlack,
    left: 122,
    position: "absolute",
  },
  pressable: {
    left: 18,
    top: 29,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  pressable1: {
    left: 33,
    top: 41,
    width: 48,
    height: 48,
    position: "absolute",
  },
  child: {
    top: 225,
    left: 14,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 362,
    height: 58,
    position: "absolute",
  },
  text: {
    top: 163,
    width: 225,
    height: 62,
    left: 122,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  item: {
    top: 634,
    left: 113,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGainsboro_100,
    width: 165,
    height: 85,
    position: "absolute",
  },
  text1: {
    top: 657,
    left: 163,
  },
  search: {
    top: 233,
    left: 41,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.robotoRegular,
    color: "#faf5f5",
    textAlign: "center",
    position: "absolute",
  },
  text2: {
    marginTop: -391,
    marginLeft: -73,
    top: "50%",
    left: "50%",
    color: Color.colorGray_500,
    width: 242,
    fontFamily: FontFamily.kaushanScriptRegular,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    position: "absolute",
  },
  pressable2: {
    left: 57,
    top: 327,
  },
  pressable3: {
    left: 56,
    top: 401,
  },
  pchome: {
    top: 319,
  },
  momo: {
    top: 393,
  },
  view: {
    backgroundColor: Color.colorLightgoldenrodyellow,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Search_products;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Expense_overview = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Expense_page")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/16.png")}
        />
      </Pressable>
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Pressable
        style={[styles.child, styles.itemLayout]}
        onPress={() => navigation.navigate("Select_edit_delete_expense")}
      />
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.inner, styles.innerLayout]} />
      <View style={[styles.rectangleView, styles.innerLayout]} />
      <Text style={[styles.text, styles.textFlexBox]}>記帳</Text>
      <Image
        style={styles.plus1Icon}
        contentFit="cover"
        source={require("../assets/plus-1.png")}
      />
      <Text style={[styles.text1, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 80,
    width: 306,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
    left: 41,
    position: "absolute",
  },
  innerLayout: {
    left: 42,
    height: 80,
    width: 306,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
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
    left: 18,
    top: 29,
    width: 78,
    height: 70,
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
    top: 279,
  },
  item: {
    top: 419,
  },
  inner: {
    top: 545,
  },
  rectangleView: {
    top: 666,
  },
  text: {
    top: 142,
    left: 159,
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslategray,
  },
  plus1Icon: {
    top: 197,
    left: 58,
    width: 47,
    height: 42,
    position: "absolute",
  },
  text1: {
    marginTop: -387,
    marginLeft: -56,
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

export default Expense_overview;

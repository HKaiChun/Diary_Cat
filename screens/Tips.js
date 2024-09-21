import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Tips = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/14.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Pressable
        style={styles.icon}
        onPress={() => navigation.navigate("Mainpage")}
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
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.inner, styles.itemLayout]} />
      <Text style={[styles.text, styles.textFlexBox]}>下一則</Text>
      <Text style={[styles.text1, styles.textFlexBox]}>知道了!</Text>
      <Text style={[styles.text2, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 52,
    top: 717,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    top: 38,
    left: 23,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon1: {
    top: 49,
    left: 38,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  child: {
    top: 189,
    left: 25,
    width: 341,
    height: 465,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  item: {
    left: 46,
    width: 131,
  },
  inner: {
    left: 224,
    width: 134,
  },
  text: {
    left: 243,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    top: 723,
    textAlign: "left",
  },
  text1: {
    left: 59,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    top: 723,
    textAlign: "left",
  },
  text2: {
    marginTop: -378,
    marginLeft: -60,
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

export default Tips;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Weight_homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Mainpage")}
      >
        <Image
          style={styles.icon}
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
        style={styles.child}
        onPress={() => navigation.navigate("User_and_pets")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>記一筆</Text>
      <View style={styles.item} />
      <Text style={[styles.text1, styles.textFlexBox]}>體重狀況</Text>
      <View style={[styles.inner, styles.innerLayout]} />
      <Text style={styles.text2}>月</Text>
      <View style={[styles.rectangleView, styles.innerLayout]} />
      <Text style={[styles.text3, styles.textFlexBox]}>年</Text>
      <Text style={[styles.text4, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  innerLayout: {
    height: 41,
    borderRadius: Border.br_31xl,
    top: 141,
    backgroundColor: Color.colorGainsboro_200,
    width: 78,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    left: 24,
    top: 39,
    height: 71,
    width: 78,
    position: "absolute",
  },
  icon1: {
    top: 50,
    left: 39,
    width: 48,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    top: 600,
    left: 79,
    borderRadius: Border.br_30xl,
    backgroundColor: Color.colorMistyrose_100,
    width: 231,
    height: 85,
    position: "absolute",
  },
  text: {
    top: 618,
    width: 239,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    left: 144,
    height: 48,
  },
  item: {
    top: 230,
    left: 21,
    width: 346,
    height: 248,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  text1: {
    top: 325,
    width: 230,
    height: 62,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    left: 144,
  },
  inner: {
    left: 66,
  },
  text2: {
    left: 93,
    top: 141,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  rectangleView: {
    left: 263,
  },
  text3: {
    top: 143,
    left: 286,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  text4: {
    marginTop: -397,
    marginLeft: -64.5,
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

export default Weight_homepage;

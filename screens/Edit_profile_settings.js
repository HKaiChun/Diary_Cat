import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Edit_profile_settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={styles.child} />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/5.png")}
      />
      <Image
        style={styles.item}
        contentFit="cover"
        source={require("../assets/6.png")}
      />
      <Image
        style={[styles.cameraIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/camera.png")}
      />
      <LinearGradient
        style={styles.inner}
        locations={[0, 1]}
        colors={["#fef6db", "#fdfdfd"]}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Profile_settings")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo1]}>顏色:</Text>
      <Text style={[styles.text1, styles.textTypo]}>是否結紮:</Text>
      <Text style={[styles.text2, styles.textTypo1]}>確定送出</Text>
      <Text style={[styles.text3, styles.textTypo]}>性別:</Text>
      <Text style={[styles.text4, styles.textTypo]}>品種:</Text>
      <Text style={[styles.text5, styles.textTypo]}>年紀:</Text>
      <Text style={[styles.text6, styles.textTypo]}>生日:</Text>
      <Text style={[styles.text7, styles.textTypo]}>貓咪姓名:</Text>
      <Image
        style={[styles.uploadIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/upload.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo: {
    height: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 50,
    position: "absolute",
  },
  child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhite,
    width: 303,
    position: "absolute",
    height: 778,
  },
  icon: {
    marginLeft: -76.5,
    top: 24,
    left: "50%",
    width: 141,
    height: 142,
    position: "absolute",
  },
  item: {
    top: 35,
    left: 85,
    width: 122,
    height: 121,
    position: "absolute",
  },
  cameraIcon: {
    top: 115,
    left: 186,
    width: 41,
    height: 43,
  },
  inner: {
    top: 178,
    left: 29,
    width: 242,
    height: 562,
    backgroundColor: "transparent",
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_xl,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 54,
    top: 641,
    width: 193,
    height: 58,
    position: "absolute",
  },
  text: {
    top: 346,
    height: 27,
    width: 59,
    left: 50,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  text1: {
    top: 495,
    width: 110,
    height: 28,
  },
  text2: {
    top: 658,
    left: 111,
  },
  text3: {
    top: 246,
    width: 59,
  },
  text4: {
    top: 296,
    width: 59,
  },
  text5: {
    top: 395,
    width: 59,
  },
  text6: {
    top: 445,
    width: 59,
  },
  text7: {
    top: 196,
    width: 110,
    height: 28,
  },
  uploadIcon: {
    top: 653,
    left: 71,
    width: 28,
    height: 33,
  },
  view: {
    flex: 1,
    height: 778,
    width: "100%",
  },
});

export default Edit_profile_settings;

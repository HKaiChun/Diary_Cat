import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile_settings = () => {
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
        style={styles.cameraIcon}
        contentFit="cover"
        source={require("../assets/camera.png")}
      />
      <LinearGradient
        style={[styles.inner, styles.editPosition]}
        locations={[0, 1]}
        colors={["#fef6db", "#fdfdfd"]}
      />
      <Image
        style={[styles.rectangleIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
      </Pressable>
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union2.png")}
      />
      <Text style={[styles.text, styles.textTypo1]}>顏色:</Text>
      <Text style={[styles.text1, styles.textTypo]}>是否結紮:</Text>
      <Text style={[styles.text2, styles.textTypo1]}>關於我們</Text>
      <Text style={[styles.text3, styles.textTypo]}>性別:</Text>
      <Text style={[styles.text4, styles.textTypo]}>品種:</Text>
      <Text style={[styles.text5, styles.textTypo]}>年紀:</Text>
      <Text style={[styles.text6, styles.textTypo]}>生日:</Text>
      <Text style={[styles.text7, styles.textTypo]}>貓咪姓名:</Text>
      <Text style={[styles.text8, styles.textTypo1]}>設定</Text>
      <Image
        style={styles.icon2}
        contentFit="cover"
        source={require("../assets/12.png")}
      />
      <Pressable
        style={[styles.edit, styles.editPosition]}
        onPress={() => navigation.navigate("Edit_profile_settings")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/edit2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  editPosition: {
    left: 29,
    position: "absolute",
  },
  wrapperLayout: {
    height: 58,
    width: 193,
    left: 54,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
    overflow: "hidden",
    position: "absolute",
  },
  inner: {
    top: 178,
    width: 242,
    height: 562,
    backgroundColor: "transparent",
  },
  rectangleIcon: {
    top: 641,
    borderRadius: Border.br_xl,
  },
  icon1: {
    borderRadius: Border.br_xl,
  },
  wrapper: {
    top: 562,
  },
  unionIcon: {
    width: 36,
    height: 34,
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
    left: 120,
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
  text8: {
    top: 579,
    left: 150,
  },
  icon2: {
    top: 567,
    left: 72,
    width: 48,
    height: 48,
    overflow: "hidden",
    position: "absolute",
  },
  icon3: {
    overflow: "hidden",
  },
  edit: {
    top: 134,
    width: 44,
    height: 38,
  },
  view: {
    flex: 1,
    height: 778,
    width: "100%",
  },
});

export default Profile_settings;

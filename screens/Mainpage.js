import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useAuth } from "../screens/AuthContext";

const Mainpage = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Import useRoute to access route params
  const { userEmail } = route.params || {}; // Destructure userEmail from route params
  const {user, loading} = useAuth();

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (!user) {
    return (
      <View>
        <Text>You need to log in.</Text>
      </View>
    );
  }
  
  {/* 測試是否可以將資料抓出來 */}
  // console.log(route.params); // Add this line to check what params are being passed

  return (
    <LinearGradient
      style={[styles.iphone13144, styles.iconLayout2]}
      locations={[0.52, 1]}
      colors={["#fffedf", "#e0e0e0"]}
    >

      {/* 測試是否可以將資料抓出來 */}
      {/* <Text style={styles.userEmailText}>{userEmail ? `Welcome, ${userEmail}` : 'Welcome!'}</Text> */}
      <Text>Welcome, {user.email}!</Text>

      <Pressable
        style={styles.alignJustify}
        onPress={() => navigation.navigate("Profile_settings")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/align-justify.png")}
        />
      </Pressable>
      <Text style={styles.text}>Diary_Cat</Text>
      <View style={[styles.iphone13144Child, styles.iphone13144ChildLayout1]} />
      <Text style={[styles.text1, styles.textTypo2]}>飲水</Text>
      <View style={[styles.iphone13144Item, styles.iphone13144ChildLayout1]} />
      <Text style={[styles.text2, styles.textTypo2]}>體重</Text>
      <View style={[styles.iphone13144Inner, styles.iphone13144ChildLayout1]} />
      <Text style={[styles.text3, styles.textPosition2]}>支出</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text4, styles.textPosition1]}>日記/照片</Text>
      <View style={[styles.iphone13144Child1, styles.rectangleViewLayout]} />
      <Text style={[styles.text5, styles.textPosition]}>貼心小建議</Text>
      <Image
        style={[styles.fountain1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/fountain-1.png")}
      />
      <Image
        style={[styles.weight1Icon, styles.textPosition1]}
        contentFit="cover"
        source={require("../assets/weight-1.png")}
      />
      <Pressable
        style={[styles.iphone13144Child, styles.iphone13144ChildLayout1]}
        onPress={() => navigation.navigate("Water_intake_page")}
      />
      <Text style={[styles.text6, styles.textTypo]}>飲水</Text>
      <Pressable
        style={[styles.iphone13144Item, styles.iphone13144ChildLayout1]}
        onPress={() => navigation.navigate("Weight_homepage")}
      />
      <Pressable
        style={[styles.iphone13144Inner, styles.iphone13144ChildLayout1]}
        onPress={() => navigation.navigate("Expense_page")}
      />
      <Text style={[styles.text7, styles.textTypo]}>支出</Text>
      <Pressable
        style={[styles.rectangleView, styles.rectangleViewLayout]}
        onPress={() => navigation.navigate("Diary_homepage")}
      />
      <Text style={[styles.text8, styles.textPosition1]}>日記/照片</Text>
      <View style={[styles.iphone13144Child5, styles.weight2IconPosition]} />
      <Text style={[styles.text9, styles.text9Position]}>疫苗接種</Text>
      <View style={[styles.iphone13144Child1, styles.rectangleViewLayout]} />
      <View style={[styles.iphone13144Child7, styles.iphone13144ChildLayout]} />
      <Text style={[styles.text10, styles.textTypo]}>爬蟲</Text>
      <View style={[styles.iphone13144Child8, styles.iphone13144ChildLayout]} />
      <Text style={[styles.text11, styles.textTypo]}>小知識</Text>
      <Text style={[styles.text12, styles.textTypo]}>健康總結</Text>
      <Image
        style={[styles.fountain2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/fountain-2.png")}
      />
      <Image
        style={[styles.weight2Icon, styles.weight2IconPosition]}
        contentFit="cover"
        source={require("../assets/weight-2.png")}
      />
      <Text style={[styles.text2, styles.textTypo2]}>體重</Text>
      <Image
        style={[styles.earnIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/earn.png")}
      />
      <Image
        style={styles.journal1Icon}
        contentFit="cover"
        source={require("../assets/journal-1.png")}
      />
      <Image
        style={[styles.journal2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/journal-2.png")}
      />
      <Image
        style={styles.syringe1Icon}
        contentFit="cover"
        source={require("../assets/syringe-1.png")}
      />
      <Image
        style={[styles.suggestion1Icon, styles.text9Position]}
        contentFit="cover"
        source={require("../assets/suggestion-1.png")}
      />
      <Image
        style={styles.animalShelter1Icon}
        contentFit="cover"
        source={require("../assets/animalshelter-1.png")}
      />
      <Image
        style={[styles.calendar1Icon, styles.textPosition2]}
        contentFit="cover"
        source={require("../assets/calendar-1.png")}
      />
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/8.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    width: "100%",
    overflow: "hidden",
  },
  iphone13144ChildLayout1: {
    height: 124,
    width: 148,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_4xl,
  },
  textTypo2: {
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  textPosition2: {
    left: 258,
    position: "absolute",
  },
  rectangleViewLayout: {
    backgroundColor: Color.colorMintcream,
    top: 438,
    height: 124,
    width: 148,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_4xl,
    position: "absolute",
  },
  textPosition1: {
    left: 51,
    position: "absolute",
  },
  textPosition: {
    left: 222,
    top: 520,
    position: "absolute",
  },
  iconLayout1: {
    height: 80,
    width: 80,
  },
  textTypo: {
    color: Color.iconDefaultDefault,
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  weight2IconPosition: {
    top: 291,
    position: "absolute",
  },
  text9Position: {
    left: 242,
    position: "absolute",
  },
  iphone13144ChildLayout: {
    top: 588,
    backgroundColor: Color.colorMintcream,
    height: 124,
    width: 148,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    borderRadius: Border.br_4xl,
    position: "absolute",
  },
  iconPosition: {
    left: 71,
    position: "absolute",
  },
  iconLayout: {
    width: 70,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  alignJustify: {
    left: 15,
    top: 33,
    width: 48,
    height: 48,
    position: "absolute",
  },
  text: {
    marginTop: -399,
    marginLeft: -87,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    width: 242,
    textAlign: "left",
    color: Color.colorGray_500,
    position: "absolute",
  },
  iphone13144Child: {
    borderColor: Color.colorGray_100,
    left: 33,
    top: 132,
    width: 148,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_4xl,
    position: "absolute",
  },
  text1: {
    left: 87,
    top: 220,
    position: "absolute",
    color: Color.colorGray_500,
  },
  textd: {
    left: 90,
    top: "85%",
  },
  iphone13144Item: {
    borderColor: Color.colorGray_200,
    top: 285,
    left: 33,
    position: "absolute",
  },
  text2: {
    left: 83,
    color: Color.colorGray_300,
    top: 374,
    position: "absolute",
  },
  iphone13144Inner: {
    left: 208,
    borderColor: Color.colorGray_100,
    top: 132,
    width: 148,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_4xl,
    position: "absolute",
  },
  text3: {
    top: 221,
    left: 258,
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorGray_500,
  },
  rectangleView: {
    borderColor: Color.colorGray_200,
    left: 33,
  },
  text4: {
    top: 520,
    left: 51,
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorGray_500,
  },
  iphone13144Child1: {
    left: 208,
    borderColor: Color.colorGray_100,
  },
  text5: {
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorGray_500,
  },
  fountain1Icon: {
    top: 140,
    left: 71,
    position: "absolute",
  },
  weight1Icon: {
    width: 104,
    height: 101,
    top: 285,
  },
  text6: {
    left: 87,
    top: 220,
    position: "absolute",
  },
  text7: {
    left: 258,
    position: "absolute",
    top: 221,
  },
  text8: {
    top: 520,
    left: 51,
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  iphone13144Child5: {
    left: 208,
    borderColor: Color.colorGray_200,
    height: 124,
    width: 148,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_4xl,
  },
  text9: {
    color: Color.iconDefaultDefault,
    fontFamily: FontFamily.yujiBokuRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    top: 374,
  },
  iphone13144Child7: {
    left: 210,
  },
  text10: {
    top: 669,
    left: 266,
    position: "absolute",
  },
  iphone13144Child8: {
    left: 37,
  },
  text11: {
    top: 662,
    left: 67,
    position: "absolute",
  },
  text12: {
    left: 222,
    top: 520,
    position: "absolute",
  },
  fountain2Icon: {
    width: 72,
    height: 73,
    top: 147,
  },
  weight2Icon: {
    left: 62,
    width: 90,
    height: 87,
  },
  earnIcon: {
    left: 246,
    height: 74,
    top: 147,
  },
  journal1Icon: {
    top: 282,
    left: -196,
    width: 100,
    height: 100,
    position: "absolute",
  },
  journal2Icon: {
    top: 450,
    left: 65,
    height: 70,
  },
  syringe1Icon: {
    top: 299,
    left: 247,
    width: 75,
    height: 75,
    position: "absolute",
  },
  suggestion1Icon: {
    top: 445,
    height: 80,
    width: 80,
  },
  animalShelter1Icon: {
    top: 748,
    left: 151,
    width: 87,
    height: 82,
    position: "absolute",
  },
  calendar1Icon: {
    top: 597,
    width: 64,
    height: 63,
  },
  icon1: {
    top: 610,
    left: 78,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13144: {
    flex: 1,
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Mainpage;

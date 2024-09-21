import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Gap } from "../GlobalStyles";

const Edit_expense_page = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Select_edit_delete_expense")}
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
      <Image
        style={styles.icon1}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <View style={[styles.child, styles.itemBg]} />
      <Text style={[styles.text, styles.textTypo1]}>花費事項</Text>
      <View style={[styles.item, styles.itemBg]} />
      <Text style={[styles.text1, styles.textTypo1]}> 年 月 日</Text>
      <View style={[styles.week, styles.weekPosition]}>
        <View style={[styles.datingDayOutOfMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.numTypo]}>30</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>1</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>2</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>3</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>4</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>5</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>6</Text>
        </View>
      </View>
      <View style={[styles.week1, styles.weekPosition]}>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>7</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>8</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>9</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>10</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>11</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>12</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>13</Text>
        </View>
      </View>
      <View style={[styles.week2, styles.weekPosition]}>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>14</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>15</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>16</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>17</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>18</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>19</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>20</Text>
        </View>
      </View>
      <View style={[styles.week3, styles.weekPosition]}>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>21</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>22</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>23</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>24</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>25</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>26</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>27</Text>
        </View>
      </View>
      <View style={[styles.week4, styles.weekPosition]}>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>28</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>29</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>30</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.numTypo]}>31</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.numTypo]}>1</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.numTypo]}>2</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.numTypo]}>3</Text>
        </View>
      </View>
      <Text style={[styles.text2, styles.numTypo]}>價格</Text>
      <View style={[styles.inner, styles.itemBg]} />
      <View style={[styles.rectangleView, styles.itemBg]} />
      <Text style={[styles.text3, styles.textTypo]}>確定送出</Text>
      <Pressable
        style={styles.text3Position}
        onPress={() => navigation.navigate("Expense_overview")}
      >
        <Text style={[styles.text4, styles.textTypo]}>確定送出</Text>
      </Pressable>
      <Text style={styles.text5}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBg: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  weekPosition: {
    gap: Gap.gap_md,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    left: 53,
    position: "absolute",
    overflow: "hidden",
  },
  datingLayout: {
    height: 30,
    width: 30,
  },
  numTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    left: 18,
    top: 29,
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
    top: 458,
    width: 298,
    height: 101,
    left: 53,
    borderRadius: Border.br_base,
  },
  text: {
    top: 430,
    left: 57,
  },
  item: {
    top: 160,
    left: 132,
    width: 117,
    height: 26,
  },
  text1: {
    top: 165,
    left: 148,
  },
  num: {
    top: 0,
    left: 0,
    height: 30,
    width: 30,
  },
  datingDayOutOfMonth: {
    opacity: 0.5,
  },
  week: {
    top: 193,
  },
  week1: {
    top: 235,
  },
  week2: {
    top: 277,
  },
  week3: {
    top: 319,
  },
  week4: {
    top: 361,
  },
  text2: {
    top: 598,
    left: 67,
    width: 26,
  },
  inner: {
    top: 638,
    left: 65,
    width: 274,
    height: 75,
  },
  rectangleView: {
    top: 762,
    left: 113,
    width: 165,
    height: 62,
  },
  text3: {
    textAlign: "left",
    left: 136,
    top: 773,
    position: "absolute",
  },
  text4: {
    textAlign: "left",
  },
  text3Position: {
    left: 136,
    top: 773,
    position: "absolute",
  },
  text5: {
    marginTop: -386,
    marginLeft: -67,
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
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Edit_expense_page;

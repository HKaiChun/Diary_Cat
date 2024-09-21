import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Gap } from "../GlobalStyles";

const Add_expense = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Expense_overview")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/0.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon1, styles.icon1Position]}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Pressable
        style={styles.icon1Position}
        onPress={() => navigation.navigate("Expense_overview")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/1.png")}
        />
      </Pressable>
      <View style={[styles.child, styles.itemBg]} />
      <Text style={[styles.text, styles.textTypo]}> 年 月 日</Text>
      <View style={[styles.week, styles.weekPosition]}>
        <View style={[styles.datingDayOutOfMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>30</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>1</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>2</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>3</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>4</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>5</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>6</Text>
        </View>
      </View>
      <View style={[styles.week1, styles.weekPosition]}>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>7</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>8</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>9</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>10</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>11</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>12</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>13</Text>
        </View>
      </View>
      <View style={[styles.week2, styles.weekPosition]}>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>14</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>15</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>16</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>17</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>18</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>19</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>20</Text>
        </View>
      </View>
      <View style={[styles.week3, styles.weekPosition]}>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>21</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>22</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>23</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>24</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>25</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>26</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>27</Text>
        </View>
      </View>
      <View style={[styles.week4, styles.weekPosition]}>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>28</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>29</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>30</Text>
        </View>
        <View style={styles.datingLayout}>
          <Text style={[styles.num, styles.datingLayout]}>31</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>1</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>2</Text>
        </View>
        <View style={[styles.datingDayOutOfMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>3</Text>
        </View>
      </View>
      <Text style={[styles.text1, styles.textTypo]}>價格</Text>
      <View style={[styles.item, styles.itemBg]} />
      <Text style={[styles.text2, styles.textTypo]}>花費事項</Text>
      <View style={[styles.inner, styles.itemBg]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Expense_overview")}
      />
      <Text style={[styles.text3, styles.textFlexBox]}>確定送出</Text>
      <Text style={[styles.text4, styles.textFlexBox]}>Diary_Cat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1Position: {
    height: 48,
    width: 48,
    left: 33,
    top: 40,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  itemBg: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  textTypo: {
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
  textFlexBox: {
    textAlign: "left",
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
  icon2: {
    overflow: "hidden",
  },
  child: {
    top: 160,
    left: 132,
    width: 117,
    height: 26,
  },
  text: {
    top: 165,
    left: 148,
  },
  num: {
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
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
  text1: {
    top: 618,
    left: 54,
  },
  item: {
    top: 658,
    left: 52,
    width: 297,
    height: 75,
  },
  text2: {
    top: 430,
    left: 60,
  },
  inner: {
    top: 474,
    left: 40,
    width: 298,
    height: 101,
  },
  rectanglePressable: {
    left: 116,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 162,
    height: 47,
    top: 774,
    position: "absolute",
  },
  text3: {
    left: 136,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    top: 774,
  },
  text4: {
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

export default Add_expense;

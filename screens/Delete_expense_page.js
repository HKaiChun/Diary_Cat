import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Gap } from "../GlobalStyles";

const Delete_expense_page = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Expense_overview")}
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
      <Text style={[styles.text1, styles.textTypo1]}>價格</Text>
      <View style={[styles.item, styles.itemBg]} />
      <View style={[styles.inner, styles.itemBg]} />
      <Text style={[styles.text2, styles.textTypo1]}> 年 月 日</Text>
      <View style={[styles.week, styles.weekPosition]}>
        <View style={[styles.datingDayOutOfMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>30</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>1</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>2</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>3</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>4</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>5</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>6</Text>
        </View>
      </View>
      <View style={[styles.week1, styles.weekPosition]}>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>7</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>8</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>9</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>10</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>11</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>12</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>13</Text>
        </View>
      </View>
      <View style={[styles.week2, styles.weekPosition]}>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>14</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>15</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>16</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>17</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>18</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>19</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>20</Text>
        </View>
      </View>
      <View style={styles.week3}>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>21</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>22</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>23</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>24</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>25</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>26</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>27</Text>
        </View>
      </View>
      <View style={[styles.week4, styles.weekPosition]}>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>28</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>29</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
          <Text style={[styles.num, styles.datingLayout]}>30</Text>
        </View>
        <View style={[styles.datingDayInMonth, styles.datingLayout]}>
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
      <View style={styles.rectangleView} />
      <Text style={[styles.text3, styles.textFlexBox]}>確定刪除?</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.child1Layout]}
        onPress={() => navigation.navigate("Expense_overview")}
      />
      <Pressable
        style={[styles.child1, styles.child1Layout]}
        onPress={() => navigation.navigate("Expense_overview")}
      />
      <Text style={[styles.text4, styles.textTypo]}>刪除</Text>
      <Text style={[styles.text5, styles.textTypo]}>取消</Text>
      <Text style={[styles.text6, styles.textFlexBox]}>Diary_Cat</Text>
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
    width: 30,
    height: 30,
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  child1Layout: {
    height: 52,
    width: 89,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    top: 385,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
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
  text1: {
    top: 605,
    left: 59,
  },
  item: {
    top: 645,
    width: 297,
    height: 75,
    left: 57,
  },
  inner: {
    top: 160,
    left: 132,
    width: 117,
    height: 26,
  },
  text2: {
    top: 165,
    left: 148,
  },
  num: {
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  datingDayOutOfMonth: {
    opacity: 0.5,
    height: 30,
  },
  datingDayInMonth: {
    height: 30,
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
    gap: Gap.gap_md,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    left: 53,
    position: "absolute",
    overflow: "hidden",
  },
  week4: {
    top: 361,
  },
  rectangleView: {
    top: 261,
    left: 34,
    borderRadius: Border.br_31xl,
    backgroundColor: "#ffe0e0",
    width: 317,
    height: 197,
    position: "absolute",
  },
  text3: {
    left: 122,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    top: 319,
  },
  rectanglePressable: {
    top: 369,
    left: 66,
    backgroundColor: Color.colorRoyalblue,
  },
  child1: {
    top: 370,
    left: 231,
    backgroundColor: Color.colorSalmon,
  },
  text4: {
    left: 261,
    width: 91,
    height: 30,
  },
  text5: {
    left: 90,
    width: 40,
    height: 22,
  },
  text6: {
    marginTop: -386,
    marginLeft: -67,
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

export default Delete_expense_page;

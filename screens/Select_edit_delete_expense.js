import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Gap } from "../GlobalStyles";

const Select_edit_delete_expense = () => {
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
        style={[styles.icon1, styles.editPosition]}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Pressable
        style={[styles.pressable1, styles.editPosition]}
        onPress={() => navigation.navigate("Add_expense")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/1.png")}
        />
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>花費事項</Text>
      <View style={[styles.child, styles.itemBg]} />
      <Text style={[styles.text1, styles.textTypo]}> 年 月 日</Text>
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
      <View style={[styles.item, styles.itemBg]} />
      <Pressable
        style={[styles.edit, styles.editPosition]}
        onPress={() => navigation.navigate("Edit_expense_page")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/edit1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Delete_expense_page")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Text style={styles.text2}>CatMinder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  editPosition: {
    height: 48,
    left: 33,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  itemBg: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_base,
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
  pressable: {
    left: 18,
    top: 29,
    width: 78,
    height: 71,
    position: "absolute",
  },
  icon1: {
    width: 48,
    top: 40,
    height: 48,
    left: 33,
    overflow: "hidden",
  },
  icon2: {
    overflow: "hidden",
  },
  pressable1: {
    width: 48,
    top: 40,
    height: 48,
    left: 33,
  },
  text: {
    top: 430,
    left: 57,
  },
  child: {
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
  item: {
    top: 474,
    left: 37,
    width: 298,
    height: 101,
  },
  edit: {
    top: 764,
    width: 58,
    height: 48,
    left: 33,
  },
  icon4: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "77.18%",
    top: "90.52%",
    right: "12.82%",
    bottom: "4.15%",
    width: "10%",
    height: "5.33%",
    position: "absolute",
  },
  text2: {
    marginTop: -385,
    marginLeft: -76,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
    textAlign: "left",
    width: 242,
    height: 61,
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

export default Select_edit_delete_expense;

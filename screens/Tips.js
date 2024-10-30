import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import locationData from "../location.json";

const Tips = () => {
  const navigation = useNavigation();

  // 使用 useState 保存隨機生成的索引
  const [randomIndex, setRandomIndex] = useState(null);

  // 使用 useFocusEffect 在頁面每次聚焦時生成隨機索引
  useFocusEffect(
    React.useCallback(() => {
      generateRandomIndex(); // 每次進入頁面時隨機生成一個索引
    }, [])
  );

  // 定義一個函數來生成新的隨機數
  const generateRandomIndex = () => {
    const newRandomIndex = Math.floor(Math.random() * 100);
    setRandomIndex(newRandomIndex); // 更新狀態
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {/* 返回鍵 */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Mainpage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
        </TouchableOpacity>

        {/* CatMinder 文字 */}
        <Text style={styles.footerText}>CatMinder</Text>
      </View>

      <View style={styles.textLayout}>
        <Text style={[styles.text]}>小知識</Text>
        <View style={styles.textLayout1}>
          {/* 確保 locationData 有效且 randomIndex 不是 null */}
          {randomIndex !== null && (
            <View style={styles.locationText}>
            <Text style={styles.Text1}>
              {locationData.locationList[randomIndex]}
            </Text>
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={generateRandomIndex}
      >
        <Text style={styles.submitButtonText}>知道了！看下一則</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorLightgoldenrodyellow,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  textLayout: {
    height: 600,
    width: 345,
    position: "absolute",
    top: 110, 
    left: 20, 
    paddingTop: 25,
  },
  locationText: {
    borderRadius: 30,
    backgroundColor: Color.colorGainsboro_200,
    marginTop: 100,
    textAlign: "center",
  },
  Text1: {
    fontSize: 30,
    textAlign: "center",
    padding:10,
  },
  text: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  submitButton: {
    backgroundColor: '#D3D3D3', // Light gray
    borderRadius: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 590,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  footerText: {
    color: Color.colorGray_500,
    left: "50%",
    width: 242,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
  },
});

export default Tips;
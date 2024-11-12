import * as React from "react";
import { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, Pressable, Text, View, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useAuth } from "../screens/AuthContext";

const Settings = () => {
  const navigation = useNavigation();
  const { user, loading } = useAuth();
  return (
    <View style={styles.view}>
      {/* 包含返回鍵和 CatMinder 的區塊 */}
      <View style={styles.headerRow}>

        {/* 返回鍵 */}
        <TouchableOpacity
          style={styles.backButton}
          // onPress={() => navigation.navigate("Profile_settings")}
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

      {/* test button */}
      {/* <TouchableOpacity
          onPress={(testFuction)}
        >
          <Text style={{top:1}}>test</Text>
        </TouchableOpacity> */}

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })
          }
        >
          <Text style={styles.textTypo}>切換帳號</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Forgot_password")}
        >
          <Text style={styles.textTypo}>更改密碼</Text>
          {/* <Text style={styles.textTypo}>{user.email}, {user.uid}</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  footerText: {
    color: Color.colorGray_500,
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center", // 垂直居中
    alignItems: "center",     // 水平居中
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: Border.br_61xl,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: "20%",
    backgroundColor: "#FFCBB3",
  },
  view: {
    flex: 1,
    // backgroundColor: Color.colorLightgoldenrodyellow, // Light goldenrod yellow
    backgroundColor: "#FFFAF4",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
});

export default Settings;

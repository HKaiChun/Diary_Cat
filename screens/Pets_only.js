import * as React from "react";
import { useState } from "react";
import { Image, TextInput } from "react-native";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from 'react-native-calendars';
import { ref, set, get } from 'firebase/database';
import { db } from "../FirebaseConfig";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useAuth } from "./AuthContext";

const Pets_only = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const [selectedDate, setSelectedDate] = useState('');
  const [petweight, setPetWeight] = useState('');

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };
  
  // 提交数据到 Firebase Realtime Database
  const handleSubmit = async () => {
    if (!selectedDate || !petweight) {
      Alert.alert('通知', '需填寫所有欄位!');
      return;
    }

    // 将体重数据写入 Firebase，路径为 weight/{selectedDate}
    const weightRef = ref(db, `uid/${user.uid}//weight/${selectedDate}/petweight`);
    
    try {
      await set(weightRef, { weight: parseFloat(petweight) }); // 只上传 petweight
      Alert.alert('通知', '添加成功!');
      setSelectedDate('');  // 清除选中的日期
      setPetWeight('');     // 清除输入的体重
      navigation.navigate("Weight_homepage");
    } catch (error) {
      console.error("上傳資料時發生錯誤: ", error);
      Alert.alert('通知', '上傳資料時發生錯誤，請稍後再試。');
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          {/* 包含返回鍵和 CatMinder 的區塊 */}
          <View style={styles.headerRow}>
            {/* 返回鍵 */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate("Weight_homepage")}
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

          {/* 日曆 */}
          <Calendar
            onDayPress={handleDateSelect}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: 'pink',
              },
            }}
            style={styles.calendar}
          />

          {/* 寵物體重 */}
          <Text style={styles.label}>寵物體重</Text>
          <TextInput
            style={styles.inputBox}
            value={petweight}
            onChangeText={setPetWeight}
            placeholder="請輸入寵物體重(kg)"
            keyboardType="numeric"  // 设置为数字键盘
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* 確定送出按鈕 */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>確定送出</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.colorLightgoldenrodyellow, // Light goldenrod yellow
    backgroundColor: "#FFFAF4",
    paddingHorizontal: 20,
    paddingTop: 40,
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
    color: Color.colorGray_500,
  },
  label: {
    textAlign: "center",
    color: '#2F4F4F', // Dark slate gray
    fontFamily: 'Roboto-Bold',
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 10,
  },
  inputBox: {
    backgroundColor: '#FFE6D9', // Gainsboro
    borderRadius: 8,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: '#FFCBB3', // Light gray
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    bottom: 30,
  },
  submitButtonText: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#000000', // Black
  },
  calendar: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default Pets_only;
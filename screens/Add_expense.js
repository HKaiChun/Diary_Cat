import * as React from "react";
import { useState } from "react";
import { Image, TextInput } from "react-native";
import { StyleSheet, TouchableOpacity, View, Text,ScrollView , KeyboardAvoidingView, Platform,Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from 'react-native-calendars';
import { ref, set,get} from 'firebase/database';
import { db } from "../FirebaseConfig";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useAuth } from "./AuthContext";

const Add_expense = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const [selectedDate, setSelectedDate] = useState('');
  const [price, setPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };
  // 检查是否已经存在相同的 itemDescription，如果存在则加上编号
  const getUniqueItemDescription = async (itemDescription) => {
    const expenseRef = ref(db, `uid/${user.uid}/expense/${selectedDate}/item`);
    const snapshot = await get(expenseRef);
    let uniqueDescription = itemDescription;
    let count = 1;

    // 如果数据存在，检查是否有重复的描述
    if (snapshot.exists()) {
      const items = snapshot.val();

      // 如果已经有相同的 itemDescription
      while (items[uniqueDescription]) {
        uniqueDescription = `${itemDescription}_${count}`;
        count++;
      }
    }

    return uniqueDescription;
  };

  const handleSubmit = async() => {
    if (!selectedDate || !price || !itemDescription) {
      Alert.alert('通知','需填寫所有欄位!');
      return;
    }
    try {
      // 获取唯一的 itemDescription
      const uniqueItemDescription = await getUniqueItemDescription(itemDescription);

      // 创建引用路径
      const expenseRef = ref(db, `uid/${user.uid}/expense/${selectedDate}/item/${uniqueItemDescription}`);

      // 保存数据
      await set(expenseRef, {
        price: parseFloat(price),
      });

      Alert.alert('通知','添加成功!');
      navigation.navigate("Expense_page");
    } catch (error) {
      Alert.alert('通知','價格須輸入數字');
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          {/* 包含返回鍵和 Diary_Cat 的區塊 */}
          <View style={styles.headerRow}>
            {/* 返回鍵 */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate("Expense_page")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/1.png")}
              />
            </TouchableOpacity>

            {/* Diary_Cat 文字 */}
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

          {/* 花費事項 */}
          <Text style={styles.label}>花費事項</Text>
          <TextInput
            style={styles.inputBox}
            value={itemDescription}
            onChangeText={setItemDescription}
            placeholder="請輸入花費事項"
          />

          {/* 價格 */}
          <Text style={styles.label}>價格</Text>
          <TextInput
            style={styles.inputBox}
            value={price}
            onChangeText={setPrice}
            placeholder="請輸入數字"
            keyboardType="numeric"
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
    backgroundColor: "#FFFAF4", // background color
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
    backgroundColor: '#FFE6D9',
    borderRadius: 8,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: '#FFCBB3',
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

export default Add_expense;
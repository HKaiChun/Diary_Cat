import * as React from "react";
import { useState } from "react";
import { Image, ScrollView, TextInput, KeyboardAvoidingView, Platform,Alert } from "react-native";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getDatabase, ref, set, remove } from 'firebase/database';
import { Calendar } from 'react-native-calendars';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useAuth } from "./AuthContext";

const Edit_expense_page = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const route = useRoute();

  const { date, name, price } = route.params;

  const [selectedDate, setSelectedDate] = useState(date);
  const [expenseName, setExpenseName] = useState(name);
  const [expensePrice, setExpensePrice] = useState(price);
  const newname=name;
  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleUpdate = () => {
    if (!selectedDate || !expenseName || !expensePrice) {
      Alert.alert('通知','需填滿所有欄位');
      return;
  }

  if (isNaN(expensePrice)) {
      Alert.alert('通知','價格需填入數字');
      return;
  }

  const db = getDatabase();
  const originalRef = ref(db, `expense/${date}/item/${name}`);
  const newRef = ref(db, `uid/${user.uid}/expense/${selectedDate}/item/${expenseName}`);

  set(newRef, {
      //name:expenseName,
      price: parseFloat(expensePrice)
  })
    .then(() => {
      if ((date !== selectedDate) || (name !== expenseName)) {
        remove(originalRef)
          .then(() => {
            Alert.alert('通知','修改成功!');
            navigation.navigate("Expense_page");
          })
          .catch(error => {
            Alert.alert('Error deleting old entry: ' + error.message);
          });
      } else {
        Alert.alert('通知','修改成功!');
        navigation.navigate("Expense_page");
      }
    })
    .catch(error => {
      Alert.alert('通知','Error updating expense: ' + error.message);
    });
  };

  const handleDelete = () => {
    const db = getDatabase();
    const expenseRef = ref(db, `uid/${user.uid}/expense/${selectedDate}/item/${newname}`);

    remove(expenseRef)
      .then(() => {
        Alert.alert('通知','刪除成功!');
        navigation.navigate("Expense_page");
      })
      .catch(error => {
        Alert.alert('通知','Error deleting expense: ' + error.message);
      });
  };

  return (
    <View style={styles.container}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      
        <View style={styles.headerRow}>
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

          <Text style={styles.footerText}>CatMinder</Text>
        </View>
        
        <ScrollView>
          <Calendar
            onDayPress={handleDateSelect}
            initialDate={selectedDate}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: 'pink',
              },
            }}
            style={styles.calendar}
          />

          <Text style={styles.label}>花費事項</Text>
          <TextInput
            style={styles.inputBox}
            value={expenseName}
            onChangeText={setExpenseName}
            placeholder="請輸入花費事項"
          />

          <Text style={styles.label}>價格</Text>
          <TextInput
            style={styles.inputBox}
            value={String(expensePrice)}
            onChangeText={setExpensePrice}
            placeholder="請輸入數字"
            keyboardType="numeric"
          />
        </ScrollView>
    </KeyboardAvoidingView>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.submitButton} onPress={handleUpdate}>
            <Text style={styles.submitButtonText}>修改</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleDelete}>
            <Text style={styles.submitButtonText}>刪除</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.colorLightgoldenrodyellow,
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
  },
  label: {
    textAlign: "center",
    color: '#2F4F4F',
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
    borderRadius: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#000000',
  },
  buttonRow: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 80,
  },
  calendar: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default Edit_expense_page;
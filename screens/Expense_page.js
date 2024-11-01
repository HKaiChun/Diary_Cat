import * as React from "react";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { db } from "../FirebaseConfig";
import { ref, onValue } from "firebase/database";
import moment from "moment";
import { useAuth } from "./AuthContext";

const Expense_page = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const isFocused = useIsFocused();
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState(moment().year()); // 當前年份
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1); // 當前月份 (月份從 0 開始)
  const [totalExpense, setTotalExpense] = useState(0); // 當前月份的總支出
  const [isPickerVisible, setIsPickerVisible] = useState(false); // Picker 可見性狀態

  // 定義前後 50 年的年份範圍
  const years = Array.from({ length: 101 }, (_, i) => moment().year() - 50 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1); // 1 到 12 月
  
  useEffect(() => {
    if (isFocused) {
      // 當頁面聚焦時，重設年份和月份為當前年份和月份
      setSelectedYear(moment().year());
      setSelectedMonth(moment().month() + 1); // 月份從 0 開始
      updateExpenses(moment().year(), moment().month() + 1); // 同時重新更新當前月份的資料
    }
  }, [isFocused]);

  // //確保頁面每次顯示時資料都能即時更新
  // useEffect(() => {
  //   if (isFocused) {
  //     updateExpenses(selectedYear, selectedMonth);
  //   }
  // }, [isFocused, selectedYear, selectedMonth]);

  // 更新支出資料
  const updateExpenses = async (year, month) => {
    const formattedMonth = `${year}-${String(month).padStart(2, "0")}`;
    setExpenses([]); // 清空之前的支出數據
    const daysInMonth = moment(`${year}-${month}`, "YYYY-MM").daysInMonth(); // 當月的天數
    const updatedExpenses = [];
    const expensePromises = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const dayStr = `${formattedMonth}-${String(day).padStart(2, "0")}`;
      const dbRef = ref(db, `uid/${user.uid}/expense/${dayStr}/item`);

      const promise = new Promise((resolve) => {
        onValue(
          dbRef,
          (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              const dailyExpenses = Object.keys(data).map((key) => ({
                name: key,
                price: data[key].price,
                date: dayStr,
              }));
              updatedExpenses.push(...dailyExpenses);
            }
            resolve();
          },
          {
            onlyOnce: true, // 只獲取一次數據
          }
        );
      });

      expensePromises.push(promise);
    }

    // 等待所有數據加載完成
    await Promise.all(expensePromises);

    // 按日期排序支出
    const sortedExpenses = updatedExpenses.sort((a, b) =>
      moment(b.date).valueOf() - moment(a.date).valueOf()
    );

    setExpenses(sortedExpenses);
  };

  // 當年或月份變化時重新加載數據
  useEffect(() => {
    updateExpenses(selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth]);

  // 當支出變化時更新總支出
  useEffect(() => {
    if (expenses.length > 0) {
      const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.price), 0);
      setTotalExpense(total);
    } else {
      setTotalExpense(0);
    }
  }, [expenses]);

  const groupByDate = (expenses) => {
    return expenses.reduce((grouped, expense) => {
      const date = expense.date;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(expense);
      return grouped;
    }, {});
  };

  const groupedExpenses = groupByDate(expenses);

  const handlePress = (expense) => {
    navigation.navigate("Edit_expense_page", {
      date: expense.date,
      name: expense.name,
      price: expense.price,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Mainpage")}>
          <Image style={styles.icon} contentFit="cover" source={require("../assets/1.png")} />
        </TouchableOpacity>
        <Text style={styles.footerText}>CatMinder</Text>
      </View>

      <View style={styles.buttonRow}>
        <Text style={styles.month_expense}>本月支出: {totalExpense.toFixed(2)}</Text>
      </View>

      {/* Row containing both buttons */}
      <View style={styles.rowButtons}>
        {/* Toggle button for month selection dropdown */}
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsPickerVisible((prev) => !prev)} // Toggle picker visibility
        >
          <Text style={styles.toggleButtonText}>
            {isPickerVisible ? "收起" : `月份選擇(${selectedYear}-${String(selectedMonth).padStart(2, "0")})`}
          </Text>
        </TouchableOpacity>

        {/* Add expense button */}
        <TouchableOpacity onPress={() => navigation.navigate("Add_expense")} style={styles.addButton}>
          <Text style={styles.addText}>記帳</Text>
        </TouchableOpacity>
      </View>

      {/* Show Year and Month Pickers when triggered */}
      {isPickerVisible && (
        <View style={styles.pickerRow}>
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue) => {
              setSelectedYear(itemValue);
              updateExpenses(itemValue, selectedMonth); // 更新資料
            }}
          >
            {years.map((year) => (
              <Picker.Item key={year} label={String(year)} value={year} />
            ))}
          </Picker>

          <Picker
            selectedValue={selectedMonth}
            style={styles.picker}
            onValueChange={(itemValue) => {
              setSelectedMonth(itemValue);
              updateExpenses(selectedYear, itemValue); // 更新資料
            }}
          >
            {months.map((month) => (
              <Picker.Item key={month} label={String(month)} value={month} />
            ))}
          </Picker>
        </View>
      )}

      <ScrollView style={styles.scrollView}>
        <View style={styles.expenseContainer}>
          {expenses.length === 0 ? (
            // 如果該月份沒有任何支出，顯示預設消息
            <View style={styles.noDataContainer}>
              <Text style={styles.noDataText}>{selectedYear}-{selectedMonth} 無支出紀錄</Text>
            </View>
          ) : (
            // 否則顯示正常的支出列表
            Object.keys(groupedExpenses).map((date, index) => (
              <View key={index} style={styles.dateGroupContainer}>
                <Text style={styles.dateText}>{date}</Text>
                {groupedExpenses[date].map((expense, expenseIndex) => (
                  <TouchableOpacity
                    key={expenseIndex}
                    style={styles.expenseButton}
                    onPress={() => handlePress(expense)}
                  >
                    <Text style={styles.expenseText}>
                      {`${expense.name}  :  $ ${expense.price}`}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))
          )}
        </View>
      </ScrollView>

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
  buttonRow: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10,
  },
  month_expense: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#000',
  },
  rowButtons: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: 10,
  },
  toggleButton: {
    flex: 1,
    backgroundColor: "#FFCBB3",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: 10,
    marginRight: 50, // Add margin between the two buttons
  },
  toggleButtonText: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    color: "#000",
    textAlign:'center',
  },
  addButton: {
    backgroundColor: "#FFCBB3",
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  addText: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    color: "#000",
  },
  pickerRow: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: 10,
  },
  picker: {
    width: "48%", 
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 8,
  },
  scrollView: {
    flex: 1,
    padding: 10,
    marginTop: "4%",
  },
  expenseContainer: {
    flexDirection: 'column',
  },
  dateGroupContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderRadius: 15,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expenseButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFE6D9',
    borderRadius: 5,
  },
  expenseText: {
    fontSize: 16,
  },
  noDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,  // 設置容器高度，可以根據需要調整
  },
  noDataText: {
    fontSize: 18,
    color: '#888',
    fontWeight: 'bold',
  },  
  container: {
    flex: 1,
    // backgroundColor: Color.colorLightgoldenrodyellow,
    backgroundColor: "#FFFAF4",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default Expense_page;
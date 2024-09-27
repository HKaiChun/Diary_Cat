import * as React from "react";
import { Image } from "expo-image";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation,useIsFocused } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { db } from "../FirebaseConfig";
import { ref, onValue, off } from "firebase/database";
import moment from "moment";

const Expense_page = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [expenses, setExpenses] = useState([]);
  const currentDate = new Date();
  const currentMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}`; // YYYY-MM format for the current month

  // Function to get the total number of days in the current month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  useEffect(() => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1); // Get the number of days in the current month
    const unsubscribe =navigation.addListener('focus',()=> {
             updateExpenses();
    });
    const refs = []; // Store all references to easily uninstall

    // Iterate over each day and listen for data changes on that day
    for (let day = 1; day <= daysInMonth; day++) {
      const dayStr = `${currentMonth}-${String(day).padStart(2, "0")}`; // YYYY-MM-DD format
      const dbRef = ref(db, `expense/${dayStr}/item`);
      refs.push(dbRef); // Save references to remove listeners later

      // Use .onValue to listen for data changes on each day
      onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dailyExpenses = Object.keys(data).map((key) => ({
            name: key,
            price: data[key].price,
            date: dayStr, // Date information
          }));

          // Update the expense list: filter out the data for the current day first, and then insert the latest data
          setExpenses((prevExpenses) => {
            const filteredExpenses = prevExpenses.filter((expense) => expense.date !== dayStr);
            const updatedExpenses = [...filteredExpenses, ...dailyExpenses];

            // Sort in reverse chronological order
            return updatedExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
          });
        }
      });
    }

    // Remove all listeners when the component is unmounted
    return () => {
      unsubscribe;
      refs.forEach((dbRef) => {
        // Use off() to remove listeners
        off(dbRef);
      });
    };
  }, [isFocused,navigation]); // Empty dependency array ensures this effect runs only once
  
  // Function to navigate to Edit_expense_page.js when an expense item is pressed
  const handlePress = (expense) => {
    navigation.navigate("Edit_expense_page", {
      date: expense.date,
      name: expense.name,
      price: expense.price,
    });
  };
  const updateExpenses = () => {
    // Refresh expenses by triggering useEffect again
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() + 1);
    const updatedExpenses = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const dayStr = `${currentMonth}-${String(day).padStart(2, "0")}`;
      const dbRef = ref(db, `expense/${dayStr}/item`);

      onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dailyExpenses = Object.keys(data).map((key) => ({
            name: key,
            price: data[key].price,
            date: dayStr,
          }));

          updatedExpenses.push(...dailyExpenses);
        }
      });
    }

    // Set the updated expenses
    setExpenses(updatedExpenses);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {/* Back button */}
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

        {/* Diary_Cat text */}
        <Text style={styles.footerText}>Diary_Cat</Text>
      </View>

      <View style={styles.buttonRow}>
        <Text style={[styles.month_expense]}>本月支出</Text>
        <Text style={[styles.all_expense]}>累計支出</Text>
      </View>

      {/* Add expense button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Add_expense")}
        style={styles.addButton}
      >
        <Text style={styles.addText}>記帳</Text>
      </TouchableOpacity>

      {/* Scrollable list starting from the middle of the screen */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.expenseContainer}>
          {expenses.map((expense, index) => (
            <TouchableOpacity
              key={index}
              style={styles.expenseButton}
              onPress={() => handlePress(expense)}
            >
              <Text style={styles.expenseText}>
                {`${expense.date}-${expense.name}-${expense.price}`}
              </Text>
            </TouchableOpacity>
          ))}
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
    color: Color.colorGray_500, // Gray color
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
  },
  buttonRow: {
    position: "absolute",
    top: "15%", // Distance from the bottom of the screen
    left: "10%",
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between", // Position buttons on the left and right sides
    paddingHorizontal: 60, // Adjust left-right margins
  },
  addButton: {
    alignSelf: "center",
    backgroundColor: "#FFD700", // Gold background
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    top: "10%",
  },
  addText: {
    fontSize: 18,
    fontFamily: FontFamily.interRegular,
    color: "#000",
  },
  scrollView: {
    flex: 1,
    marginTop: "50%", // Start displaying from the middle of the screen
  },
  expenseButton: {
    backgroundColor: "#DCDCDC", // Gray background
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  expenseText: {
    fontSize: 18,
    fontFamily: FontFamily.interRegular,
    color: "#000000", // Black font
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorLightgoldenrodyellow, // Light goldenrod yellow
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default Expense_page;
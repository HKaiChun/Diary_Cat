import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native"; // useIsFocused for detecting screen focus
import { Picker } from "@react-native-picker/picker";
import moment from "moment";
import { ref, onValue } from "firebase/database";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { db } from "../FirebaseConfig"; // Firebase config
import { useAuth } from "./AuthContext";

const screenWidth = Dimensions.get("window").width;

const Weight_homepage = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const isFocused = useIsFocused(); // Detect when the page is focused
  const [selectedYear, setSelectedYear] = useState(moment().year()); // Default to current year
  const [weights, setWeights] = useState([]);
  const [isPickerVisible, setIsPickerVisible] = useState(false); // Picker visibility state
  const years = Array.from({ length: 101 }, (_, i) => moment().year() - 50 + i);

  // Fetch data from Firebase Realtime Database
  const updateWeights = (year) => {
    const weightRef = ref(db, `uid/${user.uid}/weight/`);
    
    const handleDataFetch = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const fetchedWeights = Object.entries(data).map(([date, weightDetails]) => {
          const weight = typeof weightDetails?.petweight === 'object' 
            ? weightDetails?.petweight?.weight 
            : weightDetails?.petweight;

          return {
            date,
            weight: weight ?? null, // Assign null if no weight data is found
          };
        });
        setWeights(fetchedWeights.filter((weight) => moment(weight.date).format("YYYY") === String(year))); // Filter data by selected year
      } else {
        setWeights([]);
      }
    };

    onValue(weightRef, handleDataFetch, {
      onlyOnce: true, // Only fetch data once
    });
  };

  // 在頁面首次渲染時載入當年份資料
  useEffect(() => {
    updateWeights(selectedYear); // 加載當年份資料
  }, []);

  // 用戶手動選擇年份時觸發資料更新
  useEffect(() => {
    if (isFocused) {
      updateWeights(selectedYear);
    }
  }, [selectedYear, isFocused]);

  const groupByDate = (weights) => {
    return weights.reduce((grouped, weight) => {
      if (weight && weight.date) {
        const date = weight.date;
        const year = moment(date).format("YYYY");
        if (year === String(selectedYear)) {
          if (!grouped[date]) {
            grouped[date] = [];
          }
          grouped[date].push(weight);
        }
      }
      return grouped;
    }, {});
  };

  const groupedweight = groupByDate(weights);

  // Sort dates in descending order
  const sortedDates = Object.keys(groupedweight).sort((a, b) => moment(b).diff(moment(a)));

  const handlePress = (weights) => {
    navigation.navigate("Edit_weight_page", {
      date: weights.date,
      weight: weights.weight,
    });
  };

  // Prepare data for the bar chart
  const getWeightsForYear = (weights, selectedYear) => {
    return weights.filter((weight) => moment(weight.date).format("YYYY") === String(selectedYear));
  };

  // 根據月份整理數據，取每個月最新的一筆數據
  const getWeightByMonth = () => {
    const filteredWeights = getWeightsForYear(weights, selectedYear); // 根據選擇的年份篩選數據
    const monthlyData = Array(12).fill(null); // 初始化一個 12 位數組對應 12 個月
  
    filteredWeights.forEach((entry) => {
      const entryMonth = moment(entry.date).month(); // 獲取月份（0 = 1月，11 = 12月）
      const entryDate = moment(entry.date);
      // 如果該月份已有數據，且新數據的日期更晚，則更新
      if (!monthlyData[entryMonth] || moment(monthlyData[entryMonth].date).isBefore(entryDate)) {
        monthlyData[entryMonth] = entry;
      }
    });
  
    return monthlyData.map((entry) => (entry ? entry.weight : 0)); // 將無數據的月份設為 0
  };
  
  const weightByMonth = getWeightByMonth(); // 獲取每個月的體重數據

  // 準備圖表數據
  const chartData = {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        data: weightByMonth, 
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Mainpage")}>
          <Image style={styles.icon} contentFit="cover" source={require("../assets/1.png")} />
        </TouchableOpacity>

        <Text style={styles.footerText}>CatMinder</Text>
      </View>

      {/* Row containing both buttons */}
      <View style={styles.rowButtons}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsPickerVisible((prev) => !prev)}
        >
          <Text style={styles.toggleButtonText}>
            {isPickerVisible ? "收起" : `年份選擇(${selectedYear})`}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Pets_only")} style={styles.addButton}>
          <Text style={styles.addText}>記一筆</Text>
        </TouchableOpacity>
      </View>

      {isPickerVisible && (
        <View style={styles.pickerRow}>
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue) => {
              setSelectedYear(itemValue);
              updateWeights(itemValue); // 手動觸發資料更新
            }}
          >
            {years.map((year) => (
              <Picker.Item key={year} label={String(year)} value={year} />
            ))}
          </Picker>
        </View>
      )}
      
      {!isPickerVisible && (
      <ScrollView horizontal style={{height:0}}> 
        <View style={{ backgroundColor: 'white', width: screenWidth * 1.5, height: 250 }}> 
          <BarChart
            data={chartData}
            width={screenWidth * 1.4}  
            height={230} 
            fromZero={true}
            yAxisSuffix=" kg" 
            showValuesOnTopOfBars={true}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 1,
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              barPercentage: 0.6, 
              fillShadowGradient: `rgba(0, 0, 255, 1)`,
              fillShadowGradientOpacity: 1,
            }}
            verticalLabelRotation={0} 
            style={{
              marginVertical: 10,
            }}
          />
        </View>
      </ScrollView>
      )}
    
      <ScrollView style={styles.scrollView}>
        <View style={styles.expenseContainer}>
          {sortedDates.length > 0 ? (
            sortedDates.map((date, index) => (
              <View key={index} style={styles.dateGroupContainer}>
                <Text style={styles.dateText}>{`${date}`}</Text>
                {groupedweight[date].map((weight, weightIndex) => (
                  <TouchableOpacity
                    key={weightIndex}
                    style={styles.expenseButton}
                    onPress={() => handlePress(weight)}
                  >
                    <Text style={styles.expenseText}>
                      {weight?.weight !== null ? `體重: ${weight.weight} kg` : '無體重資料'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))
          ) : (
            <Text style={styles.noDataText}>{selectedYear}無體重資料</Text>
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
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    width:242,
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
    marginRight: 50,
  },
  toggleButtonText: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    color: "#000",
    textAlign:'center',
  },
  addButton: {
    backgroundColor: "#FFCBB3",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  addText: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    color: "#000",
  },
  scrollView: {
    flex: 1,
    padding: 10,
    marginTop: "0%",
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
  noDataText: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
  },
  container: {
    flex: 1,
    // backgroundColor: Color.colorLightgoldenrodyellow,
    backgroundColor: "#FFFAF4",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default Weight_homepage;
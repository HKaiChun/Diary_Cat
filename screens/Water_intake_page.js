import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { db } from "../FirebaseConfig";
import { ref, onValue, remove } from "firebase/database";
import moment from "moment";
// import ProgressBar from 'react-native-progress/Bar';
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "./AuthContext";

const Water_intake_page = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const [waterData, setWaterData] = React.useState([]);
  const [latestWeight, setLatestWeight] = React.useState(null); // 保存最新的體重
  const [latestDate, setLatestDate] = React.useState(null); // 保存最新體重的日期
  const [DAY, setDAY] = React.useState(moment().format('YYYY-MM-DD'));

  useFocusEffect(
    React.useCallback(() => {
      // 獲取所有日期的體重數值
      const weightRef = ref(db, `uid/${user.uid}/weight`);
      
      const unsubscribe = onValue(weightRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          // 獲取所有日期的键
          const dates = Object.keys(data);
          
          // 按日期排序，獲取最新的日期
          const latestDate = dates.sort((a, b) => new Date(b) - new Date(a))[0];
          
          // 獲取最新日期的體重
          const latestWeight = data[latestDate]?.petweight?.weight || null;
          
          // 更新最新體重和日期
          setLatestWeight(latestWeight);
          setLatestDate(latestDate);
        } else {
          // 如果没有體重，顯示通知並跳轉到體重頁面
          Alert.alert(
            "通知",
            "请先前往體重頁面填寫貓咪體重訊息，以便計算貓咪所需飲水量。",
            [
              {
                onPress: () => navigation.navigate("Weight_homepage"), // 跳轉到體重頁面
              },
            ]
          );
        }
      }, (error) => {
        console.error("Error fetching weight data:", error);
      });

      // Return cleanup function to unsubscribe when screen is no longer focused
      return () => unsubscribe();
    }, [navigation])
  );

  // 清除不是今天的數據
  React.useEffect(() => {
    const waterRef = ref(db, `uid/${user.uid}/water`);
    
    onValue(waterRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const dates = Object.keys(data);

        // 遍歷所有日期，清除不是今天的數據
        dates.forEach((date) => {
          if (date !== DAY) {
            remove(ref(db, `water/${date}`)) 
              .then(() => console.log(`Removed data for date: ${date}`))
              .catch((error) => console.error("Error removing data: ", error));
          }
        });
      }
    }, (error) => {
      console.error("Error fetching water data: ", error);
    });
  }, [DAY]);

  React.useEffect(() => {
    if (latestWeight !== null) {
      // 獲取飲水數值
      const dbRef = ref(db, `uid/${user.uid}/water/${DAY}/time`);
      onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          // 將資料轉換為陣列形式 [{ time: "第1次", ml: 2 }, { time: "第2次", ml: 2 }, ...]
          const formattedData = Object.keys(data).map((key) => ({
            time: key,
            ml: data[key].ml,
          }));
          setWaterData(formattedData);
        } else {
          console.log("No water data available");
        }
      }, (error) => {
        console.error("Error fetching water data:", error);
      });
    }
  }, [latestWeight]);

  
  const totalWaterIntake = latestWeight ? latestWeight * 40 : 0; // 需喝的水量
  const alreadyDrank = waterData.reduce((total, item) => total + item.ml, 0); // 已喝的水量
  const progress = totalWaterIntake ? (alreadyDrank / totalWaterIntake) : 0; // 进度


  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {/* 返回键 */}
        {/* <Text>{user.uid}</Text> */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Mainpage")}
        >
          <Image
            style={[styles.icon]}
            contentFit="cover"
            source={require("../assets/1.png")}
          />
        </TouchableOpacity>
        {/* CatMinder 標题 */}
        <Text style={styles.footerText}>CatMinder</Text>
      </View>
      
      <Text style={styles.needwater}>
        {latestDate ? `最新體重日期：${latestDate}\n貓的體重：${latestWeight} kg` : "無輸入體重"}
      </Text> 
      <Text style={styles.needwater}>
        你家貓需喝{totalWaterIntake}ml
      </Text> 
      <Text style={styles.alreadywater}>今日約已喝 {alreadyDrank} ml</Text> 


      <View style={{ marginTop: '5%', alignItems: 'center' }}>
      <Text style={{ marginBottom: 2, fontSize: 16, fontWeight: 'bold' }}>
        本日進度條
      </Text>
      <View style={{ width: 300, height: 20, backgroundColor: '#e0e0e0', borderRadius: 10, overflow: 'hidden' }}>
        <LinearGradient
          colors={['#74ebd5', '#a6c1ee']} // Gradient colors
          start={[0, 0]} 
          end={[1, 0]} // Left to right gradient
          style={{ width: `${progress * 100}%`, height: '100%' }}
        />
      </View>
      {/* Display Percentage */}
      <Text style={{ marginTop: 5, fontSize: 16, fontWeight: 'bold' }}>
        {Math.round(progress * 100)}%
      </Text>
      </View>
      <View style={styles.down}>
        <ScrollView style={styles.water_context}>
          {waterData.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.countText}>{item.time}</Text>
              <Text style={styles.text}>大約喝了 {item.ml * 5} 秒 ，約 {item.ml} ml</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorLightgoldenrodyellow, // Light goldenrod yellow
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    color: Color.colorGray_500,
    left: "50%",
    width: 242,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
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
  item: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
  water_context: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  down: {
    marginTop: "5%",
    flex: 1,
    padding: 10,
  },
  needwater: {
    textAlign: 'center',
    fontSize: 18,
  },
  alreadywater: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Water_intake_page;
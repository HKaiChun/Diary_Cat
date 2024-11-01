import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, TouchableOpacity,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { db } from "../FirebaseConfig";
import { ref, set,get,child, getDatabase, onValue} from 'firebase/database';
import { useAuth } from "./AuthContext";

const Vaccine_homepage = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const [vaccineData, setVaccineData] = React.useState({});  // 儲存疫苗資料的狀態
  React.useEffect(() => {
    // 從 Firebase 資料庫取得資料
    const db = getDatabase();
    const vaccineRef = ref(db, `uid/${user.uid}/vaccine/`);  // 假設資料儲存在 "vaccine/" 節點
    onValue(vaccineRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setVaccineData(data);  // 更新狀態
      }
    });
  }, []);


  return (
    <View style={styles.container}>
      {/* 包含返回鍵和 CatMinder 的區塊 */}
      <View style={styles.headerRow}>
        {/* <Text>{user.uid}</Text> */}
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



       {/* 使用 ScrollView 並對日期排序 (從新到舊) */}
      <ScrollView style={styles.vaccineview}>
        {Object.keys(vaccineData)
          .sort((a, b) => new Date(b) - new Date(a))  // 根據日期排序，從新到舊
          .map((dateKey) => (
            <View key={dateKey}>
              {Object.keys(vaccineData[dateKey]).map((nameKey) => (
                  <TouchableOpacity
                    key={nameKey}
                    style={styles.vaccineItem}
                    onPress={() => navigation.navigate("Edit_vaccine", { dateKey, nameKey, vaccineDetails: vaccineData[dateKey][nameKey] })}
                  >
                  <Text>日期: {dateKey}</Text>
                  <Text>疫苗名稱: {nameKey}</Text>
                  <Text>副作用: {vaccineData[dateKey][nameKey].sideffect}</Text>
                  </TouchableOpacity>
              ))}
            </View>
        ))}
      </ScrollView>



      {/* 新增紀錄按鈕 */}
      <TouchableOpacity
        style={[styles.plus1, styles.plus1Position]}
        onPress={() => navigation.navigate("Add_vaccine_record")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/plus-11.png")}
        />
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
  plus1Position: {
    top: 138,
    position: "absolute",
  },
  text: {
    top: 314,
    left: 141,
  },
  plus1: {
    left: 307,
    width: 47,
    height: 42,
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
  vaccineItem: {
    marginVertical: 10,
    padding: 10,
    // backgroundColor: Color.colorOldlace,
    backgroundColor: "#FFE6D9",
    borderRadius: Border.br_12xl,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
  },
  vaccineview: {
    // backgroundColor: Color.colorLightgoldenrodyellow,
    backgroundColor: "#FFFAF4",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    marginTop:70, // 這裡加上 marginTop 來將整個畫面下移
  },
  
});

export default Vaccine_homepage;
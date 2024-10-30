import * as React from "react";
import { StyleSheet, View, Text, Pressable, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { ref, set, get, child } from 'firebase/database';
import { db } from "../FirebaseConfig";
import { useAuth } from "./AuthContext";

const Edit_vaccine = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const [text, setText] = React.useState('');
  const [textwo, setTextwo] = React.useState('');
  const [date, setDate] = React.useState(new Date()); // 儲存選擇的日期
  const [showDatePicker, setShowDatePicker] = React.useState(false); // 控制日期選擇器顯示與否
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date; // 如果選擇的日期為空則使用默認日期
    setShowDatePicker(false); // 選擇日期後關閉日期選擇器
    setDate(currentDate); // 更新日期狀態
  };
  const route = useRoute();
  const { dateKey, nameKey, vaccineDetails } = route.params;
  // 初始化表單的資料
  React.useEffect(() => {
    setText(nameKey);  // 初始化疫苗名稱
    setTextwo(vaccineDetails.sideffect);  // 初始化副作用
    setDate(new Date(dateKey));  // 初始化日期
  }, [nameKey, vaccineDetails, dateKey]);




  const handleSubmit = async () => {
    // 使用正確的格式化方式，並且這裡的 formattedDate 應該是常量
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const vaccineRef = ref(db, `uid/${user.uid}/vaccine/` + formattedDate + '/' + text);
  
    try {
      // 檢查該日期是否已有資料
      const snapshot = await get(vaccineRef);
      
      if (snapshot.exists()) {
        console.log("該日期已經有資料，請選擇是否合併或處理");
        const existingData = snapshot.val();
        const updatedData = {
          ...existingData,
          sideffect: textwo // 合併副作用資料
        };
        setText('')
        setDate(new Date())
        setTextwo('')
        // 將合併後的資料寫回 Firebase
        await set(vaccineRef, updatedData);
      } else {
        // 如果沒有該日期的資料，直接寫入新的資料
        await set(vaccineRef, {
          sideffect: textwo
        });
        setText('')
        setDate(new Date())
        setTextwo('')
      }
  
      Alert.alert('通知','修改成功！');
      navigation.navigate("Vaccine_homepage");
    } catch (error) {
      console.error("寫入數據時出錯：", error);
    }
  };

  const handleDelete = async () => {
    const vaccineRef = ref(db, `uid/${user.uid}/vaccine/` + dateKey + '/' + nameKey);

    try {
      await set(vaccineRef, null);  // 將資料設置為 null 來刪除它
      Alert.alert('資料已刪除');
      navigation.navigate("Vaccine_homepage");
    } catch (error) {
      console.error("刪除資料時出錯:", error);
    }
  };

  const handlePress = (itemName) => {
    navigation.navigate("Select_edit_delete_expense", { itemName });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'} // iOS 使用 padding，Android 使用 height
      //keyboardVerticalOffset={-10}  // 調整這個值來避免鍵盤遮擋
    >

    <View style={styles.headerRow}>
        {/* 返回鍵 */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Vaccine_homepage")}
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

      <View style={ styles.textLayout}>
        <Text style={[styles.text]}>疫苗名稱</Text>
        <TextInput
        style={[styles.child, styles.itemBorder]}             // 文字輸入框的樣式
        placeholder="name"          // 當輸入框沒有內容時顯示的提示文字
        onChangeText={(value) => setText(value)} // 每當輸入框內容改變時，呼叫 setText 更新狀態
        value={text}                     // 綁定輸入框的值為狀態變數 text
      />
      {/* 日期選擇區域 */}
        {/* 顯示日期的可點擊文本 */}
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateLabel}>日期：</Text>
          <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {/* 日期選擇器 */}
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="calendar" // 顯示方式為日曆
            onChange={onChangeDate}
          />
        )}
      <Text style={[styles.text1]}>副作用</Text>
      <TextInput
        style={[styles.item, styles.itemBorder]}
        placeholder="sideffect"
        onChangeText={(value) => setTextwo(value)}
        value={textwo}
        multiline={true}  // 啟用多行輸入
        textAlignVertical="top"  // 讓文字從上方開始顯示
      />




      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text>修改</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleDelete}
        >
          <Text>刪除</Text>
        </TouchableOpacity>
      </View>



      </ScrollView>
      </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorLightgoldenrodyellow, // Light goldenrod yellow
    //backgroundColor: '#d2faf3',//測試
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  textLayout: {
    //backgroundColor:'#d8aaf2',//測試
    height: 600,
    width: 345,
    position: "absolute",
    /*top: 110, // 讓元素距離頂部 100 像素
    left: 20, // 確保它從容器的左邊開始*/
    paddingTop: 25,//疫苗名稱上方空白大小
  },
  text: {
    /*top: 144,
    left: 124,
    width: 225,
    height: 62,*/
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
  },
  child: {
    //top: 206,
    height: 58,
    fontSize: 25,
    padding: 10,
  },
  itemBorder: {
    width: 316,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_2xl,
    left: 14,
    top: 10,
    //position: "absolute",
  },
  dateLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    top: 50,
    left: 14,
  },
  dateText: {
    fontSize: 18,
    padding: 5,
    backgroundColor: '#fff', // 背景顏色區分點擊區域
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    //marginTop: 55,
    top: 55,
    width: 316,
    left: 14,
  },

  text1: {//副作用字的位置
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    top: 70
  },
  item: {
    marginTop:70,
    height: 154,
    fontSize: 25,
    textAlignVertical: 'top', // 讓文字從上方開始
    padding: 10, // 增加內邊距
  },
  scrollViewContent: {
    //paddingHorizontal: 0,
    //paddingTop: 40,
    //paddingBottom: 800,
    flexGrow: 1, // 保持ScrollView內容可捲動
    //backgroundColor:'blue',
    height: 735,
  },
  buttonContainer: {
    flexDirection: "row",  // 按鈕橫向排列
    justifyContent: "space-between",  // 在兩邊保持間距
    marginTop: 590,  // 可以適當調整垂直間距
  },
  submitButton: {
    backgroundColor: '#D3D3D3',
    borderRadius: 30,
    height: 50,
    width: 140,  // 調整寬度來使它們適應在一行
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,  // 調整按鈕之間的水平間距
  },
  headerRow: {
    //backgroundColor:'red',//測試
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
});

export default Edit_vaccine;
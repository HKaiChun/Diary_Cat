import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { RadioButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Search_products = () => {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState(''); // 搜尋
  const [selectedShop, setSelectedShop] = React.useState("PChome"); // 商家
  const data = {
    selectedShop: selectedShop,
    search: search,
  };

  const handleSubmit = () => {
    if (search.trim() === '') {
      Alert.alert('提示', '請輸入搜尋內容');
    } else {
      navigation.navigate("Search_product_results", { data: data });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {/* 返回鍵 */}
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
      {/* CatMinder 文字 */}
      <Text style={styles.footerText}>CatMinder</Text>
      </View>
      {/* 輸入 */}
      <TextInput
        style={styles.inputBox}
        onChangeText={setSearch}
        value={search}
        placeholder="Search"
      />
      {/* 商家 選項 */}
      <View style={styles.radioGroup}>
      <TouchableOpacity
        style={styles.radioItem}
        onPress={() => setSelectedShop('PChome')}
        >
        <RadioButton
            value="PChome"
            status={selectedShop === 'PChome' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedShop('PChome')}
            color="#FF6347"  // 橘紅色的選中顏色
        />
        <Text style={[styles.radioText]}>PChome</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioItem}
        onPress={() => setSelectedShop('Momo')}
        >
        <RadioButton
            value="Momo"
            status={selectedShop === 'Momo' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedShop('Momo')}
            color="#FF6347"  // 橘紅色的選中顏色
          />
        <Text style={[styles.radioText]}>Momo</Text>
      </TouchableOpacity>
      </View>
      {/* 送出 */}
      <TouchableOpacity
        style={[styles.submitButton]}
        onPress={handleSubmit}
      >
        <Text style={[styles.submitButtonText]}>送出</Text>
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
  footerText: {
    color: Color.colorGray_500, 
    left: "50%",
    width: 242,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
  },
  submitButton: {
    backgroundColor: '#FFCBB3',
    borderRadius: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  submitButtonText: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#000000', // Black
  },

  radioText: {
    fontFamily: FontFamily.kaushanScriptRegular,
    fontSize: FontSize.size_5xl,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
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
  
  inputBox: {
    backgroundColor: '#FFE6D9',
    borderRadius: 8,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
});

export default Search_products;
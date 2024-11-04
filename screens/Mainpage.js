import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TouchableOpacity, Touchable, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useAuth } from "../screens/AuthContext";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile_settings from "./Profile_settings"; // Assuming this is your drawer content

const Drawer = createDrawerNavigator();

function Mainpage() {
  return (
    <Drawer.Navigator drawerContent={(props) => <Profile_settings {...props} />}>
      <Drawer.Screen
        name="MainpageContent"
        component={MainpageContent}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const MainpageContent = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Import useRoute to access route params
  const { userEmail } = route.params || {}; // Destructure userEmail from route params
  const { user, loading } = useAuth();

  // 當使用者沒有透過登入介面登入時，不會讓他進入其他介面（因為沒有登入）
  React.useEffect(() => {
    // Perform navigation only after the component has rendered
    if (!loading && !user) {
      navigation.navigate('Login'); // Replace 'Login' with your login screen's name
    }
  }, [loading, user, navigation]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!user) {
    // Prevent rendering any UI if the user is not logged in
    return null;
  }

  return (
    <LinearGradient
      style={styles.allbg}
      locations={[0.52, 1]}
      colors={["#fffedf", '#E0E0E0']}
    >
      <View style={styles.container}>
        {/* 表頭區域 */}
        <View style={styles.headerRow}>

          {/* 原本的漢堡（頁面） */}
          {/* <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Profile_settings")}
          >
            <Image
              style={[styles.icon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/align-justify.png")}
            />
          </TouchableOpacity> */}

          {/* 新的漢堡 */}
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.hamburgerButton}>
            <Image source={require("../assets/align-justify.png")} style={styles.icon} />
          </TouchableOpacity>


          {/* Centered Container for CatMinder */}
          <View style={styles.headerCenterContainer}>
            <Text style={styles.footerText}>CatMinder</Text>
          </View>
        </View>
        <View>

        </View>
        {/* 按鍵區域 */}
        <View style={styles.bu}>
          {/* 飲水按鈕 */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Water_intake_page")}
          >
            <Image
              style={styles.butest2}
              contentFit="cover"
              source={require("../assets/fountain-2.png")}
            />
            <Text style={styles.butext1}>飲水</Text>
          </TouchableOpacity>
          {/* 支出按鈕 */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Expense_page")}
          >
            <Image
              style={styles.butest2}
              contentFit="cover"
              source={require("../assets/earn.png")}
            />
            <Text style={styles.butext1}>支出</Text>
          </TouchableOpacity>
          {/*體重按鈕 */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Weight_homepage")}
          >
            <Image
              style={[styles.butest2, styles.bigger]}
              contentFit="cover"
              source={require("../assets/weight-1.png")}
            />
            <Text style={styles.butext1}>體重</Text>
          </TouchableOpacity>
          {/* 疫苗按鈕 */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Vaccine_homepage")}
          >
            <Image
              style={styles.butest2}
              contentFit="cover"
              source={require("../assets/syringe-1.png")}
            />
            <Text style={styles.butext1}>疫苗接種</Text>
          </TouchableOpacity>
          {/* 小知識按鈕 */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Tips")}
          >
            <Image
              style={styles.butest2}
              contentFit="cover"
              source={require("../assets/book.png")}
            />
            <Text style={styles.butext1}>小知識</Text>
          </TouchableOpacity>
          {/* 找商品按鈕 */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Search_products")}
          >
            <Image
              style={styles.butest2}
              contentFit="cover"
              source={require("../assets/calendar-1.png")}
            />
            <Text style={styles.butext1}>找商品</Text>
          </TouchableOpacity>
          {/* 房子圖案 */}
          <Image
            style={styles.butest}
            contentFit="cover"
            source={require("../assets/animalshelter-1.png")}
          />
        </View>

      </View>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  hamburgerButton: {
    width: 48,
    height: 48,
    marginRight: 10
  },
  bu: { //整個按鍵區域
    flexDirection: "row", // 讓每一列的元素水平排列
    flexWrap: "wrap", // 讓元素在超出寬度後自動換行
    justifyContent: "space-around", // 讓每列的元素平均分配
    //backgroundColor: 'red',
    height: 600,
    top: 50,
  },
  butest: {//房子圖案
    top: 500,
    width: 87,
    height: 82,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -43.5 }], // 寬度的一半
  },
  butest2: {//飲水圖案
    //backgroundColor:'yellow',
    top: 10,
    width: 72,
    height: 73,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -36 }], // 寬度的一半
  },
  bigger: {
    width: 90,
    height: 85,
    left: "45%",
  },
  butext1: {//所有字
    top: 83,
    fontSize: 25,
    fontFamily: FontFamily.yujiBokuRegular,
    position: "absolute",
    left: 0,
    right: 0, // 讓文字在父容器內完全擴展
    textAlign: "center", // 水平置中
  },
  buttonContainer: {//按鍵底
    marginBottom: 20,
    width: 148, // 調整寬度
    height: 124, // 調整高度
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite, // 底色，可以調整為你想要的顏色
    borderRadius: 15, // 調整圓角，使其像圖中那樣圓滑
    justifyContent: "center", // 垂直居中
    alignItems: "center", // 水平居中
    /*shadowColor: "#000", // 陰影效果
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // 提升效果*/
  },
  allbg: {
    width: "100%",
    flex: 1,
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
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
  headerCenterContainer: {
    flex: 1, // Takes up remaining space
    alignItems: "center", // Centers content horizontally within the container
  },
  footerText: {
    // left: "50%",
    width: 242,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
    color: Color.colorGray_500,
  },
  container: {
    flex: 1,
    // backgroundColor: Color.colorLightgoldenrodyellow, // Light goldenrod yellow
    backgroundColor: '#FFFAF4',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default Mainpage;
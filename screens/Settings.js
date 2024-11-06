import * as React from "react";
import { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, Pressable, Text, View, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useAuth } from "../screens/AuthContext";

// import * as Device from 'expo-device';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Notifications from 'expo-notifications'; // 推送通知
// import Constants from "expo-constants"; // Optional

// 全局設置通知處理程序
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, // 確保通知顯示
    shouldPlaySound: true, // 通知聲音
    shouldSetBadge: false, // 角標
  }),
});

// 定義後臺任務
TaskManager.defineTask('BACKGROUND_NOTIFICATION_TASK', async () => {
  try {
    console.log('Running background notification task');
    // 發送通知
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "背景通知",
        body: "這是來自背景的推送通知",
      },
      trigger: null, // 立即觸發
    });

    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error('背景任務通知失败:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

// 註冊後臺任務
const registerBackgroundTask = async () => {
  try {
    await BackgroundFetch.registerTaskAsync('BACKGROUND_NOTIFICATION_TASK', {
      minimumInterval: 60, // 最小時間間隔，單位為秒
      stopOnTerminate: false, // 應用被终止时繼續運行
      startOnBoot: true, // 設備重啟後自動啟動任務
    });
    console.log('後臺任務註冊成功');
  } catch (error) {
    console.error('後臺任務註冊失败:', error);
  }
};

const Settings = () => {
  const navigation = useNavigation();
  const { user, loading } = useAuth();
  const [isOn, setIsOn] = useState(true);
  const [notificationInterval, setNotificationInterval] = useState(null); // 存儲通知定時器ID

  // 請求推送通知權限
  useEffect(() => {
    const requestPermissions = async () => {
      try {
        const { status: currentStatus } = await Notifications.getPermissionsAsync();
        if (currentStatus !== 'granted') {
          const { status: requestedStatus } = await Notifications.requestPermissionsAsync();
          if (requestedStatus !== 'granted') {
            Alert.alert('無法取得推送通知權限');
            return;
          }
        }

        if (Platform.OS === 'android') {
          await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            sound: true,
          });
        }
      } catch (error) {
        console.error('Error while requesting notification permissions:', error);
      }
    };

    requestPermissions();
    registerBackgroundTask();
  }, []);

  useEffect(() => {
    // 監聽通知接收事件
    // const subscription = Notifications.addNotificationReceivedListener(notification => {
    //   console.log('Notification received:', notification);
    // });

    // return () => subscription.remove();
    const loadNotificationState = async () => {
      try {
        const storedState = await AsyncStorage.getItem(user.email);
        if (storedState !== null) {
          setIsOn(storedState === "通知：開啟");
        }
      } catch (error) {
        console.error('Failed to load notification state:', error);
      }
    };

    loadNotificationState();
  }, [user.email]);

  // test the notification status in storage
  // const testFuction = async () => {
  //   const userEmail = await AsyncStorage.getItem(user.email);
  //   const keys = await AsyncStorage.getAllKeys();
  //   console.log(`this is now ${userEmail}, and the key is ${keys}`)
  //   if (keys.includes(`${user.email}`)) {
  //     const userEKey = await AsyncStorage.getItem(user.email);
  //     console.log(`this key is ${user.email}, and value is ${userEKey}`);
  //   }
  // }

  // 切換按鈕狀態並存儲在 AsyncStorage 中
  // const toggleNotification = async () => {
  //   const newState = !isOn;
  //   setIsOn(newState);
  //   const newStatus = newState ? "通知：開啟" : "通知：關閉";
  //   try {
  //     await AsyncStorage.setItem(user.email, newStatus);
  //     console.log(`Notification status for ${user.email} is now ${newStatus}`);
  //   } catch (error) {
  //     console.error('Failed to save notification status:', error);
  //   }

  //   if (newState) {
  //     // Schedule repeated notifications only if notifications are enabled
  //     sendNotification(newState); // Send an immediate notification
  //     const intervalId = setInterval(() => {
  //       sendNotification(newState);
  //     }, 10000); // Send every 10 seconds
  //     setNotificationInterval(intervalId); // Save interval ID
  //   } else {
  //     // Clear scheduled notifications when turned off
  //     if (notificationInterval) {
  //       clearInterval(notificationInterval);
  //       setNotificationInterval(null);
  //     }
  //     // Cancel all scheduled notifications
  //     await Notifications.cancelAllScheduledNotificationsAsync();
  //     console.log("All scheduled notifications canceled.");
  //   }
  // };

  // 發送推送通知的函數
  // const sendNotification = async (newState) => {
  //   console.log(`${newState}`);
  //   if (!newState) return; // Only proceed if notifications are on
  //   console.log(`here is test for ${newState} which may return true or false`)
  //   try {
  //     await Notifications.scheduleNotificationAsync({
  //       content: {
  //         title: "通知",
  //         body: "這是每10秒的推送通知",
  //       },
  //       trigger: null, // 立即觸發
  //     });
  //   } catch (error) {
  //     console.error('通知發送失敗', error);
  //   }
  // };

  // 當使用者沒有透過登入介面登入時，不會讓他進入其他介面（因為沒有登入）
  // React.useEffect(() => {
  //   // Perform navigation only after the component has rendered
  //   if (!loading && !user) {
  //     navigation.navigate('Login'); // Replace 'Login' with your login screen's name
  //   }
  // }, [loading, user, navigation]);

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  // if (!user) {
  //   // Prevent rendering any UI if the user is not logged in
  //   return null;
  // }

  return (
    <View style={styles.view}>
      {/* 包含返回鍵和 CatMinder 的區塊 */}
      <View style={styles.headerRow}>

        {/* 返回鍵 */}
        <TouchableOpacity
          style={styles.backButton}
          // onPress={() => navigation.navigate("Profile_settings")}
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

      {/* test button */}
      {/* <TouchableOpacity
          onPress={(testFuction)}
        >
          <Text style={{top:1}}>test</Text>
        </TouchableOpacity> */}

      <View style={styles.buttonContainer}>

        {/* <TouchableOpacity
          style={styles.button}
          onPress={toggleNotification} // 點擊事件
        >
          <Text style={styles.textTypo}>
            
            {isOn ? '通知：開啟' : '通知：關閉'}
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })
          }
        >
          <Text style={styles.textTypo}>切換帳號</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Forgot_password")}
        >
          <Text style={styles.textTypo}>更改密碼</Text>
          {/* <Text style={styles.textTypo}>{user.email}, {user.uid}</Text> */}
        </TouchableOpacity>
      </View>
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
  footerText: {
    color: Color.colorGray_500,
    left: "50%",
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.kaushanScriptRegular,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center", // 垂直居中
    alignItems: "center",     // 水平居中
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: Border.br_61xl,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: "20%",
    backgroundColor: "#FFCBB3",
  },
  view: {
    flex: 1,
    // backgroundColor: Color.colorLightgoldenrodyellow, // Light goldenrod yellow
    backgroundColor: "#FFFAF4",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
});

export default Settings;

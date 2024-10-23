import * as React from "react";
import { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput, Alert, Keyboard, ActivityIndicator } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns"; // 用於格式化日期
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useAuth } from "../screens/AuthContext";
import { db } from "../FirebaseConfig"; // for realtime database
import { ref, set, get } from 'firebase/database'; // Import Firebase Realtime Database methods

const Edit_profile_settings = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [color, setColor] = useState("");
  const [neuteredStatus, setNeuteredStatus] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); // 控制日期選擇器顯示狀態
  const [catName, setCatName] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  // Fetch the profile data from Firebase when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userRef = ref(db, `uid/${user.uid}/profile/`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const profileData = snapshot.val();
          setColor(profileData.color || "");
          setNeuteredStatus(profileData.neuteredStatus || "");
          setGender(profileData.gender || "");
          setBreed(profileData.breed || "");
          setAge(profileData.age || "");
          setBirthday(profileData.birthday || "");
          setCatName(profileData.catName || "");
        } else {
          console.log("No profile data found");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [user.uid]); // Dependency array to run this effect only when the user.uid changes

  const storeProfile = async (color, neuteredStatus, gender, breed, age, birthday, catName) => {
    // Start loading spinner
    setLoading(true);

    // Save user profile in Realtime Database
    try {
      const userRef = ref(db, `uid/${user.uid}/profile/`);
      await set(userRef, {
        color,
        neuteredStatus,
        gender,
        breed,
        age,
        birthday,
        catName
      });

      // 使用 setTimeout 模擬2秒後結束loading
      setTimeout(() => {
        setLoading(false); // 停止 loading
        Alert.alert(
          'Success',
          'Profile saved successfully!',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate("Profile_settings"),
            },
          ]
        );
      }, 1500); // 1.5秒後停止 loading
    } catch (error) {
      setLoading(false); // 停止 loading 即使發生錯誤
      console.error("Error saving profile:", error);
    }
    //   // 停止 loading 並顯示提示框
    //   setLoading(false);

    //   // 使用 React Native 的 Alert.alert 來顯示提示框，並在確認後跳轉頁面
    //   Alert.alert(
    //     'Success',
    //     'Profile saved successfully!',
    //     [
    //       {
    //         text: 'OK',
    //         onPress: () => navigation.navigate("Profile_settings"), // 點擊 OK 後進行跳轉
    //       },
    //     ]
    //   );
    // } catch (error) {
    //   console.error("Error saving profile:", error);
    // }
  };

  // 顯示日期選擇器
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // 隱藏日期選擇器
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // 計算年齡的函數
  const calculateAge = (birthdayDate) => {
    const today = new Date();
    const birthDate = new Date(birthdayDate);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // 如果當前月份還沒到生日月份，或是在生日月份但是生日還沒過，年齡要減一
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    return calculatedAge;
  };

  // 用戶選擇日期後的處理函數
  const handleConfirm = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd"); // 格式化日期為 'YYYY-MM-DD'
    setBirthday(formattedDate); // 將格式化後的日期設置為生日
    const calculatedAge = calculateAge(formattedDate); // 計算年齡
    setAge(calculatedAge.toString()); // 設置年齡狀態為計算出的年齡
    hideDatePicker(); // 關閉日期選擇器
  };

  return (
    <Pressable
      style={styles.view}
      onPress={() => Keyboard.dismiss()} // Dismiss the keyboard when clicking outside the TextInput
    >
      <View style={styles.child} />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/5.png")}
      />
      <Image
        style={styles.item}
        contentFit="cover"
        source={require("../assets/6.png")}
      />
      <Image
        style={[styles.cameraIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/camera.png")}
      />
      <LinearGradient
        style={styles.inner}
        locations={[0, 1]}
        colors={["#fef6db", "#fdfdfd"]}
      />

      {/* <Text style={[styles.text, styles.textTypo]}>顏色:</Text>
      <Text style={[styles.text1, styles.textTypo]}>是否結紮:</Text>
      <Text style={[styles.text3, styles.textTypo]}>性別:</Text>
      <Text style={[styles.text4, styles.textTypo]}>品種:</Text>
      <Text style={[styles.text5, styles.textTypo]}>年紀:</Text>
      <Text style={[styles.text6, styles.textTypo]}>生日:</Text>
      <Text style={[styles.text7, styles.textTypo]}>貓咪姓名:</Text> */}

      <TextInput
        style={[styles.text, styles.textTypo]}
        placeholder="顏色"
        value={color}
        onChangeText={(color) => setColor(color)}
      />

      <TextInput
        style={[styles.text1, styles.textTypo]}
        placeholder="是否結紮"
        value={neuteredStatus}
        onChangeText={(neuteredStatus) => setNeuteredStatus(neuteredStatus)}
      />

      <TextInput
        style={[styles.text3, styles.textTypo]}
        placeholder="性別"
        value={gender}
        onChangeText={(gender) => setGender(gender)}
      />

      <TextInput
        style={[styles.text4, styles.textTypo]}
        placeholder="品種"
        value={breed}
        onChangeText={(breed) => setBreed(breed)}
      />

      <TextInput
        style={[styles.text5, styles.textTypo]}
        placeholder="年紀"
        value={age}
        onChangeText={(age) => setAge(age)}
        keyboardType="numeric"
        maxLength={3}
      />

      {/* <TextInput
        style={[styles.text6, styles.textTypo]}
        placeholder="生日"
        value={birthday}
        onChangeText={(birthday) => setBirthday(birthday)}
      /> */}

      {/* 生日選擇部分 */}
      <Pressable onPress={showDatePicker}>
        <Text style={[styles.text6, styles.textTypo, !birthday && styles.placeholderStyle]}>
          {birthday ? birthday : "選擇生日"} {/* 显示选中的日期或提示 */}
        </Text>
      </Pressable>

      {/* 日期選擇器 */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date" // 選擇日期模式
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()} // 設置最大日期為今天
      />

      <TextInput
        style={[styles.text7, styles.textTypo]}
        placeholder="貓咪姓名"
        value={catName}
        onChangeText={(catName) => setCatName(catName)}
      />
      <Pressable
        style={({ pressed }) => [
          styles.rectangleIcon,
          styles.wrapperLayout,
          { backgroundColor: pressed ? '#9D9D9D' : '#D0D0D0' } // Change color when pressed
        ]}
        onPress={() => storeProfile(color, neuteredStatus, gender, breed, age, birthday, catName)}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <>
            <Image
              style={[styles.unionIcon, { position: "relative", top: 0, left: "-30%" }]}
              contentFit="cover"
              source={require("../assets/upload.png")}
            />
            <Text style={styles.textTypo1}>確認送出</Text>
          </>
        )}
        {/* <Text style={[styles.text2, styles.textTypo1]}>{user.email}</Text> */}
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: "35%",
    position: "absolute",
  },
  textTypo: {
    height: 28,
    // textAlign: "left",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 50,
    position: "absolute",
  },
  child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhite,
    width: 303,
    position: "absolute",
    height: 778,
  },
  icon: {
    top: 24,
    left: "20%",
    width: 140,
    height: 142,
    position: "absolute",
  },
  item: {
    top: 35,
    left: "22.5%",
    width: 120,
    height: 121,
    position: "absolute",
  },
  cameraIcon: {
    top: 115,
    left: 186,
    width: 41,
    height: 43,
  },
  inner: {
    top: 178,
    left: 29,
    width: 242,
    height: 562,
    backgroundColor: "transparent",
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_xl,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 54,
    top: 641,
    width: 193,
    height: 58,
    borderRadius: Border.br_xl,
    // position: "absolute",
  },
  text: {
    top: 346,
    // height: 27,
    // width: 59,
    left: 50,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  text1: {
    top: 495,
    // width: 110,
    // height: 28,
  },
  text2: {
    top: 658,
    left: 111,
  },
  text3: {
    top: 246,
    // width: 59,
  },
  text4: {
    top: 296,
    // width: 59,
  },
  text5: {
    top: 395,
    // width: 59,
  },
  text6: {
    top: 400,
    // width: 59,
  },
  text7: {
    top: 196,
    // width: 110,
    // height: 28,
  },
  placeholderStyle: {
    color: '#C7C7CD', // 與 TextInput 的 placeholder 颜色一致
  },
  view: {
    flex: 1,
    height: 778,
    width: "100%",
  },
  rectangleIcon: {
    top: 641,
    borderRadius: Border.br_xl,
  },
  wrapperLayout: {
    height: 58,
    width: 193,
    left: 54,
    borderRadius: Border.br_61xl,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
  },
  unionIcon: {
    width: 34,
    height: 32,
  },
});

export default Edit_profile_settings;

import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns"; // 用於格式化日期
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useAuth } from "../screens/AuthContext";
import { getDatabase, ref, get, set } from "firebase/database"; // Add Firebase database imports
import { useDrawerStatus } from "@react-navigation/drawer";

const Profile_settings = () => {
  const navigation = useNavigation();
  const drawerStatus = useDrawerStatus(); // Listen to drawer status
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    age: "",
    birthday: "",
    breed: "",
    catName: "",
    color: "",
    gender: "",
    neuteredStatus: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false); // 控制日期選擇器顯示狀態
  // const [loading, setLoading] = useState(true); // 狀態變數，用於追蹤數據加載狀態

  // Reset edit mode when drawer is closed, and get the lastest data
  React.useEffect(() => {
    if (drawerStatus === "closed") {
      const db = getDatabase();
      const uid = user.uid;
      const profileRef = ref(db, `uid/${uid}/profile`);

      // Fetch profile data from Firebase when the drawer opens
      get(profileRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setProfile(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      // reset edit mode
      setIsEditing(false);
    }
  }, [drawerStatus, user]);

  // Mapping English keys to Chinese labels
  const keyTranslations = {
    age: "年紀",
    birthday: "生日",
    breed: "品種",
    catName: "貓咪姓名",
    color: "顏色",
    gender: "性別",
    neuteredStatus: "是否結紮"
  };

  // Fetch data from Firebase when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      const db = getDatabase();
      const uid = user.uid;
      const profileRef = ref(db, `uid/${uid}/profile`);

      // Fetch profile data from Firebase
      get(profileRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setProfile(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, [user]) // Dependency array ensures it runs when user changes
  );

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Save data to Firebase when switching from edit mode to view mode
      const db = getDatabase();
      const uid = user.uid;
      set(ref(db, `uid/${uid}/profile`), profile);
    }
  };

  const handleChange = (field, value) => {
    setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  // Function to calculate age based on selected birthday
  const calculateAge = (birthdayDate) => {
    const today = new Date();
    const birthDate = new Date(birthdayDate);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the current month is before the birth month or if it's the birth month but the day hasn't passed
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  };

  // Date picker handling functions
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd"); // Format date as 'YYYY-MM-DD'
    setProfile((prevProfile) => ({
      ...prevProfile,
      birthday: formattedDate,
      age: calculateAge(formattedDate).toString()
    }));
    hideDatePicker();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.view}>
        <View style={styles.child} />
        {/* <Image
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
        style={styles.cameraIcon}
        contentFit="cover"
        source={require("../assets/camera.png")}
      /> */}
        <LinearGradient
          style={[styles.inner, styles.editPosition]}
          locations={[0, 1]}
          colors={["#fef6db", "#fdfdfd"]}
        />
        {/* Conditionally render "設定" and "關於我們" buttons */}
        {!isEditing && (
          <>
            <TouchableOpacity
              style={[styles.wrapper, styles.wrapperLayout]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                style={[styles.icon2, { position: "relative", top: 0, left: "-30%" }]}
                contentFit="cover"
                source={require("../assets/12.png")}
              />
              <Text style={[styles.text8, styles.textTypo1]}>設定</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={[styles.rectangleIcon, styles.wrapperLayout]}>
            <Image
              style={[styles.unionIcon, { position: "relative", top: 0, left: "-30%" }]}
              contentFit="cover"
              source={require("../assets/union2.png")}
            />
            <Text style={styles.textTypo1}>關於我們</Text>
          </TouchableOpacity> */}
          </>
        )}
        {/* Editable Fields */}
        {Object.keys(profile).map((key) => (
          <View key={key} style={styles.fieldContainer}>
            {isEditing && key === "birthday" ? (
              <>
                <TouchableOpacity onPress={showDatePicker}>
                  <Text style={styles.textTypo}>{profile.birthday ? profile.birthday : `請選擇${keyTranslations[key]}`}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  maximumDate={new Date()} // Set maximum date to today
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </>
            ) : key === "age" ? (
              <Text style={styles.textTypo}>{`${keyTranslations[key]}: ${profile.age}`}</Text>
            ) : isEditing ? (
              <TextInput
                style={styles.textTypo}
                value={profile[key]}
                onChangeText={(value) => handleChange(key, value)}
                placeholder={`請輸入${keyTranslations[key]}`}
              />
            ) : (
              <Text style={styles.textTypo}>{`${keyTranslations[key]}: ${profile[key]}`}</Text>
            )}
          </View>
        ))}
        {/* <Text style={[styles.text, styles.textTypo1]}>顏色: {profile.color}</Text>
      <Text style={[styles.text1, styles.textTypo]}>是否結紮: {profile.neuteredStatus}</Text>
      <Text style={[styles.text3, styles.textTypo]}>性別: {profile.gender}</Text>
      <Text style={[styles.text4, styles.textTypo]}>品種: {profile.breed}</Text>
      <Text style={[styles.text5, styles.textTypo]}>年紀: {profile.age}</Text>
      <Text style={[styles.text6, styles.textTypo]}>生日: {profile.birthday}</Text>
      <Text style={[styles.text7, styles.textTypo]}>貓咪姓名: {profile.catName}</Text> */}
        <TouchableOpacity
          style={[isEditing ? styles.editInSettingsPosition : styles.edit, styles.editPosition]}
          // onPress={() => navigation.navigate("Edit_profile_settings")}
          onPress={handleEditToggle}
        >
          {/* <Image
          style={[styles.icon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/edit2.png")}
        /> */}
          {isEditing ? (
            // Render the "設定" button when in edit mode
            <View style={styles.savingButton}>
              <Text style={styles.savingButtonText}>儲存</Text>
            </View>
          ) : (
            // Render the "edit2.png" image when not in edit mode
            <Image
              style={[styles.icon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/edit2.png")}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  savingButton: {
    backgroundColor: "#FFCBB3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_61xl,
    width: 193,
    height: 58,
  },
  savingButtonText: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
  },
  editInSettingsPosition: {
    top: 562, // Adjust this to match the position of "設定"
    left: 54,
    width: 44,
    height: 38,
    position: "absolute",
  },
  fieldContainer: {
    marginVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editPosition: {
    left: 29,
    position: "absolute",
  },
  wrapperLayout: {
    height: 58,
    width: 193,
    left: 54,
    borderRadius: Border.br_61xl,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    backgroundColor: "#FFCBB3",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo1: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo: {
    height: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 50,
    position: "absolute",
    top: 200,
  },
  child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorWhite,
    // width: 303,
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
    overflow: "hidden",
    position: "absolute",
  },
  inner: {
    top: 178,
    width: 242,
    height: 562,
    backgroundColor: "transparent",
  },
  rectangleIcon: {
    top: 641,
    borderRadius: Border.br_xl,
  },
  icon1: {
    borderRadius: Border.br_xl,
  },
  wrapper: {
    top: 562,
  },
  unionIcon: {
    width: 34,
    height: 32,
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
    top: 445,
    // width: 59,
  },
  text7: {
    top: 196,
    // width: 110,
    // height: 28,
  },
  text8: {
    // top: 579,
    // left: 150,
  },
  icon2: {
    top: 567,
    left: 72,
    width: 36,
    height: 36,
    overflow: "hidden",
    // position: "absolute",
  },
  icon3: {
    overflow: "hidden",
  },
  edit: {
    top: 134,
    width: 44,
    height: 38,
  },
  view: {
    flex: 1,
    height: 778,
    width: "100%",
  },
});

export default Profile_settings;

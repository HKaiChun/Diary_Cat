import * as React from "react";
import { useState, useEffect } from "react";
import { Image, ScrollView, TextInput, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getDatabase, ref, set, remove } from 'firebase/database';
import { Calendar } from 'react-native-calendars';
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import moment from "moment";
import { useAuth } from "./AuthContext";

const Edit_weight_page = () => {
  const navigation = useNavigation();
  const {user} = useAuth();
  const route = useRoute();

  // Access the passed date and weight from the route
  const { date, weight } = route.params || {}; // Fallback in case params are undefined

  // Initialize input states with the passed values
  const [selectedDate, setSelectedDate] = useState(date ? moment(date).format('YYYY-MM-DD') : null); // Initialize date
  const [petweight, setPetWeight] = useState(weight); // Initialize weight

  // Debugging: Log the route params to check if the data is passed correctly
  console.log("Route Params:", { date, weight });

  // Use useEffect to update state when route params change
  useEffect(() => {
    console.log("Updating State from Route Params:", { date, weight });
    setSelectedDate(date); // Update date if route params change
    setPetWeight(weight); // Update weight if route params change
  }, [date, weight]); // Dependency array ensures this runs when route params change

  // Handle calendar date selection
  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString); // Update the selected date
  };

  // Handle updating the weight in the database
  const handleUpdate = () => {
    if (!selectedDate || !petweight) {
      Alert.alert('通知', '需填滿所有欄位');
      return;
    }
  
    const db = getDatabase();
    
    // Update the original entry without removing it
    const originalRef = ref(db, `uid/${user.uid}/weight/${date}/petweight`);
    
    // If the date has changed, update the new date
    if (date !== selectedDate) {
      const newRef = ref(db, `uid/${user.uid}/weight/${selectedDate}/petweight`);
      
      // Set the new weight at the new date location
      set(newRef, {
        weight: parseFloat(petweight),  // Parse weight as a float
      })
      .then(() => {
        // Optional: Remove the original entry if desired
        remove(originalRef)
          .then(() => {
            Alert.alert('通知', '修改成功!');
            navigation.navigate("Weight_homepage");
          })
          .catch(error => {
            Alert.alert('通知', 'Error deleting old entry: ' + error.message);
          });
      })
      .catch(error => {
        Alert.alert('通知', 'Error updating weight: ' + error.message);
      });
    } else {
      // Just update the weight in place if the date hasn't changed
      set(originalRef, {
        weight: parseFloat(petweight),
      })
      .then(() => {
        Alert.alert('通知', '修改成功!');
        navigation.navigate("Weight_homepage");
      })
      .catch(error => {
        Alert.alert('通知', 'Error updating weight: ' + error.message);
      });
    }
  };

  // Handle deleting the weight
  const handleDelete = () => {
    const db = getDatabase();
    const weightRef = ref(db, `uid/${user.uid}/weight/${selectedDate}/petweight`);

    remove(weightRef)
      .then(() => {
        Alert.alert('通知', '刪除成功!');
        navigation.navigate("Weight_homepage");
      })
      .catch(error => {
        Alert.alert('通知', 'Error deleting weight: ' + error.message);
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Weight_homepage")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/1.png")}
            />
          </TouchableOpacity>

          <Text style={styles.footerText}>CatMinder</Text>
        </View>

        <ScrollView>
          {/* Calendar for selecting date */}
          <Calendar
            onDayPress={handleDateSelect}
            initialDate={selectedDate}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: 'pink',
              },
            }}
            style={styles.calendar}
          />

          {/* Input for weight */}
          <Text style={styles.label}>體重</Text>
          <TextInput
            style={styles.inputBox}
            value={String(petweight)}  // Ensure the value is a string for TextInput
            onChangeText={setPetWeight}  // Update the petweight state
            placeholder="請輸入寵物體重(kg)"
            keyboardType="numeric"  // Numeric keyboard
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.submitButton} onPress={handleUpdate}>
          <Text style={styles.submitButtonText}>修改</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleDelete}>
          <Text style={styles.submitButtonText}>刪除</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.colorLightgoldenrodyellow,
    backgroundColor: "#FFFAF4",
    paddingHorizontal: 20,
    paddingTop: 40,
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
  },
  label: {
    textAlign: "center",
    color: '#2F4F4F',
    fontFamily: 'Roboto-Bold',
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 10,
  },
  inputBox: {
    backgroundColor: '#FFE6D9',
    borderRadius: 8,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: '#FFCBB3',
    borderRadius: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#000000',
  },
  buttonRow: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 80,
  },
  calendar: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default Edit_weight_page;
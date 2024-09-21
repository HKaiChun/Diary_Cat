const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Mainpage from "./screens/Mainpage";
import Vaccine_details from "./screens/Vaccine_details";
import User_and_pets from "./screens/User_and_pets";
import Weight_homepage from "./screens/Weight_homepage";
import Add_expense from "./screens/Add_expense";
import Edit_diary from "./screens/Edit_diary";
import Forgot_password_verification from "./screens/Forgot_password_verification";
import Search_products from "./screens/Search_products";
import Select_edit_delete_expense from "./screens/Select_edit_delete_expense";
import Water_intake_page from "./screens/Water_intake_page";
import Initial_screen from "./screens/Initial_screen";
import Pets_only from "./screens/Pets_only";
import Diary_record_changes from "./screens/Diary_record_changes";

import Settings from "./screens/Settings";
import Forgot_password from "./screens/Forgot_password";
import Profile_settings from "./screens/Profile_settings";
import Enter_old_password from "./screens/Enter_old_password";
import Edit_profile_settings from "./screens/Edit_profile_settings";
import Delete_expense_page from "./screens/Delete_expense_page";
import New_password from "./screens/New_password";
import Diary_record from "./screens/Diary_record";
import Search_product_results from "./screens/Search_product_results";
import Delete_diary from "./screens/Delete_diary";
import Tips from "./screens/Tips";
import Edit_expense_page from "./screens/Edit_expense_page";
import Diary_homepage from "./screens/Diary_homepage";
import Login from "./screens/Login";
import Open_product_results from "./screens/Open_product_results";
import Expense_overview from "./screens/Expense_overview";
import Sign_up from "./screens/Sign_up";
import Sign_up_confirmation from "./screens/Sign_up_confirmation";
import Add_vaccine_record from "./screens/Add_vaccine_record";
import Edit_vaccine from "./screens/Edit_vaccine";
import Delete_vaccine from "./screens/Delete_vaccine";
import Vaccine_homepage from "./screens/Vaccine_homepage";
import Health_summary from "./screens/Health_summary";
import Expense_page from "./screens/Expense_page";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5JWt1ktzDKqj6IChs5xo3SA3m6ViGnjo",
  authDomain: "cathealth-dc4e5.firebaseapp.com",
  databaseURL: "https://cathealth-dc4e5-default-rtdb.firebaseio.com",
  projectId: "cathealth-dc4e5",
  storageBucket: "cathealth-dc4e5.appspot.com",
  messagingSenderId: "361335579974",
  appId: "1:361335579974:web:f64bab653f671e4f63b147",
  measurementId: "G-MZ444KDEBY"
};

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "KaushanScript-Regular": require("./assets/fonts/KaushanScript-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Katibeh-Regular": require("./assets/fonts/Katibeh-Regular.ttf"),
    "YujiBoku-Regular": require("./assets/fonts/YujiBoku-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator initialRouteName="Initial_screen" screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Mainpage"
            component={Mainpage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Vaccine_details"
            component={Vaccine_details}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="User_and_pets"
            component={User_and_pets}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Weight_homepage"
            component={Weight_homepage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add_expense"
            component={Add_expense}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Edit_diary"
            component={Edit_diary}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgot_password_verification"
            component={Forgot_password_verification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search_products"
            component={Search_products}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Select_edit_delete_expense"
            component={Select_edit_delete_expense}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Water_intake_page"
            component={Water_intake_page}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Initial_screen"
            component={Initial_screen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pets_only"
            component={Pets_only}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Diary_record_changes"
            component={Diary_record_changes}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgot_password"
            component={Forgot_password}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile_settings"
            component={Profile_settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Enter_old_password"
            component={Enter_old_password}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Edit_profile_settings"
            component={Edit_profile_settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Delete_expense_page"
            component={Delete_expense_page}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="New_password"
            component={New_password}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Diary_record"
            component={Diary_record}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search_product_results"
            component={Search_product_results}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Delete_diary"
            component={Delete_diary}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tips"
            component={Tips}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Edit_expense_page"
            component={Edit_expense_page}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Diary_homepage"
            component={Diary_homepage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Open_product_results"
            component={Open_product_results}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Expense_overview"
            component={Expense_overview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign_up"
            component={Sign_up}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sign_up_confirmation"
            component={Sign_up_confirmation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add_vaccine_record"
            component={Add_vaccine_record}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Edit_vaccine"
            component={Edit_vaccine}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Delete_vaccine"
            component={Delete_vaccine}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Vaccine_homepage"
            component={Vaccine_homepage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Health_summary"
            component={Health_summary}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Expense_page"
            component={Expense_page}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>

      ) : null}
    </NavigationContainer>
  );
};
export default App;

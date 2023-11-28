import React from "react";
import "react-native-gesture-handler";
import firebase from "firebase/app";
import "firebase/database";
import { firebaseConfig } from "./firebaseConfig";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
// import firebase from "expo-firebase-app";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import BungScreen from "./src/screens/BungScreen";

const Stack = createStackNavigator();

// initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bungholio" component={BungScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

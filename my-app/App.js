import React from "react";
import "react-native-gesture-handler";
import { initializeApp } from 'firebase/app';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './src/screens/HomeScreen'
import BungScreen from './src/screens/BungScreen'

const Stack = createStackNavigator();

const Aapp = initializeApp(firebaseConfig);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Bungholio"
          component={BungScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
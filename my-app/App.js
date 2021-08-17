import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import cornholio from './assets/cornholio.png'

const Stack = createStackNavigator();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cornholio: {
    width: 200,
    height: 200,
    marginBottom: 20,
  }
});

export default App;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={cornholio} style={styles.cornholio} />
      <Button
        title="BUNGHOLIO"
        onPress={() => navigation.navigate("Bungholio", { name: "Bungholio" })}
      />
    </View>
  );
};
const BungScreen = ({ navigation, route }) => {
  return <Text>Welcome {route.params.name}</Text>;
};

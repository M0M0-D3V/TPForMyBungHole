import React from "react";
import { useState } from "react";
import styles from "../static/styles";
import { View, Text, TextInput } from "react-native";
import BungView from "../components/BungView"

const BungScreen = ({ navigation, route }) => {
  const [bungs, setBungs] = useState([]);

  return (
    <View style={styles.bungContainer}>
      <BungView />
      <BungView />
      <BungView />
      <BungView />
      <BungView />
      <BungView />
      <BungView />
    </View>
  );
};

export default BungScreen;

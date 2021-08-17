import React from "react";
import { useState } from "react";
import styles from "../static/styles";
import { View, Text, TextInput } from "react-native";
import OneBung from "../components/OneBung"

const BungScreen = ({ navigation, route }) => {
  const [bungs, setBungs] = useState([]);

  return (
    <View style={styles.bungContainer}>
      <OneBung />
      <OneBung />
      <OneBung />
      <OneBung />
      <OneBung />
      <OneBung />
      
    </View>
  );
};

export default BungScreen;

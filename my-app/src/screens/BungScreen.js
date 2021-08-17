import React from "react";
import { useState } from "react";
import styles from "../static/styles";
import { View, Text, TextInput } from "react-native";

const BungScreen = ({ navigation, route }) => {
  const [text, onChangeText] = useState("Bungholio");
  const [bungs, setBungs] = useState([]);

  return (
    <View style={styles.bungContainer}>
      <View style={styles.bung}>
        <Text>Welcome {route.params.name}</Text>
        <Text>What's your name?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text>{text}</Text>
      </View>
      <View style={styles.bung}>
        <Text>Welcome {route.params.name}</Text>
        <Text>What's your name?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text>{text}</Text>
      </View>
      <View style={styles.bung}>
        <Text>Welcome {route.params.name}</Text>
        <Text>What's your name?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text>{text}</Text>
      </View>
      <View style={styles.bung}>
        <Text>Welcome {route.params.name}</Text>
        <Text>What's your name?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default BungScreen;

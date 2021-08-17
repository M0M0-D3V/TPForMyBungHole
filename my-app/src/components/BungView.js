import React, {useState} from 'react'
import styles from '../static/styles'
import { View, Text, TextInput } from 'react-native';

const BungView = () => {

  const [text, onChangeText] = useState("Bungholio");

  return (
    <View style={styles.bung}>
      <Text style={styles.bungText}>Welcome</Text>
      <Text style={styles.bungText}>What's your name?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default BungView;

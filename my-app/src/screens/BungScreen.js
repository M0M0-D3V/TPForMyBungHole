import React from "react";
import { useState } from "react";
import styles from "../static/styles";
import { Button, Pressable, ScrollView, View, Text, TextInput } from "react-native";
import OneBung from "../components/OneBung"

const BungScreen = ({ navigation, route }) => {
  const [bungs, setBungs] = useState([{}]);

  const addBung = () => {
    setBungs([...bungs, {}])
  }

  return (
    <ScrollView style={styles.scrollBung}>
      <View style={styles.bungContainer}>
        {bungs && bungs.map((bung, id) =>
          <OneBung key={id} />
        )}
        <Pressable onPress={addBung}>
          <View style={styles.bung}>
            <Text style={styles.bungText}>Add Bung</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default BungScreen;

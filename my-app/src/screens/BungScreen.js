import React from "react";
import { useState } from "react";
import styles from "../static/styles";
import { Button, ScrollView, View, Text, TextInput } from "react-native";
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
        <View style={styles.bung}>
          <Button style={styles.bungBtn} title="Add Bung" color="43CDC4" onPress={addBung}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default BungScreen;

import React, { useState } from 'react'
import styles from '../static/styles'
import { View, Text, TextInput } from 'react-native';

const OneBung = () => {

  const [title, onChangeTitle] = useState("");
  const [price, onChangePrice] = useState("");
  const [qty, onChangeQty] = useState("");

  const calc = () => {
    return (price / qty).toFixed(2)
  }

  return (
    <View style={styles.bung}>
      <View style={styles.bungRow}>
        <Text style={styles.bungTitle}>Brand</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeTitle}
            value={title}
            placeholder="BUNG1"
          />
      </View>
      <View style={styles.bungRow}>
        <Text style={styles.bungText}>Price $:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={onChangePrice}
          value={price}
          placeholder="Enter price"
        />
      </View>
      <View style={styles.bungRow}>
        <Text style={styles.bungText}>Qty #:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={onChangeQty}
          value={qty}
          placeholder="Enter qty"
        />
      </View>
      <View style={styles.bungRow}>
        <Text style={styles.bungText}>$/#:</Text>
        <Text style={styles.bungCalc}>{price && qty ? calc() : price}</Text>
      </View>
    </View>
  );
};

export default OneBung;

import React, {useState} from 'react'
import styles from '../static/styles'
import { View, Text, TextInput } from 'react-native';

const OneBung = () => {

  const [price, onChangePrice] = useState(null);
  const [qty, onChangeQty] = useState(null);

  const calc = () => {
    return (price / qty).toFixed(2)
  }

  return (
    <View style={styles.bung}>
      <Text style={styles.bungText}>Description</Text>
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
      <Text style={styles.bungText}>$/#: {price && qty ? calc() : price}</Text>
    </View>
  );
};

export default OneBung;

import React, {useState} from 'react'
import styles from '../static/styles'
import { View, Text, TextInput } from 'react-native';

const OneBung = () => {

  const [price, onChangePrice] = useState(0.0);
  const [qty, onChangeQty] = useState(1);

  return (
    <View style={styles.bung}>
      <Text style={styles.bungText}>Description</Text>
      <Text style={styles.bungText}>Price $:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePrice}
        value={price}
      />
      <Text style={styles.bungText}>Qty #:</Text>
      <TextInput
        style={styles.input}
        onChangeQty={onChangeQty}
        value={qty}
      />
      <Text>{price}</Text>
    </View>
  );
};

export default OneBung;

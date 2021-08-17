import React from 'react'
import styles from '../static/styles'
import cornholio from '../../assets/cornholio.png'
import { Button, Image, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const bungPresser = () => {
        navigation.navigate("Bungholio", { name: "Bungholio" })
    }

    return (
      <View style={styles.container}>
        <Image source={cornholio} style={styles.cornholio} />
        
        <Button
          title="BUNGHOLIO"
          onPress={bungPresser}
        />
      </View>
    );
  };

  export default HomeScreen
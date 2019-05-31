import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image style={styles.containerImage} resizeMode="contain" source={require('../../Assets/Images/exchange.png')} />
    <Text style={styles.containerText}>
      Currency Converter
    </Text>
  </View>
);

export default Logo;

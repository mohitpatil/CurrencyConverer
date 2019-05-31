import PropTypes from 'prop-types';
import React from 'react';
import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';
import styles from './stylesBtn';

const Button = (text, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image source={require('../../Assets/Images/exchange.png')} />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};


export default Button;

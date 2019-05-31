import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import Logo from '../components/Logo/Logo';
import {InputWithButton} from '../components/TextInput/InputWithButton';
import {Button} from '../components/Buttons';

const FROM_CURRENCY = 'USD';
const TO_CURRENCY = 'INR';
const FROM_CURRENCY_PRICE = '1';
const TO_CURRENCY_PRICE = '73.54';

class Home extends Component {

  handlePressFromCurrency = () => {
    //alert('Pressed From');
  }

  handlePressToCurrency = () => {
    //alert('Pressed To')
  }

  handleTextChange = (text) => {
    
  }

  handleSwap = () => {

  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={FROM_CURRENCY}
          onPress={this.handlePressFromCurrency}
          defaultValue={FROM_CURRENCY_PRICE}
          keyboardType='numeric'
          onChangeText={this.handleTextChange} />
        <InputWithButton
          buttonText={TO_CURRENCY}
          onPress={this.handlePressToCurrency}
          editable={false}
          defaultValue={TO_CURRENCY_PRICE} />
        <View />
        <Button text="Reverse Currency" onPress={this.handleSwap} />
      </Container>
    );
  }
}

export default Home;

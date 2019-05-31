import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBackground: '#FF5F6D',
  $logoFontColor: '#0F2027',
  $white: '#ffffff',
  $black: '#000000',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
});

export default () => <Home />;

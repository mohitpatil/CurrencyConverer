import EStylesheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStylesheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  containerText: {
    fontWeight: '900',
    fontSize: 25,
    color: '$logoFontColor',
    marginTop: 20,
  },
});

import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../../Themes/'

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    justifyContent: 'center',
    backgroundColor: Colors.snow
  },
  logo: {
    width: 200,
    height:50,
    alignSelf: 'center'
  }
})

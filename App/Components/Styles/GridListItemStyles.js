import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.steel,
    width:'33.3%',
  },
  figureImage: {
    height: 110,
    width: 110,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    opacity: .5
  },
  text: {
    color: Colors.coal,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})

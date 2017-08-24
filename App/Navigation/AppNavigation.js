import { StackNavigator } from 'react-navigation'
import ListScreen from '../Containers/ListScreen'
import AmiiboScreen from '../Containers/AmiiboScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ListScreen: { screen: ListScreen },  
  Amiibo: { screen: AmiiboScreen }
  
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav

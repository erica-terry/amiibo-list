import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  Image,
  View,
  BackHandler } from 'react-native'
import { Images } from '../Themes'
import GridListItem from '../Components/GridListItem';
import Header from './Header';
import moment from 'moment';
import {
  StackNavigator,
  NavigationActions
} from 'react-navigation';

// Styles
import styles from './Styles/AmiiboScreenStyles'

export default class AmiiboScreen extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  componentWillMount() {
    const backAction = NavigationActions.back()
    
    BackHandler.addEventListener('hardwareBackPress', () => {
        this.props.navigation.dispatch(backAction)
        return true;
    });
  }

  static navigationOptions = ({navigation})=>({
    title: navigation.state.params.name,
  });

  render () {
    const {config} = this.props.navigation.state.params;
    const backAction = NavigationActions.back()

    return (
      <View>
        <Header/>
        <ScrollView style={styles.container}>
          <View>
              <Image source={config.imageSrc} />
              <Text>{config.name}</Text>
              <Text>Series: {config.series}</Text>
              <Text>Release Date: {config.dateReleased==="TBD" ? config.dateReleased : moment(config.dateReleased).format('MMMM D, YYYY')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  Image, 
  View,
  AppRegistry } from 'react-native'
import { Images } from '../Themes'
import GridListItem from '../Components/GridListItem';
import items from '../Config/ListData'
import { StackNavigator } from 'react-navigation';
import AmiiboScreen from './AmiiboScreen';
import Header from './Header';

// Styles
import styles from './Styles/ListScreenStyles'

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state={}    
  }

  static navigationOptions = {
    title: 'ListScreen',
  }

  render () {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
        <Header/>
        <ScrollView style={styles.container}>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
            {items.amiibos.map(amiibo=> 
                {return <GridListItem onPress={()=>navigate('Amiibo',{ config:amiibo,id:amiibo.id })}
                  key={amiibo.id} config={amiibo}/>})
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const ModalStack = StackNavigator({
  ListScreen: { screen: ListScreen },
  Amiibo: { screen: AmiiboScreen }
},{
  initialRouteName: 'Home',
});

AppRegistry.registerComponent('ModalStack', ()=>ModalStack);

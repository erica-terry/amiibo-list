import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import GridListItem from '../Components/GridListItem';

// Styles
import styles from './Styles/FooterStyles'

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render () {
    const {config, item} = this.props

    return (
      <View style={styles.container}> 
        <Image style={styles.logo} source={Images.listIcon} />
        <Image style={styles.logo} source={Images.amiiboLogo} />
        <Image style={styles.logo} source={Images.amiiboLogo} />
        <Image style={styles.logo} source={Images.settingsIcon} />
      </View>
    )
  }
}

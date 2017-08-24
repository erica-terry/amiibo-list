import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import GridListItem from '../Components/GridListItem';

// Styles

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render () {
    const {config, item} = this.props

    return (
      <View>
        <Image source={config.imageSrc} />
        <Image source={config.imageSrc} />
      </View>
    )
  }
}

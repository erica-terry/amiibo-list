import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
  TouchableOpacity,
  Image,
  Text, 
  View } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/GridListItemStyles'
import { FullButton } from './FullButton'
// import ExamplesRegistry from '../Services/ExamplesRegistry'

export default class GridListItem extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render () {
    const {config} = this.props

    return (
    <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
      <View>
        <Image source={config.imageSrc} style={styles.figureImage} />
        <Text style={styles.text}>{config.name}</Text>
      </View>
    </TouchableOpacity> 
    )
  }
}
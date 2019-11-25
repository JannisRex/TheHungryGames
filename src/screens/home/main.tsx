import React, { Component } from 'react'
import { View, Text } from 'react-native'
import strings from '../../config/strings'
import styles from './styles'

class HomeScreen extends Component {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>{strings.HomeScreen.title}</Text>
        <Text>Button: {strings.HomeScreen.pressButton}</Text>
      </View>
    )
  }
}

export default HomeScreen

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

class SettingsScreen extends Component {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>S E T T I N G S</Text>
      </View>
    )
  }
}

export default SettingsScreen

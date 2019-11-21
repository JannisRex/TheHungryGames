import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

class HomeScreen extends Component {
  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>H O M E</Text>
      </View>
    )
  }
}

export default HomeScreen

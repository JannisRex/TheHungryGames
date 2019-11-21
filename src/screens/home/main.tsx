import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles.tsx'

class HomeScreen extends Component {
  render(): JSX.Element {
    return (
      <View styles={styles.container}>
        <Text>H O M E</Text>
      </View>
    )
  }
}

export default HomeScreen

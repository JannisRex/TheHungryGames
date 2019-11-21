import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from "./styles"

class HomeScreen extends Component {
  render(): JSX.Element {
    return (
      <View styles={styles.container}>
        <Text> H o m e </Text>
      </View>
    )
  }
}

export default HomeScreen

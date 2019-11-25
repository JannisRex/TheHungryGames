import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import styles from './styles'
import Logo from '../Logo/main'

class CustomHeader extends Component {
  render(): JSX.Element {
    return (
      <Header
        style={{ flex: 1 }}
        barStyle='dark-content'
        centerComponent={<Logo />}
        containerStyle={[styles.container, { backgroundColor: color }]}
      />
    )
  }
}

export default CustomHeader

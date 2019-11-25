import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Header } from '../../components/index'
import strings from '../../config/strings'
import styles from './styles'

import flex from '../../lib/flexboxHelper'

class HomeScreen extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <View style={styles.container}>
          <View style={flex.a2}><Text>1</Text></View>
          <View style={flex.a1}><Text>2</Text></View>
          <View style={flex.a3}><Text>3</Text></View>
          {/* <Text>{strings.HomeScreen.title}</Text> */}
          {/* <Text>Button: {strings.HomeScreen.pressButton}</Text> */}
        </View>
      </Container>
    )
  }
}

export default HomeScreen

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
          <View style={flex.a2}><Text>~~Flavour Text~~</Text></View>

          <View style={flex.a1}>
            <Text>++++++++++++++++</Text>
            <Text>Room for</Text>
            <Text>sick visualization</Text>
            <Text>++++++++++++++++</Text>
          </View>

          <View style={flex.a3}><Text>[BUTTON: Yeet]</Text></View>
          {/* <Text>{strings.HomeScreen.title}</Text> */}
          {/* <Text>Button: {strings.HomeScreen.pressButton}</Text> */}
        </View>
      </Container>
    )
  }
}

export default HomeScreen

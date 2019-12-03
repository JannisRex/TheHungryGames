import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
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
          <View style={{ flex: 2, }}>
            <Text>~~Flavour Text~~</Text>
          </View>

          <View style={{ flex: 3 }}>
            <Text>++++++++++++++++</Text>
            <Text>Room for</Text>
            <Text>sick visualization</Text>
            <Text>++++++++++++++++</Text>
          </View>

          <View style={{ flex: 1.5 }}>
            <Text>[BUTTON: Yeet]</Text>
          </View>
          {/* <Text>{strings.HomeScreen.title}</Text> */}
          {/* <Text>Button: {strings.HomeScreen.pressButton}</Text> */}
        </View>
      </Container>
    )
  }
}

export default HomeScreen

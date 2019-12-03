import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Container, Header } from '../../components/index'
import strings from '../../config/strings'
import theme from '../../config/theme.style'
import styles from './styles'

import flex from '../../lib/flexboxHelper'

class HomeScreen extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <View style={styles.container}>
          <View style={[styles.container, { flex: 2 }]}>
            <Text>~~Flavour Text~~</Text>
          </View>

          <View style={[styles.container, { flex: 3 }]}>
            <Text>++++++++++++++++</Text>
            <Text>Room for</Text>
            <Text>sick visualization</Text>
            <Text>++++++++++++++++</Text>
          </View>

          <View style={[styles.container, { flex: 1.5 }]}>
            <View style={{ flex: 1 }}>
              <Button
                title='Get Food'
                color={true ? '#cc00cc' : theme.COLOR_BUTTON_COMP}
                onPress={this._handleButtonPress}
              />
            </View>
          </View>
          {/* <Text>{strings.HomeScreen.title}</Text> */}
          {/* <Text>Button: {strings.HomeScreen.pressButton}</Text> */}
        </View>
      </Container>
    )
  }

  private readonly _handleButtonPress: any = (): void => {
    console.log('button pressed')
  }
}

export default HomeScreen

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container, Header } from '../../components/index'
import strings from '../../config/strings'
import styles from './styles'

import flex from '../../lib/flexboxHelper'

class SettingsScreen extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <View style={styles.container}>
          <View style={flex.a4}>
            <Text>++ Input: PLZ => City (get from zipCodeList) ++</Text>
            <Text>++ Slider: RangeMax ++</Text>
          </View>

          <View style={flex.a4}>
            <Text>++ CheckBoxes: Food Type ++</Text>
            <Text>[ ] [ ] [X] [X] [ ]</Text>
          </View>

          <View style={flex.a2}>
            <Text>++ Toggle: Yes/No ++</Text>
            <Text>++ ButtonGroup: [$], [$$], [$$$] ++</Text>
          </View>

          <View style={flex.a3}>
            <Text>extras???</Text>
            <Text>Checkboxes: e.g. canOrder alcohol...</Text>
          </View>

          {/* <Text>{strings.SettingsScreen.title}</Text> */}
        </View>
      </Container>
    )
  }
}

export default SettingsScreen

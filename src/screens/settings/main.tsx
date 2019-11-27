import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'
import { Container, Header } from '../../components/index'
import { Input, Slider, CheckBox, ButtonGroup } from 'react-native-elements'
import strings from '../../config/strings'
import styles from './styles'

import flex from '../../lib/flexboxHelper'

type Props = {}

type State = {
  sliderValue: number
}

class SettingsScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      sliderValue: 0
    }
  }

  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <View style={flex.a4}>
          <View style={{ flex: 1 }}>
            <Input
              placeholder='Enter Zip-Code'
            />
          </View>

          <View style={{ flex: 1 }}>
            <Slider
              value={this.state.sliderValue}
              onValueChange={(value: number): void => this.setState({ sliderValue: value })}
            />
          </View>
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
      </Container>
    )
  }
}

export default SettingsScreen

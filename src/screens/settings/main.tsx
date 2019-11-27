import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'
import { Container, Header } from '../../components/index'
import { Input, Slider, CheckBox, ButtonGroup } from 'react-native-elements'
import strings from '../../config/strings'
import styles from './styles'

import flex from '../../lib/flexboxHelper'

type Props = {}

type State = {
  sliderValue: number,
  cB1: boolean,
  cB2: boolean,
  cB3: boolean,
  cB4: boolean
}

class SettingsScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      sliderValue: 0,

      cB1: false,
      cB2: false,
      cB3: false,
      cB4: false
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
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <CheckBox title='cB1' checked={this.state.cB1}/>
              <CheckBox title='cB2' checked={this.state.cB2}/>
              <CheckBox title='cB3' checked={this.state.cB3}/>
              <CheckBox title='cB4' checked={this.state.cB4}/>
            </View>
          </View>
        </View>

        <View style={flex.a2}>
          <View style={{ flex: 1 }}>
            <Text>++ Toggle: Yes/No ++</Text>
            <Text>++ ButtonGroup: [$], [$$], [$$$] ++</Text>
          </View>
        </View>

        <View style={flex.a3}>
          <View style={{ flex: 1 }}>
            <Text>extras???</Text>
            <Text>Checkboxes: e.g. canOrder alcohol...</Text>
          </View>
        </View>

        {/* <Text>{strings.SettingsScreen.title}</Text> */}
      </Container>
    )
  }
}

export default SettingsScreen

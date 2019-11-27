import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'
import { Container, Header } from '../../components/index'
import { Input, Slider, CheckBox, ButtonGroup } from 'react-native-elements'
import strings from '../../config/strings'
import styles from './styles'

import flex from '../../lib/flexboxHelper'

type Props = {}

// TODO: mb add with ...RestOperator
// or think of something better than
// 12 states :ccc
type State = {
  sliderValue: number,
  checkBoxesFood: {
    cB1: boolean,
    cB2: boolean,
    cB3: boolean,
    cB4: boolean,
    cB5: boolean,
    cB6: boolean,
    cB7: boolean,
    cB8: boolean,
    cB9: boolean,
    cB10: boolean,
    cB11: boolean,
    cB12: boolean
  }
}

class SettingsScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      sliderValue: 0,
      checkBoxesFood: {
        cB1: false,
        cB2: false,
        cB3: false,
        cB4: false,
        cB5: false,
        cB6: false,
        cB7: false,
        cB8: false,
        cB9: false,
        cB10: false,
        cB11: false,
        cB12: false
      }
    }
  }

  render(): JSX.Element {
    return (
      <Container>
        <Header />

        <View style={flex.a4}>
          {/* Upper Segment - evaluates ZIP-Code */}
          {/* and gets according CityName */}
          <View style={{ flex: 1 }}>
            <Input
              placeholder='Enter Zip-Code'
            />
          </View>

          {/* to set max Range a restaurant */}
          {/* is allowed to have as distance */}
          <View style={{ flex: 1 }}>
            <Slider
              value={this.state.sliderValue}
              onValueChange={(value: number): void => this.setState({ sliderValue: value })}
            />
          </View>
        </View>

        <View style={flex.a4}>
          {/* essentially just checkBoxes in rows, */}
          {/* gets layouted by flexBoxes */}
          <View style={{ flex: 1, flexDirection: 'column' }}>
            {/* First Row */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <CheckBox title='cB1' checked={this.state.checkBoxesFood.cB1}/>
              <CheckBox title='cB2' checked={this.state.checkBoxesFood.cB2}/>
              <CheckBox title='cB3' checked={this.state.checkBoxesFood.cB3}/>
              <CheckBox title='cB4' checked={this.state.checkBoxesFood.cB4}/>
            </View>
            {/* Second Row */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <CheckBox title='cB5' checked={this.state.checkBoxesFood.cB5}/>
              <CheckBox title='cB6' checked={this.state.checkBoxesFood.cB6}/>
              <CheckBox title='cB7' checked={this.state.checkBoxesFood.cB7}/>
              <CheckBox title='cB8' checked={this.state.checkBoxesFood.cB8}/>
            </View>
            {/* Third Row */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <CheckBox title='cB9' checked={this.state.checkBoxesFood.cB9}/>
              <CheckBox title='cB10' checked={this.state.checkBoxesFood.cB10}/>
              <CheckBox title='cB11' checked={this.state.checkBoxesFood.cB11}/>
              <CheckBox title='cB12' checked={this.state.checkBoxesFood.cB12}/>
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

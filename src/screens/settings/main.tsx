import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'
import { Container, Header } from '../../components/index'
import { Input, Slider, CheckBox, ButtonGroup, Divider } from 'react-native-elements'
import strings from '../../config/strings'
import styles from './styles'

import flex from '../../lib/flexboxHelper'

type Props = {}

// TODO: mb add with ...RestOperator
// or think of something better than
// 12 states :ccc
type State = {
  sliderValue: number,
  selectedIndex: number,
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
  },
  toggleValue: boolean
}

class SettingsScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      sliderValue: 0,
      selectedIndex: 0,
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
      },
      toggleValue: false
    }
  }

  // TODO: everything is present, but
  // everything looks worse than garbage
  render(): JSX.Element {
    const cBF = this.state.checkBoxesFood

    return (
      <Container>
        <Header />

        <View style={flex.a4}>
          {/* Upper Segment - evaluates ZIP-Code */}
          {/* and gets according CityName */}
          <View style={{ flex: 1 }}>
            <Input
              placeholder='Enter Zip-Code...'
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
            <View style={{ flexDirection: 'row' }}>
              <CheckBox title='Brasserie / Café' checked={cBF.cB1} onPress={(): void => this._updateCheckBox('cB1')} />
              <CheckBox title='Takeaway' checked={cBF.cB2} onPress={(): void => this._updateCheckBox('cB2')} />
              <CheckBox title='Restaurant' checked={cBF.cB3} onPress={(): void => this._updateCheckBox('cB3')} />
              <CheckBox title='Family Friendly Diner' checked={cBF.cB4} onPress={(): void => this._updateCheckBox('cB4')} />
              <Divider />
            </View>
            {/* Second Row */}
            <View style={{ flexDirection: 'row' }}>
              <CheckBox title='cB5' checked={cBF.cB5} onPress={(): void => this._updateCheckBox('cB5')} />
              <CheckBox title='cB6' checked={cBF.cB6} onPress={(): void => this._updateCheckBox('cB6')} />
              <CheckBox title='cB7' checked={cBF.cB7} onPress={(): void => this._updateCheckBox('cB7')} />
              <CheckBox title='cB8' checked={cBF.cB8} onPress={(): void => this._updateCheckBox('cB8')} />
            </View>
            {/* Third Row */}
            <View style={{ flexDirection: 'row' }}>
              <CheckBox title='cB9' checked={cBF.cB9} onPress={(): void => this._updateCheckBox('cB9')} />
              <CheckBox title='cB10' checked={cBF.cB10} onPress={(): void => this._updateCheckBox('cB10')} />
              <CheckBox title='cB11' checked={cBF.cB11} onPress={(): void => this._updateCheckBox('cB11')} />
              <CheckBox title='cB12' checked={cBF.cB12} onPress={(): void => this._updateCheckBox('cB12')} />
            </View>
          </View>
        </View>

        <View style={flex.a2}>
          {/* Here we have a toggle to either activate */}
          {/* or deactivate filtering by cost */}
          <View>
            <Switch
              onValueChange={this._updateToggle}
              value={this.state.toggleValue}
            />

            {/* and here we can press the wanted */}
            {/* priceRange which restaurants should be in */}
            <View>
              <ButtonGroup
                onPress={this._updateIndex}
                selectedIndex={this.state.selectedIndex}
                buttons={['$', '$$', '$$$']}
                containerStyle={{ height: 100 }}
              />
            </View>
          </View>
        </View>

        <View style={flex.a3}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              {/* First Row */}
              <View style={{ flexDirection: 'row' }}>
                <CheckBox title='can order Alcohol' checked={cBF.cB1} onPress={(): void => this._updateCheckBox('cB1')} />
                <CheckBox title='can order Cigarettes' checked={cBF.cB2} onPress={(): void => this._updateCheckBox('cB2')} />
                <CheckBox title='can order Dessert' checked={cBF.cB3} onPress={(): void => this._updateCheckBox('cB3')} />
              </View>
              {/* Second Row */}
              <View style={{ flexDirection: 'row' }}>
                <CheckBox title='extraYY' checked={cBF.cB4} onPress={(): void => this._updateCheckBox('cB4')} />
                <CheckBox title='extraXX' checked={cBF.cB5} onPress={(): void => this._updateCheckBox('cB5')} />
                <CheckBox title='extraZZ' checked={cBF.cB6} onPress={(): void => this._updateCheckBox('cB6')} />
              </View>
            </View>
          </View>
        </View>

        {/* <Text>{strings.SettingsScreen.title}</Text> */}
      </Container>
    )
  }

// gets passed the name of the checkBox
// and swaps boolean
private readonly _updateCheckBox: any = (name: string): void => {
  this.setState((prevState: State) => ({
    checkBoxesFood: {
      ...prevState.checkBoxesFood,
      [name]: !prevState.checkBoxesFood[name]
    }
  }))
}

// updates index for buttonGroup
private readonly _updateIndex: any = (newIndex: number): void => {
  this.setState({
    selectedIndex: newIndex
  })
}

// switches value of Toggle
private readonly _updateToggle: any = (newValue: boolean): void => {
  this.setState({
    toggleValue: newValue
  })
}
}

export default SettingsScreen

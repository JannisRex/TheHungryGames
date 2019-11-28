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

  render(): JSX.Element {
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
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <CheckBox title='Brasserie / Café' checked={this.state.checkBoxesFood.cB1}/>
              <CheckBox title='Takeaway' checked={this.state.checkBoxesFood.cB2}/>
              <CheckBox title='Restaurant' checked={this.state.checkBoxesFood.cB3}/>
              <CheckBox title='Family Friendly Diner' checked={this.state.checkBoxesFood.cB4}/>
              <Divider />
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
          {/* Here we have a toggle to either activate */}
          {/* or deactivate filtering by cost */}
          <View style={{ flex: 1 }}>
            <Switch
              onValueChange={this._updateToggle}
              value={this.state.toggleValue}
            />

            {/* and here we can press the wanted */}
            {/* priceRange which restaurants should be in */}
            <ButtonGroup
              onPress={this._updateIndex}
              selectedIndex={this.state.selectedIndex}
              buttons={['$', '$$', '$$$']}
              containerStyle={{ height: 100 }}
            />
          </View>
        </View>

        <View style={flex.a3}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              {/* First Row */}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <CheckBox title='can order Alcohol' checked={this.state.checkBoxesFood.cB1}/>
                <CheckBox title='can order Cigarettes' checked={this.state.checkBoxesFood.cB2}/>
                <CheckBox title='can order Dessert' checked={this.state.checkBoxesFood.cB3}/>
              </View>
              {/* Second Row */}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <CheckBox title='extraYY' checked={this.state.checkBoxesFood.cB5}/>
                <CheckBox title='extraXX' checked={this.state.checkBoxesFood.cB6}/>
                <CheckBox title='extraZZ' checked={this.state.checkBoxesFood.cB7}/>
              </View>
            </View>
          </View>
        </View>

        {/* <Text>{strings.SettingsScreen.title}</Text> */}
      </Container>
    )
  }

private readonly _updateIndex: any = (newIndex: number): void => {
  this.setState({
    selectedIndex: newIndex
  })
}

private readonly _updateToggle: any = (newValue: boolean): void => {
  this.setState({
    toggleValue: newValue
  })
}
}

export default SettingsScreen

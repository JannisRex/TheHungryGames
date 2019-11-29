import React, { Component } from 'react'
import { View, Text, Switch, Dimensions } from 'react-native'
import { DynamicScrollView, Header } from '../../components/index'
import { Input, Slider, CheckBox, ButtonGroup, Divider } from 'react-native-elements'
import strings from '../../config/strings'
import styles from './styles'

import flex from '../../lib/flexboxHelper'

type Props = {}

// TODO: mb add with ...RestOperator
// or think of something better than
// 12 states :ccc
type State = {
  inputValue: string,
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
      inputValue: 'Enter ZIP',
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
    const zipInput = React.createRef<Input>()
    const cBF = this.state.checkBoxesFood
    const maxWidth = Dimensions.get('window').width
    const maxProportion = 100
    const desiredProportion = 75

    return (
      <View style={{ flex: 1 }}>
        <Header />

        <DynamicScrollView>
          <View style={{ flex: 2 }}>
            {/* Upper Segment - evaluates ZIP-Code */}
            {/* and gets according CityName */}
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Input
                ref={zipInput}
                placeholder='Enter Zip-Code...'
                leftIcon={{ type: 'entypo', name: 'location' }}
                onChangeText={((text: string): void => this._setInputValue(text))}
              />
              <Text> => {this.state.inputValue} </Text>
            </View>

            {/* to set max Range a restaurant */}
            {/* is allowed to have as distance */}
            <View style={{ flex: 1 }}>
              <Slider
                value={this.state.sliderValue}
                onValueChange={(value: number): void => this.setState({ sliderValue: value })}
                style={{ alignSelf: 'center', width: (maxWidth / maxProportion) * desiredProportion }}
              />
              <Text style={{ alignSelf: 'center' }}>Range in km: {(this.state.sliderValue * 100).toFixed(0)}</Text>
            </View>
          </View>

          <Divider style={{ backgroundColor: '#000', height: 2 }}/>

          <View style={{ flex: 4 }}>
            {/* essentially just checkBoxes in rows, */}
            {/* gets layouted by flexBoxes */}
            <View style={{ flex: 1, flexDirection: 'column' }}>
              {/* First Row */}
              <View style={{ flexDirection: 'row' }}>
                <CheckBox title='Café' checked={cBF.cB1} onPress={(): void => this._updateCheckBox('cB1')} />
                <CheckBox title='Takeaway' checked={cBF.cB2} onPress={(): void => this._updateCheckBox('cB2')} />
                <CheckBox title='Restaurant' checked={cBF.cB3} onPress={(): void => this._updateCheckBox('cB3')} />
                <CheckBox title='Family Friendly Diner' checked={cBF.cB4} onPress={(): void => this._updateCheckBox('cB4')} />
              </View>
              <Divider style={{ backgroundColor: '#000', height: 1.5 }}/>
              {/* Second Row */}
              <View style={{ flexDirection: 'row' }}>
                <CheckBox title='Italian' checked={cBF.cB5} onPress={(): void => this._updateCheckBox('cB5')} />
                <CheckBox title='Chinese' checked={cBF.cB6} onPress={(): void => this._updateCheckBox('cB6')} />
                <CheckBox title='Mongolian' checked={cBF.cB7} onPress={(): void => this._updateCheckBox('cB7')} />
                <CheckBox title='Greek' checked={cBF.cB8} onPress={(): void => this._updateCheckBox('cB8')} />
              </View>
              {/* Third Row */}
              <View style={{ flexDirection: 'row' }}>
                <CheckBox title='Sushi' checked={cBF.cB9} onPress={(): void => this._updateCheckBox('cB9')} />
                <CheckBox title='Pizza' checked={cBF.cB10} onPress={(): void => this._updateCheckBox('cB10')} />
                <CheckBox title='Pasta' checked={cBF.cB11} onPress={(): void => this._updateCheckBox('cB11')} />
                <CheckBox title='Burger' checked={cBF.cB12} onPress={(): void => this._updateCheckBox('cB12')} />
              </View>
            </View>
          </View>

          <Divider style={{ backgroundColor: '#000', height: 2 }}/>

          <View style={{ flex: 1 }}>
            {/* Here we have a toggle to either activate */}
            {/* or deactivate filtering by cost */}
            <View>
              <Switch
                onValueChange={this._updateToggle}
                value={this.state.toggleValue}
                style={{ alignSelf: 'center' }}
              />
            </View>
            {/* and here we can press the wanted */}
            {/* priceRange which restaurants should be in */}
            <View>
              <ButtonGroup
                onPress={this._updateIndex}
                selectedIndex={this.state.selectedIndex}
                buttons={['$', '$$', '$$$']}
                containerStyle={{ paddingBottom: 15 }}
              />
            </View>
          </View>

          <Divider style={{ backgroundColor: '#000', height: 2 }}/>

          <View style={{ flex: 2 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: 'column' }}>
                {/* First Row */}
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox title='can order Alcohol' checked={cBF.cB1} onPress={(): void => this._updateCheckBox('cB1')} />
                  <CheckBox title='can order Cigarettes' checked={cBF.cB2} onPress={(): void => this._updateCheckBox('cB2')} />
                  <CheckBox title='can order Dessert' checked={cBF.cB3} onPress={(): void => this._updateCheckBox('cB3')} />
                </View>

                <Divider style={{ backgroundColor: '#000', height: 1 }}/>

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
        </DynamicScrollView>
      </View>
    )
  }

// gets called when Input changes
// gets passed Input and tries to
// to find CIty with fitting ZIP
private readonly _setInputValue: any = (text: string): void => {
  let zip = Number(text)
  let city = null
  // DO ZIP LOGIC HERE
  // TRY TO FIND CITY
  // AND EVERYTHING IMPORTANT
  // IF THRE ISNT A CITY WITH
  // PASSED ZIP, GIVE ERROR

  if (city === null) {
    this.setState({
      inputValue: 'BAD zip'
    })
  } else {
    this.setState({
      inputValue: city
    })
  }

    if (zip === 25764) {
    this.setState({
      inputValue: 'BAD zip'
    })
  }
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

import React, { Component } from 'react'
import { View, Text, Switch, Dimensions, AsyncStorage } from 'react-native'
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
  toggleValue: boolean,

  loadedItems: boolean,
  savedItems: boolean
}

class SettingsScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      inputValue: 'Please enter ZIP of your Location',
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
      toggleValue: false,

      loadedItems: false,
      savedItems: false
    }
  }

  // Here we are getting all the stored keyNames
  // with those we fetch the values matched
  // TODO: => Save those values to state
  async componentDidMount(): Promise<void> {
    try {
      await AsyncStorage.getAllKeys().then(async (keys: string[]) => {
        const result = await AsyncStorage.multiGet(keys)
        return result.map((item: string[]) => {
          console.log('0: ', item[0])
          console.log('1: ', item[1])
        })
      })
    } catch (e) {
      console.log(e)
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
            <View style={{ flex: 1 }}>
              <Input
                ref={zipInput}
                label={this.state.inputValue}
                placeholder='Enter Zip-Code...'
                leftIcon={{ type: 'entypo', name: 'location' }}
                onChangeText={((text: string): void => this._setInputValue(text))}
              />
            </View>

            {/* to set max Range a restaurant */}
            {/* is allowed to have as distance */}
            <View style={{ flex: 1 }}>
              <Slider
                value={this.state.sliderValue}
                onValueChange={(value: number): void => this.setState({ sliderValue: value }, () => this._storeItem('prefDistance', (value * 100).toFixed(0)))}
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

  private readonly _saveToState: any = (smth: {}): void => {
    if (smth !== null) {
      console.log(typeof smth)
    }
  }

  // AsyncStorage Basic Store Function
  private readonly _storeItem: any = async (key: string, item: {} | number | string): Promise<void> => {
    try {
      const json = await AsyncStorage.setItem(key, JSON.stringify(item))
      console.log('ITEM: ', item)
      console.log('STORING: ', JSON.stringify(item))
      return json
    } catch (e) {
      console.log(e)
    }

    return null
  }

  private readonly _returnItem: any = async (key: string): Promise<{}> => {
    try {
      const item: string = await AsyncStorage.getItem(key)

      if (typeof item === typeof Object) {
        return item
      } else if (item !== null) {
        return JSON.parse(item)
      }
    } catch (e) {
      console.log(e)
    }

    return null
  }

  // gets called when Input changes
  // gets passed Input and tries to
  // to find CIty with fitting ZIP
  private readonly _setInputValue: any = (text: string): void => {
    const zip = Number(text)
    this._storeItem('cityZip', zip)

    let city = null
    // DO ZIP LOGIC HERE
    // TRY TO FIND CITY
    // AND EVERYTHING IMPORTANT
    // IF THRE ISNT A CITY WITH
    // PASSED ZIP, GIVE ERROR

    if (zip === 25764) {
      city = 'Wesselburen'
    }

    if (city === null) {
      this.setState({
        inputValue: 'Please Enter a valid ZIP'
      }, () => this._storeItem('cityName', null))
    } else {
      this.setState({
        inputValue: city
      }, () => this._storeItem('cityName', city))
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
    }), () => this._storeItem('checkBoxes', this.state.checkBoxesFood))
  }

  // updates index for buttonGroup
  private readonly _updateIndex: any = (selectedIndex: number): void => {
    this.setState({
      selectedIndex
    }, this._storePriceRange)
  }

  // switches value of Toggle
  private readonly _updateToggle: any = (toggleValue: boolean): void => {
    this.setState({
      toggleValue
    }, this._storePriceRange)
  }

  private readonly _storePriceRange: any = async (): Promise<void> => {
    const { toggleValue, selectedIndex } = this.state

    // -1=OFF, 0=LOW, 1=MED, 2=HIGH
    if (toggleValue) {
      this._storeItem('prefPrice', -1)
    } else {
      this._storeItem('prefPrice', selectedIndex)
    }
  }
}

export default SettingsScreen

/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react'
import { AsyncStorage } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'

// here we fetch AsyncStorage and check,
// if we stored something earlier, then
// we save it to state and pass to homeScreen
const _getPreferences = async (): Promise<void> => {
  try {
    await AsyncStorage.getItem('@settings').then((result: {}) => {
      if (typeof result === typeof Object) {
        console.log('initialLoad->getPreferences()')
        console.log(result)
      }
    })
  } catch (e) {
    console.log('error getting theme-')
  }
}

// here we execute everything, thats about loading
// e.g. => Getting Fonts, Images, fetching Data...
export default class LoadingScreen extends React.Component<{navigation: string}> {
  constructor(props: any) {
    super(props)
    this.state = {
      isLoadingComplete: false
    }
    _getPreferences()
      .catch(Error)
  }

  render(): JSX.Element {
    return (
      <AppLoading
        startAsync={this._loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    )
  }

 _loadResourcesAsync: ()=> Promise<void> = async () => {
   await Promise.all([
     Asset.loadAsync([
       require('../../assets/logo/Ebay(300-120).png')
     ]),
     Font.loadAsync({
       robotoRegular: require('../../../src/assets/font/Roboto-Regular.ttf'),
       robotoCondensed: require('../../../src/assets/font/robotoCondensed.ttf'),
       impact: require('../../../src/assets/font/impact.ttf'),
       latoLightitalic: require('../../../src/assets/font/Lato-LightItalic.ttf'),
       latoHairline: require('../../../src/assets/font/Lato-Hairline.ttf')
     })
   ])
 }

 _handleLoadingError: (error: Error)=> void = (error: Error) => {
   console.log(error)
 }

 _handleFinishLoading: ()=> void = () => {
   this.setState({ isLoadingComplete: true })
   this.props.navigation.navigate('App')
 }
}

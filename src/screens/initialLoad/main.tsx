/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react'
import { AsyncStorage } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { NavigationScreenProp } from 'react-navigation'

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
export default class LoadingScreen extends React.Component<{navigation: NavigationScreenProp<any>}> {
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

  private readonly _storeAsyncStorage: any = async (key: string, item: {}[]): Promise<void> => {
    try {
      const json = await AsyncStorage.setItem(key, JSON.stringify(item))
      return json
    } catch (e) {
      console.log(e)
    }

    return null
  }

 private readonly _loadResourcesAsync: any = async (): Promise<void> => {
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

 private readonly _handleLoadingError: any = (error: Error): void => {
   console.log(error)
 }

 private readonly _handleFinishLoading: any = (): void => {
   this.setState({ isLoadingComplete: true })
   this.props.navigation.navigate('App')
 }
}

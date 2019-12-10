/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react'
import { AsyncStorage } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { NavigationScreenProp } from 'react-navigation'
import { FetchGermanCitiesList } from '../../service/index'

const storageKey = 'zipList'

type Props = {
  navigation: NavigationScreenProp<any>
}

type State = {
  isLoadingComplete: boolean,
  zipCodeData: []
}

// here we fetch AsyncStorage and check,
// if we stored something earlier
const _getPreferences = async (): Promise<void> => {
  try {
    await AsyncStorage.getItem('@settings').then((result: {}) => {
      console.log('type: ', typeof result, 'result: ', result)
    })
  } catch (e) {
    console.log(e)
  }
}

// here we execute everything, thats about loading
// e.g. => Getting Fonts, Images, fetching Data...
export default class LoadingScreen extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      isLoadingComplete: false,
      zipCodeData: []
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

  // looks in AsyncStorage for constKey and fetches,
  // stores to state and returns true if it occured
  // otherwise returns false and nothing else
  private readonly _checkAsyncStorage: any = async (key: string): Promise<boolean> => {
    try {
      const item: string = await AsyncStorage.getItem(key)
      if (item !== null) {
        this.setState({
          zipCodeData: JSON.parse(item)
        })
        return true
      }
    } catch (e) {
      console.log(e)
    }

    return false
  }

  // gets called from _initialFetch() with key+data prop
  // then data gets stored @key => will make
  // another call to _initialFetch() unnecessary
  private readonly _storeAsyncStorage: any = async (key: string, item: {}[]): Promise<void> => {
    try {
      const json = await AsyncStorage.setItem(key, JSON.stringify(item))
      return json
    } catch (e) {
      console.log(e)
    }

    return null
  }

  // if no store @AsyncStorage is present,
  // it has to fetch data from uri
  // saves to AsyncStorage After
  private readonly _fetchInitialData: any = (): void => {
    console.log('FETCHING...')
    FetchGermanCitiesList()
      .then((zipCodeData: []) => {
        this.setState({
          zipCodeData
        })

        this._storeAsyncStorage(storageKey, zipCodeData)
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

 private readonly _loadResourcesAsync: any = async (): Promise<void> => {
   // checks wether something is stored @AsyncStorage
   // or if it needs to be fetched
   if (!(await this._checkAsyncStorage(storageKey))) {
     this._fetchInitialData()
   }

   // fetches all Images and Fonts
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
   console.log('Loading Finished!')
   console.log('data: ', JSON.stringify(this.state.zipCodeData[1]))
   this.setState({ isLoadingComplete: true })
   this.props.navigation.navigate('App')
 }
}

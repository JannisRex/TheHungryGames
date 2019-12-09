import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { FetchGermanCitiesList } from '../service/index'

type Props = {}

type State = {
  isLoading: boolean,
  data: {}
}

class ZipHelper extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      isLoading: true,
      data: {}
    }
  }

  isWesselburen: any = (zip: number): boolean => {
    if (zip === 25764) {
      return true
    }

    return false
  }

  // gets passed zip for example and
  // returns city name of corresponding
  getCity: any = (zip: number): string => {
    // do logic
  }

  // gets passed zip for example and
  // returns corresponding state name
  getState: any = (zip: number): string => {

  }

  // gets passed zip for example and
  // returns dial of corresponding state
  getDial: any = (zip: number): number => {

  }
  componentDidMount(): void {
    this._fetchInitialData()
  }

  private readonly _findZipObject: any = (zip: number) => {
    if (!this.state.isLoading) {}
  }

  private readonly _checkAsyncStorage = async () => {

  }

  private readonly _fetchInitialData: any = (): void => {
    FetchGermanCitiesList()
      .then((data: Response) => {
        this.setState({
          isLoading: false,
          data
        })

        this._storeAsyncStorage('zipList', data)
      })
      .catch((error: Error) => {
        console.log(error)
      })
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
}

export default ZipHelper

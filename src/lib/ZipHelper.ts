import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { FetchGermanCitiesList } from '../service/index'

type Props = {}

type State = {
  isLoading: boolean,
  data: []
}

type listEntry = {
  city: string,
  additional: string,
  zip: number,
  dial: number,
  state: string
}

const storageKey = 'zipList'

class ZipHelper extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      isLoading: true,
      data: []
    }
  }

  // gets passed zip for example and
  // returns city name of corresponding
  getCity: any = (zip: number): string | null => {
    const response = this._findZipObject(zip)

    if (response) {
      return response.city
    }

    return null
  }

  // gets passed zip for example and
  // returns corresponding state name
  getState: any = (zip: number): string | null => {
    const response = this._findZipObject(zip)

    if (response) {
      return response.state
    }

    return null
  }


  // gets passed zip for example and
  // returns dial of corresponding state
  getDial: any = (zip: number): number | null => {
    const response = this._findZipObject(zip)

    if (response) {
      return response.dial
    }

    return null
  }

  async componentDidMount(): Promise<void> {
    if (this._checkAsyncStorage()) {
      return
    }

    this._fetchInitialData()
  }

  // here we filter through our data by zip
  // return values are:
  // still loading => null
  // no entry found => -1
  // entry found => entry {}
  private readonly _findZipObject: any = (zip: number): listEntry => {
    if (!this.state.isLoading) {
      const data = this.state.data
      const pos = data.map((x: listEntry) => x.zip).indexOf(zip)
      const obj = data[pos]

      return obj
    }

    return null
  }

  //
  private readonly _fetchInitialData: any = (): void => {
    FetchGermanCitiesList()
      .then((data: []) => {
        this.setState({
          isLoading: false,
          data
        })

        this._storeAsyncStorage(storageKey, data)
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  //
  private readonly _checkAsyncStorage: any = async (): Promise<boolean> => {
    try {
      const item: string = await AsyncStorage.getItem(storageKey)
      if (item !== null) {
        this.setState({
          data: JSON.parse(item)
        })
        return true
      }
    } catch (e) {
      console.log(e)
    }

    return false
  }

  //
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

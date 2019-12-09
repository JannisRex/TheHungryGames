import React, { Component } from 'react'
import { FetchGermanCitiesList } from '../service/index'

class ZipHelper extends Component {
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

  private readonly _fetchInitialData: any = (): void => {
    FetchGermanCitiesList()
      .then((data: Response) => {
        this.setState({
          isLoading: false,
          data
        })
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }
}

export default ZipHelper

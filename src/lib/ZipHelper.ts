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

  // gets passed zip for example and
  // returns city name of corresponding
  getCity: any = (zip: number): string => {
    // do logic
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

export default {
  getCity: ZipHelper.getCity,
  isLoading: ZipHelper.state.isLoading
}

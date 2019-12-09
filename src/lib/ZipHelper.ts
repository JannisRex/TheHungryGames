import React, { Component } from 'react'
import { FetchGermanCitiesList } from '../service/index'
class ZipHelper extends Component {
  constructor(props: any) {
    super(props)

    this.state = {
      data: {}
    }
  }
  fetchInitialData: any = (): void => {
    FetchGermanCitiesList()
      .then((data: Response) => {
        this.setState({
          data
        })
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  getCity: any = (zip: number): string => {
    // do logic
    console.log(zip)
    return 'a'
  }
}

export default {
  screen: ZipHelper.getCity(),
  isInRange: true
}

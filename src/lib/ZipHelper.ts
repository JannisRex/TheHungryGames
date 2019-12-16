import React, { Component } from 'react'

type Props = {}

type State = {
  isLoading: boolean,
  data: []
}

export type listEntry = {
  city: string,
  additional: string,
  zip: number,
  dial: number,
  state: string
}

class ZipHelper extends Component<Props, State> {
  // gets passed zip for example and
  // returns city name of corresponding
  getCity: any = (zip: number, data: listEntry[]): string | null => {
    const response = this._findZipObject(zip, data)

    if (response) {
      return response.city
    }

    return null
  }

  // gets passed zip for example and
  // returns corresponding state name
  getState: any = (zip: number, data: listEntry[]): string | null => {
    const response = this._findZipObject(zip, data)

    if (response) {
      return response.state
    }

    return null
  }

  // gets passed zip for example and
  // returns dial of corresponding state
  getDial: any = (zip: number, data: listEntry[]): number | null => {
    const response = this._findZipObject(zip, data)

    if (response) {
      return response.dial
    }

    return null
  }


  // here we filter through our data by zip
  // return values are:
  // still loading => null
  // no entry found => -1
  // entry found => entry {}
  private readonly _findZipObject: any = (zip: number, data: listEntry[]): listEntry => {
    try {
      const pos = data.map((x: listEntry) => x.zip).indexOf(zip)
      const obj = data[pos]
      return obj
    } catch (e) {
      console.log(e)
      return null
    }
  }
}

const zipHelp = new ZipHelper({})
export default zipHelp

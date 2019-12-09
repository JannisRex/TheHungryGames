import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { FetchGermanCitiesList } from '../service/index'
class ZipHelper extends Component {
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

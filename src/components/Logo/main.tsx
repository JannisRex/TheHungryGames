import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

/* eslint-disable @typescript-eslint/no-require-imports */
const Logo = (): JSX.Element => (
  <Image source= { require('../../assets/logo/Ebay(300-120).png')}
    style={styles.image}
    resizeMode='contain'/>
)

export default Logo

// @flow strict
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import DynamicScrollView from '../DynamicScrollView/main'
import styles from './styles'

type Props = {
    error: Error,
    resetError: ()=> void
}

// TODO fix types
const ErrSubstituteScreen = (props: Props): JSX.Element => (
  <DynamicScrollView color='grey'>
    <View style={styles.errorContainer}>
      <Text style={styles.errorHeader}>{'Es ist ein Fehler aufgetreten:'}</Text>
      <Text style={styles.errorInfo}>{props.error.toString()}</Text>
      <TouchableOpacity style={styles.button} onPress={props.resetError}>
        <Text style={styles.buttonText}>{'App neustarten.'}</Text>
      </TouchableOpacity>
    </View>
  </DynamicScrollView>
)

export default ErrSubstituteScreen

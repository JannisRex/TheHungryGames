import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Container, Header } from '../../components/index'
import strings from '../../config/strings'
import theme from '../../config/theme.style'
import styles from './styles'

type Props = {}

type State = {
      zipCode: number | null,
      prefDistance: number | null,
      prefPrice: -1 | 0 | 1 | 2 | null, // or do an Enum for OFF-Cheap-Moderate-Expensive
      restaurantType: {
        typeA: boolean | null, // Café
        typeB: boolean | null, // Takeaway
        typeC: boolean | null, // Restaurant
        typeD: boolean | null // Family Friendly Diner
      },
      foodType: {

      },
      foodOrigin: {

      }
}

class HomeScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      zipCode: null,
      prefDistance: null,
      prefPrice: null,

      restaurantType: {
        typeA: null, // Café
        typeB: null, // Takeaway
        typeC: null, // Restaurant
        typeD: null // Family Friendly Diner
      },
      foodType: {

      },
      foodOrigin: {

      }
    }
  }
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <View style={styles.container}>
          <Text>{strings.HomeScreen.title}</Text>
          <View style={[styles.container, { flex: 2 }]}>
            <Text>{strings.HomeScreen.flavor}</Text>
          </View>

          <View style={[styles.container, { flex: 3 }]}>
            <Text>++++++++++++++++</Text>
            <Text>Room for</Text>
            <Text>sick visualization</Text>
            <Text>++++++++++++++++</Text>
          </View>

          <View style={[styles.container, { flex: 1.5 }]}>
            <View style={{ flex: 1 }}>
              <Button
                title={strings.HomeScreen.pressButton}
                color={true ? '#cc00cc' : theme.COLOR_BUTTON_COMP}
                onPress={this._handleButtonPress}
              />
            </View>
          </View>
        </View>
      </Container>
    )
  }

  private readonly _handleButtonPress: any = (): void => {
    console.log('button pressed')
  }
}

export default HomeScreen

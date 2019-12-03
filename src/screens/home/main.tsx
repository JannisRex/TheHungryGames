import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Container, Header } from '../../components/index'
import strings from '../../config/strings'
import theme from '../../config/theme.style'
import styles from './styles'

type Props = {}

type State = {
      isButtonFuchsia: boolean,
      foundRestaurant: string | null,
      zipCode: number | null,
      prefDistance: number | null,
      prefPrice: -1 | 0 | 1 | 2 | null, // or do an Enum for |OFF-Cheap-Moderate-Expensive|
      restaurantType: {
        typeA: boolean | null, // Café
        typeB: boolean | null, // Takeaway
        typeC: boolean | null, // Restaurant
        typeD: boolean | null // Family Friendly Diner
      },
      foodOrigin: {
        originA: boolean | null, // Italian
        originB: boolean | null, // Chinese
        originC: boolean | null, // Mongolian
        originD: boolean | null // Greek
      },
      foodType: {
        typeA: boolean | null, // Sushi
        typeB: boolean | null, // Pizza
        typeC: boolean | null, // Pasta
        typeD: boolean | null // Burger
      }
}

class HomeScreen extends Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      isButtonFuchsia: true,
      foundRestaurant: null,
      zipCode: null,
      prefDistance: null,
      prefPrice: null,

      restaurantType: {
        typeA: null, // Café
        typeB: null, // Takeaway
        typeC: null, // Restaurant
        typeD: null // Family Friendly Diner
      },
      foodOrigin: {
        originA: null, // Italian
        originB: null, // Chinese
        originC: null, // Mongolian
        originD: null // Greek
      },
      foodType: {
        typeA: null, // Sushi
        typeB: null, // Pizza
        typeC: null, // Pasta
        typeD: null // Burger
      }
    }
  }

  componentDidMount(): void {
  // AsyncStorage Logic Here
  // Check if Settings are fetchable
  // Fetch Or set defaultValues to State
  // Also have an indicator if or if not
  // settings have changed and require reload
  // prevent reload on every screenSwitch, also
  // use PureComponent and good safety for AS.
  }

  render(): JSX.Element {
    const { foundRestaurant } = this.state
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
            <Text>{foundRestaurant !== null ? foundRestaurant : ''}</Text>
            <Text>sick visualization</Text>
            <Text>++++++++++++++++</Text>
          </View>

          <View style={[styles.container, { flex: 1.5 }]}>
            <View style={{ flex: 1 }}>
              <Button
                title={strings.HomeScreen.pressButton}
                color={this.state.isButtonFuchsia ? theme.COLOR_BUTTON : theme.COLOR_BUTTON_COMP}
                onPress={this._handleButtonPress}
              />
            </View>
          </View>
        </View>
      </Container>
    )
  }

  // check state, if smth null then refetch list
  // then try to pick a fitting restaurant, matching the criterias
  private readonly _handleButtonPress: any = (): void => {
    this.setState((prevState: State) => ({ isButtonFuchsia: !prevState.isButtonFuchsia })) // flipping button Color :)

    console.log('button pressed')
    this.setState({})
  }
}

export default HomeScreen

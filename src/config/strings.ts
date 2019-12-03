import DE from './locale/de/de.json'

// do something to get correct lang
// => just check AsyncStorage for EN / DE [...]

const Localization = DE

export default {
  Navigator: {
    homeText: Localization.Navigator.homeText,
    settingsText: Localization.Navigator.settingsText
  },
  HomeScreen: {
    title: Localization.HomeScreen.title,
    flavor: Localization.HomeScreen.flavor,
    pressButton: Localization.HomeScreen.pressButton,
    noRestaurant: Localization.HomeScreen.noRestaurant
  },
  SettingsScreen: {
    title: Localization.SettingsScreen.title
  }
}



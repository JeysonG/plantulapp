import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import { AppRegistry, Platform } from 'react-native';
import { registerRootComponent } from 'expo';

/* Taildwind css */
import { color } from 'react-native-tailwindcss';

const navigator = createStackNavigator(
  { SignUp, Login },
  {
    initialRouteName: 'SignUp',
    defaultNavigationOptions: {
      title: 'PlantulApp',
      headerTintColor: color.white,
      headerTitleAllowFontScaling: true,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: color.green400,
      },
      cardStyle: {
        backgroundColor: color.white,
      },
    },
  }
);

const App = createAppContainer(navigator);

if (Platform.OS == 'android') {
  // registerRootComponent(App);
  AppRegistry.registerComponent('plantulapp', () => App);
} else {
  AppRegistry.registerComponent('plantulapp', () => App);
}

export default App;

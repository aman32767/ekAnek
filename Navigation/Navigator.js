import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';

const Navigator = createStackNavigator({
  Home: HomeScreen,
  Result: ResultScreen,
});

export default createAppContainer(Navigator);

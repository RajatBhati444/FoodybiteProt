import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import AppStackNavigator from './AppStackNavigator';
import AppDrawerNavigator from './AppDrawerNavigator';
// import SearchStackNavigator from './SearchStackNavigator';

const AppSwitchNavigator = createSwitchNavigator(
  {
    root: {
      screen: AppDrawerNavigator,
    },
  },
  {
    initialRouteName: 'root',
  },
);

export default createAppContainer(AppSwitchNavigator);

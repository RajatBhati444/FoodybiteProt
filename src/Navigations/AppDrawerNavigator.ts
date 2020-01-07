import {createDrawerNavigator} from 'react-navigation-drawer';
//  import AuthStackNavigator from './AuthStackNavigator';
import {Dimensions} from 'react-native';
import AppDrawer from '../Components/Shared/AppDrawer';
import AppStackNavigator from './AppStackNavigator';
//  import {AppDrawer} from '../Components';

const {width} = Dimensions.get('screen');

const AppDrawerNavigator = createDrawerNavigator(
  {
    auth_stack: {
      screen: AppStackNavigator,
    },
  },
  {
    drawerWidth: width * 0.667,
    contentComponent: AppDrawer,
  },
);

export default AppDrawerNavigator;

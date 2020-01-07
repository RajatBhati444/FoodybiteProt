import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from '../Screens/screen1/Screen1';

import AppHeader from '../Components/Shared/AppHeader';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import DeckSwiper from '../Screens/deckSwiper/DeckSwiper';

Icon.loadFont();
const AppStackNavigator = createStackNavigator(
  {
    screen1: {
      screen: Screen1,
      navigationOptions: {
        header: AppHeader,
        headerTitle: 'Screen 1',
        headerLeft: (
          // <View />
          <Icon style={{paddingLeft: 40}} size={50} name="ios-more" />
        ),
      },
    },
  },
  {
    initialRouteName: 'screen1',
    headerMode: 'float',
  },
);

export default AppStackNavigator;

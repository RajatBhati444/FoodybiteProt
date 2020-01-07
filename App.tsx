import React, {useEffect} from 'react';
import AppTheme from './src/Config/AppTheme';
import AppSwitchNavigator from './src/Navigations/AppSwitchNavigator';
import NavigationService from './src/Navigations/NavigationService';
import {ThemeProvider} from './UIKIT/lib';
import {BackHandler, Alert} from 'react-native';
import 'react-native-gesture-handler';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
function App() {
  // componentWillUnmount() {
  //   this.backHandler.remove()
  // }

  const handleBackPress = () => {
    Alert.alert('hy');
    // BackHandler.exitApp();
  };

  return (
    <ThemeProvider value={AppTheme}>
      <AppSwitchNavigator
        // hNavigator
        ref={navigatorRef =>
          NavigationService.setTopLevelNavigator(navigatorRef)
        }
      />
    </ThemeProvider>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Alert,
  Text,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
import {NavigationProp} from 'react-navigation';
import {useScaling} from '../../Hooks';
import {iid} from 'react-native-firebase';

type PropType = {
  navigation: NavigationProp<any>;
};

function DeckSwiper(props: PropType) {
  const {
    navigation,
    Articles,
    renderArticles,
    getFullHeight,
    getFullWidth,
  } = useDeckSwiper(props);
  return <View style={{flex: 1}}>{renderArticles()}</View>;
}

function useDeckSwiper({navigation}: PropType) {
  var position = new Animated.ValueXY();
  const {getFullHeight, getFullWidth} = useScaling();

  const [currentIndex, setCurrentIndex] = useState(0);
  var panResponder;

  const Articles = [
    {
      id: 1,
      url:
        'https://images.pexels.com/photos/3494648/pexels-photo-3494648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 2,
      url:
        'https://images.pexels.com/photos/3472154/pexels-photo-3472154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 3,
      url:
        'https://images.pexels.com/photos/3154302/pexels-photo-3154302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 4,
      url:
        'https://images.pexels.com/photos/3171120/pexels-photo-3171120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 5,
      url:
        'https://images.pexels.com/photos/3388335/pexels-photo-3388335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];

  const renderArticles = () => {
    var panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => {
        // console.log('onStartShouldSetPanResponder', evt, gestureState);
        // console.log('currentIndex', currentIndex);
        return true;
      },

      onPanResponderMove: (evt, gestureState) => {
        // console.log('gestureState dy', gestureState.dy);
        position.setValue({x: 0, y: gestureState.dy});
        if (currentIndex > 4) {
          setCurrentIndex(0);
        }
      },
      onPanResponderGrant: (evt, gestureState) => {
        // console.log('onPanResponderGrant', evt, gestureState);
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderRelease: (evt, gestureState) => {
        // position.setValue({x: 0, y: 0});
        console.log('onPanResponderRelease', currentIndex);
        if (-gestureState.dy > 50 && -gestureState.vy > 0.7)
          Animated.timing(position, {
            toValue: {x: 0, y: -getFullHeight()},
            duration: 500,
          }).start(
            () =>
              currentIndex >= 4
                ? setCurrentIndex(0)
                : setCurrentIndex(currentIndex + 1),
            position.setValue({x: 0, y: 0}),
          );
        else {
          Animated.spring(position, {
            toValue: {x: 0, y: 0},
          }).start();
        }

        // console.log('onPanResponderRelease', evt, gestureState);
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
    });
    return Articles.map((data, i: any) => {
      console.log('currenIndex and index', i, currentIndex);
      if (i < currentIndex) {
        return null;
      }

      if (i == currentIndex) {
        return (
          <Animated.View
            {...panResponder.panHandlers}
            style={position.getLayout()}
            key={data.id}>
            <View
              style={{
                flex: 1,
                position: 'absolute',
                backgroundColor: 'grey',
                height: getFullHeight(),
                width: getFullWidth(),
              }}>
              {/* {penrespo()} */}
              <View style={{flex: 2}}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    backgroundColor: 'black',
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri: data.url,
                  }}
                />
              </View>
              <View style={{flex: 3, marginTop: 20}}>
                <Text>
                  OSX via react-native-desktop Browse to
                  node_modules/react-native-vector-icons and drag the folder
                  Fonts to your project in Xcode. Make sure your app is checked
                  under "Add to targets" and that "Create folder references" is
                  checked. Edit Info.plist and add a property called Application
                  fonts resource path (or ATSApplicationFontsPath if Xcode won't
                  autocomplete/not using Xcode) and type Fonts as the value.
                  Note: you need to recompile your project after adding new
                  fonts, also ensure that the Fonts folder also appear under
                  Copy Bundle Resources in Build Phases. Windows via
                  react-native-windows Open your solution in Visual Studio,
                  right click the Assets folder in your solution, click Add
                  Existing. Browse to the
                  node_modules\react-native-vector-icons\Fonts folder, select
                  the required font files Click the Add drop-down and select Add
                  as Link. Set Copy To Output Directory property of each font
                  file to using Xcode) and type Fonts as the value. Note: you
                  need to recompile your project after adding new fonts, also
                  ensure that the Fonts folder also appear under Copy Bundle
                  Resources in Build Phases. Windows via react-native-windows
                  Open your solution in Visual Studio, right click the Assets
                  folder in your solution, click Add Existing. Browse to the
                  node_modules\react-native-vector-icons\Fonts folder, select
                  the required font files Click the Add drop-down and select Add
                  as Link. Set Copy To Output Directory property of each font
                  file to
                </Text>
              </View>
            </View>
          </Animated.View>
        );
      } else {
        return (
          <Animated.View key={data.id}>
            <View
              style={{
                flex: 1,
                position: 'absolute',
                backgroundColor: 'grey',
                height: getFullHeight(),
                width: getFullWidth(),
              }}>
              {/* {penrespo()} */}
              <View style={{flex: 2}}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    backgroundColor: 'black',
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri: data.url,
                  }}
                />
              </View>
              <View style={{flex: 3, marginTop: 20}}>
                <Text>
                  OSX via react-native-desktop Browse to
                  node_modules/react-native-vector-icons and drag the folder
                  Fonts to your project in Xcode. Make sure your app is checked
                  under "Add to targets" and that "Create folder references" is
                  checked. Edit Info.plist and add a property called Application
                  fonts resource path (or ATSApplicationFontsPath if Xcode won't
                  autocomplete/not using Xcode) and type Fonts as the value.
                  Note: you need to recompile your project after adding new
                  fonts, also ensure that the Fonts folder also appear under
                  Copy Bundle Resources in Build Phases. Windows via
                  react-native-windows Open your solution in Visual Studio,
                  right click the Assets folder in your solution, click Add
                  Existing. Browse to the
                  node_modules\react-native-vector-icons\Fonts folder, select
                  the required font files Click the Add drop-down and select Add
                  as Link. Set Copy To Output Directory property of each font
                  file to using Xcode) and type Fonts as the value. Note: you
                  need to recompile your project after adding new fonts, also
                  ensure that the Fonts folder also appear under Copy Bundle
                  Resources in Build Phases. Windows via react-native-windows
                  Open your solution in Visual Studio, right click the Assets
                  folder in your solution, click Add Existing. Browse to the
                  node_modules\react-native-vector-icons\Fonts folder, select
                  the required font files Click the Add drop-down and select Add
                  as Link. Set Copy To Output Directory property of each font
                  file to
                </Text>
              </View>
            </View>
          </Animated.View>
        );
      }
    }).reverse();
  };

  return {
    navigation,
    Articles,
    renderArticles,
    getFullHeight,
    getFullWidth,
  };
}

export default DeckSwiper;

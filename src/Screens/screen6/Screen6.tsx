import React, {useState} from 'react';
import {NavigationProp} from 'react-navigation';
import {View, Button, Image, Text, Animated} from 'react-native';
import {Spacer} from '../../../UIKIT/lib';
import {ScrollView} from 'react-native-gesture-handler';

type PropType = {
  navigation: NavigationProp<any>;
};

function Screen6(props: PropType) {
  const {navigation, scrool_Y, setScrollY} = useScreen6(props);

  let HeaderMaxHeight = 120;
  let HeaderMinHeight = 70;
  let Profile_Max_Height = 80;
  let Profile_Min_Height = 40;

  const headerHeight = scrool_Y.interpolate({
    inputRange: [0, HeaderMaxHeight - HeaderMinHeight],
    outputRange: [HeaderMaxHeight, HeaderMinHeight],
    extrapolate: 'clamp',
  });

  const profileHeight = scrool_Y.interpolate({
    inputRange: [0, HeaderMaxHeight - HeaderMinHeight],
    outputRange: [Profile_Max_Height, Profile_Min_Height],
    extrapolate: 'clamp',
  });

  return (
    <ScrollView
      scrollEnabled
      scrollEventThrottle={16}
      style={{flex: 1}}
      onScroll={Animated.event([
        {
          nativeEvent: {contentOffset: {y: scrool_Y}},
        },
      ])}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'grey',
          // justifyContent: 'flex-end',
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            height: headerHeight,
            backgroundColor: 'lightskyblue',
          }}></Animated.View>

        <Animated.View
          style={{
            height: profileHeight,
            width: profileHeight,
            borderRadius: Profile_Max_Height / 2,
            overflow: 'hidden',
            marginLeft: 10,
            marginTop: HeaderMaxHeight - Profile_Max_Height / 2,
            borderColor: 'yellow',
            borderWidth: 2,
          }}>
          <Image
            style={{
              height: null,
              width: null,
              flex: 1,
              borderColor: 'red',
              //   borderWidth: 5,
            }}
            source={{
              uri:
                'https://images.pexels.com/photos/3494648/pexels-photo-3494648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
        </Animated.View>
        <View>
          <Text style={{marginLeft: 20, fontSize: 26}}>Rajat</Text>
        </View>

        <Spacer size={560} />
      </View>
      <Button
        title="move screen 1"
        onPress={() => navigation.navigate('deckSwiper')}
      />

      <View style={{height: 100}} />
    </ScrollView>
  );
}
function useScreen6({navigation}: PropType) {
  const [scrool_Y, setScrollY] = useState(new Animated.Value(0));
  return {navigation, scrool_Y, setScrollY};
}

export default Screen6;

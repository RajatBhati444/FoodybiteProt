import React, {useState} from 'react';
import {View, Text, Button, Animated, Easing} from 'react-native';
import {VisibilityToggle} from '../../../UIKIT/lib';

const FadeInView = (props: any) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      // easing: Easing.back(),
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

function setShow(val: any) {
  const [showFade, setShowFade] = useState(true);

  function setting(val: any) {
    setShowFade(!val);
  }

  return {
    showFade,
    setting,
  };
}

function Screen2({navigation, props}: any) {
  const {showFade, setting} = setShow(props);
  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Screen 2</Text>
      <Button
        title={'Navigate'}
        onPress={() => navigation.navigate('screen3')}
      />
      <Button
        title={showFade ? 'Hide Fade' : 'Show Fade'}
        onPress={() => setting(showFade)}
      />
      <VisibilityToggle visible={showFade}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FadeInView>
            <View
              style={{width: 250, height: 100, backgroundColor: 'powderblue'}}>
              <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
                Fading in
              </Text>
              <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
                Fading out
              </Text>
            </View>
          </FadeInView>
        </View>
      </VisibilityToggle>
    </View>
  );
}

export default Screen2;

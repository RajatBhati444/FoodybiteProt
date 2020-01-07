import React from 'react';
import {View, Text} from 'react-native';
import {Center, Click} from '../../../UIKIT/lib';
import {NavigationProp, SafeAreaView} from 'react-navigation';
import {Scene} from 'react-navigation-stack/lib/typescript/types';

type PropType = {
  navigation: NavigationProp<any>;
  scene: Scene;
};

function AppHeader(props: PropType) {
  console.log(props);
  const {headerTitle, headerLeft, navigation} = useAppHeader(props);
  return (
    <SafeAreaView
      style={{
        height: 50,
        backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{flex: 0.8}}>
        <Click onPress={navigation.openDrawer}>{headerLeft}</Click>
      </View>
      <View style={{flex: 1.1, justifyContent: 'center'}}>
        <Text style={{color: '#fff'}}>{headerTitle}</Text>
      </View>
    </SafeAreaView>
  );
}

function useAppHeader({scene, navigation}: PropType) {
  console.log('sceene', scene);
  const {headerTitle, headerLeft} = scene.descriptor.options;

  return {headerTitle, headerLeft, navigation};
}

export default AppHeader;

import React from 'react';
import {View, Text} from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProp} from 'react-navigation';

type PropType = {
  navigation: NavigationProp<any>;
};

function AppDrawer(props: PropType) {
  const {navigation} = useAppDrawer(props);
  //@ts-ignore
  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      {/* <Text>hy</Text> */}

      <Icon onPress={navigation.closeDrawer} size={90} name="ios-more" />
    </View>
  );
}

function useAppDrawer({navigation}: PropType) {
  return {navigation};
}

export default AppDrawer;

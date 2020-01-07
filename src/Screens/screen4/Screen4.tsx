import React, {useState, Fragment} from 'react';
import {View, Text, Button, Image} from 'react-native';
//@ts-ignore
import SkeletonLoader from 'react-native-skeleton-loader';
//@ts-ignore
import Carousel from 'react-native-snap-carousel';
import {useScaling} from '../../Hooks';
import {Click, Spacer} from '../../../UIKIT/lib';

function Screen4({navigation}: any) {
  let carousel;
  const {perfectSize} = useScaling();
  const [picdata, setPicData] = useState([
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration:
        'https://images.pexels.com/photos/3354641/pexels-photo-3354641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration:
        'https://images.pexels.com/photos/3367460/pexels-photo-3367460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration:
        'https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration:
        'https://images.pexels.com/photos/3205743/pexels-photo-3205743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration:
        'https://images.pexels.com/photos/3363359/pexels-photo-3363359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ]);

  function renderItem({item, index}: any) {
    // console.log('item', item);

    return (
      <View
        style={{
          height: perfectSize(200),
          width: '100%',
          // backgroundColor: '#000011',
        }}>
        {/* <SkeletonLoader type="square"> */}
        <Image
          source={{uri: item.illustration}}
          style={{height: perfectSize(200), width: perfectSize(200)}}
          resizeMode={'cover'}
          // style={{height: '100%', width: '100%'}}
        />
        {/* </SkeletonLoader> */}

        <Text>{item.title}</Text>
        <Text>{item.subtitle}</Text>
      </View>
    );
  }

  return (
    <View
      style={
        {
          // backgroundColor: 'red',
          // flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
        }
      }>
      <Carousel
        data={picdata}
        renderItem={renderItem}
        sliderWidth={perfectSize(400)}
        sliderHeight={perfectSize(400)}
        itemWidth={perfectSize(200)}
        loop={true}
      />
      {/* <Image
        source={{uri: picdata[0].illustration}}
        style={{height: 200, width: 200}}
        resizeMode={'cover'}
        // style={{height: '100%', width: '100%'}}
      /> */}
      <Spacer size={100} />
      <Button
        title={'Navigate'}
        onPress={() => navigation.navigate('screen5')}
      />
    </View>
  );
}

export default Screen4;

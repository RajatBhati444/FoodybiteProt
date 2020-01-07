import {create, PREDEF_RES} from 'react-native-pixel-perfect';
import {Dimensions, StatusBar} from 'react-native';

function useScaling() {
  const perfectSize = create(PREDEF_RES.iphone7.dp);

  function getFullWidth() {
    return Dimensions.get('screen').width;
  }

  function getFullHeight() {
    return Dimensions.get('screen').height;
  }

  function getStatusBarHeight() {
    return StatusBar.currentHeight || perfectSize(44 / 3);
  }

  return {
    perfectSize,
    getFullWidth,
    getStatusBarHeight,
    getFullHeight,
  };
}

export default useScaling;

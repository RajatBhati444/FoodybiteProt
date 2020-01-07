import React from 'react';

function useImageUpload() {
  return {};
}

export default useImageUpload;

// import {useState} from 'react';
// import ImagePicker from 'react-native-image-picker';
// // import SnackbarHandler from '../../Utilities/SnackbarHandler';

// function useImageUpload() {
//   const [imageUrl, setImageUrl] = useState(null);
//   function openImagePicker() {
//     return new Promise((resolve, reject) => {
//       ImagePicker.launchImageLibrary({quality: 0.5}, response => {
//         // console.log('Response = ', response);
//         if (response.didCancel) {
//           // SnackbarHandler.errorToast('User cancelled image picker');
//           reject();
//         } else if (response.error) {
//           // console.log('ImagePicker Error: ', response.error);
//           reject();
//         } else {
//           const source = response;
//           resolve(source);
//         }
//       });
//     });
//   }

//   async function imageUpload() {
//     try {
//       const imageSource = await openImagePicker();
//       setImageUrl({uri: imageSource.uri});
//     } catch (error) {
//       console.log(error);
//       console.log(error.response);
//     }
//   }

//   function openGallery() {
//     return new Promise((resolve, reject) => {
//       ImagePicker.launchImageLibrary({quality: 0.5}, response => {
//         // console.log('Response = ', response);
//         if (response.didCancel) {
//           // SnackbarHandler.errorToast('User cancelled image picker');
//           reject();
//         } else if (response.error) {
//           // console.log('ImagePicker Error: ', response.error);
//           reject();
//         } else {
//           const source = response;
//           resolve(source);
//         }
//       });
//     });
//   }

//   async function imageUploadByGallery() {
//     try {
//       const imageSource = await openGallery();
//       setImageUrl({uri: imageSource.uri});
//     } catch (error) {
//       console.log(error);
//       console.log(error.response);
//     }
//   }

//   return {
//     imageUpload,
//     imageUrl,
//     setImageUrl,
//     imageUploadByGallery,
//   };
// }

// export default useImageUpload;

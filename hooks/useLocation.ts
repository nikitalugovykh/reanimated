// Хук определения местоположения

// import { useEffect, useState } from "react";
// import * as Permissions from 'expo-permissions'

// import RNLocation from 'react-native-location';


// /**
//  * 
//  * @returns координаты устройства
//  */
// const useLocation = () => {
//   const [location, setLocation] = useState<any>({});

//   RNLocation.configure({
//     distanceFilter: 0,
//   })
//   useEffect(() => {
//     (async () => {        
//       try {
//         const { granted } = await Permissions.askAsync(Permissions.LOCATION);
//         if (!granted) return;

//         let location = await RNLocation.getLatestLocation({timeout: 100})
//         const coords = {
//           lat: location?.latitude,
//           lon: location?.longitude
//         }
//         setLocation(coords)
//       } catch (error) {
//         console.log(error);
//       }
//     })()
//   }, [])

//   return location
// };

// export default useLocation

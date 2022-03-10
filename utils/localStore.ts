// import * as SecureStore from 'expo-secure-store'

// /**
//  * Функции по работе с SecureStore приложения
//  */

// /**
//  * 
//  * @param key - ключ для сохранения в SecureStore
//  * @param value - значение ключа
//  */

// // Write pair key value
// export const saveInLocalStore = async (key: string, value: string) => {
//     await SecureStore.setItemAsync(key, value)
// }

// // Get value by key

// /**
//  * 
//  * @param key - ключ для получения из SecureStore
//  * @returns - значение для переданного ключа
//  */
// export const getValueKey = async (key: string): Promise<string | null> => {
//     return await SecureStore.getItemAsync(key)
// }

// // Delete value fron store
// /**
//  * 
//  * @param key - ключ для удаления из SecureStore
//  * @param params - необязательные параметры
//  * @returns 
//  */
// export const deleteValueFromLocalStore = async (key: string, params?:{}): Promise<void> => {
//     return await SecureStore.deleteItemAsync(key, params)
// }
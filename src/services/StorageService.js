import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
    console.log(e);
  }

  console.log('Data removed');
};

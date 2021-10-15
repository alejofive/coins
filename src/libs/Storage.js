import AsyncStorage from '@react-native-community/async-storage'

class Storage {

    static instance = new Storage()

    store = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            return true;
        } catch (err) {
            console.log('Storage error', err);
            return false;
        }
    }

    get = async (key) => {
        try {
            return await AsyncStorage.setItem(key);
        } catch (err) {
            console.log('Storage get error', err);
            throw Error(err);
        }
    }

    multiGet = async (keys) => {
        try {
            return await AsyncStorage.multiGet(keys);

        } catch (err) {
            console.log('multiGet remove err', err);

            throw Error(err);

        }
    }

    getAllkeys = async () => {
        try {

            return await AsyncStorage.getAllkeys();

        } catch (err) {
            console.log('multiGet getAllkeys err', err);

            throw Error(err);

        }
    }

    remove = async (key) => {
        try {
            await AsyncStorage.removeItem(key);

            return true;
        } catch (err) {
            console.log('storage remove err', err);

            return false;

        }
    }
}


export default Storage;
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../res/colors';
import Storage from '../../libs/Storage'

class FavoritesScreen extends Component {

    getFavorites = async () => {
        try {
            const allkeys = await Storage.instance.getAllkeys();

            console.log('keys', allkeys);
        } catch (err) {
            console.log('get favorites err', err);
        }
    }

    componentDidMount() {
        this.getFavorites();
    }

    render() {
        return (
            <View style={styles.container}>
                <FavoritesEmptyState

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackPearl,
    },

});

export default FavoritesScreen;

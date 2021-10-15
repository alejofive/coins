import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const FavoritesEmptyState = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>No tienes ningun favorites</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    },

});

export default FavoritesEmptyState;
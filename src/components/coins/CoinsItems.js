import React from 'react'

import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native';
import colors from './../../res/colors';

const CoinsItem = ({ item, onPress }) => {

    const getImgArrow = () => {
        if (item.percent_change_1h > 0) {
            return require('../../assets/arrow_up.png');

        } else {
            return require('../../assets/arrow_down.png');
        }
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
                <Image
                    style={styles.imgIcon}
                    source={getImgArrow()}
                />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        borderBottomColor: colors.zircon,
        borderBottomWidth: 1,
        marginLeft: Platform.OS == 'is' ? 16 : 0
    },
    row: {
        flexDirection: "row"
    },
    symbolText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 16
    },
    nameText: {
        color: '#fff',
        fontSize: 14,
        marginRight: 16
    },
    priceText: {
        color: '#fff',
        fontSize: 14
    },
    percentText: {
        color: '#fff',
        fontSize: 12,
        marginRight: 8
    },
    imgIcon: {
        width: 22,
        height: 22,
    }

});

export default CoinsItem;

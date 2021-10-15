import React, { Component } from 'react'

import { View, FlatList, StyleSheet, Text, ActivityIndicator } from 'react-native'
import Http from '../../libs/http';
import CoinsItems from './CoinsItems';
import colors from './../../res/colors';
import CoinsSearch from './CoinsSearch';

class CoinsScreen extends Component {

    state = {
        coins: [],
        allCoins: [],
        loadig: false,
    }

    componentDidMount = async () => {
        this.getCoins();
    }

    getCoins = async () => {
        this.setState({ loadig: true })
        const res = await Http.instance.get('https://api.coinlore.net/api/tickers/');

        this.setState({ coins: res.data, allCoins: res.data, loadig: false });
    }

    handlePress = (coin) => {
        this.props.navigation.navigate('CoinDetail', { coin });
    }

    handleSearch = (query) => {
        const { allCoins } = this.state;

        const coinsFiltered = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(query.toLowerCase());
        })

        this.setState({ coins: coinsFiltered })
    }

    render() {

        const { coins, loadig } = this.state;

        return (
            <View style={styles.container}>

                <CoinsSearch onChange={this.handleSearch} />

                {loadig ?
                    <ActivityIndicator color='#fff' size='large' style={styles.loader} />
                    : null
                }
                <FlatList
                    data={coins}
                    renderItem={({ item }) =>
                        <CoinsItems
                            item={item}
                            onPress={() => this.handlePress(item)}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade,

    },
    titletext: {
        color: '#fff',
        textAlign: 'center'
    },
    btn: {
        padding: 8,
        backgroundColor: 'blue',
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: '#fff',
        textAlign: 'center'
    },
    loader: {
        marginTop: 60
    }
});

export default CoinsScreen;



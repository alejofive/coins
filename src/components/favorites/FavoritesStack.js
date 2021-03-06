import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from './FavoritesScreen';
import colors from './../../res/colors';

const Stack = createStackNavigator();

const FavoritesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.blackPearl
                },
                headerTintColor: colors.white
            }}
        >
            <Stack.Screen
                name='Favotites'
                component={FavoritesScreen}
            />
        </Stack.Navigator>
    );
}

export default FavoritesStack;
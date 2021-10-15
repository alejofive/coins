import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { CoinsStack } from './src/components/coins/CoinsStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from './src/res/colors';
import FavoritesStack from './src/components/favorites/FavoritesStack';


const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
        }}
      >

        <Tabs.Screen
          name='Coins'
          component={CoinsStack}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors.blackPearl
            },
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('./src/assets/bank.png')}
              />
            )
          }}
        />

        <Tabs.Screen
          name='Favorites'
          component={FavoritesStack}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors.blackPearl
            },
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('./src/assets/star.png')}
              />
            )
          }}
        />

      </Tabs.Navigator>
    </NavigationContainer>
  );
}

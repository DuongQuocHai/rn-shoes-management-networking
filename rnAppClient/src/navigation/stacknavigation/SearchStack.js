import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import SearchScreen from '../../screens/SearchScreen';

const SearchStack = createStackNavigator();

const SearchStackScreen = () => (
    <SearchStack.Navigator
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#78e08f', borderBottomRightRadius: 5,
             borderBottomLeftRadius: 5,
             }
        }}>
        <SearchStack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }}/>

    </SearchStack.Navigator>
);

export default SearchStackScreen;
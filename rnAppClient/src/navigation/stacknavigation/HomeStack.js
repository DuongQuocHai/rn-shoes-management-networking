import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import Header from '../../components/header/HeaderHome';
import HomeScreen from '../../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#78e08f', borderBottomRightRadius: 5,
             borderBottomLeftRadius: 5,
             }
        }}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}
            options={({ navigation }) => ({
                headerTitle: () => <Header title='GameZone' navigation={navigation} />
            })}

        />
    </HomeStack.Navigator>
);

export default HomeStackScreen;
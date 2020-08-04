import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Feather'

import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#f0edf6"
        barStyle={{ backgroundColor: '#694fad' }}
    >
        <Tab.Screen
            name="HomeScreen"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor:'#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="DetailsScreen"
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Updates',
                tabBarColor:'#2980b9',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor:'#27ae60',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor:'#e67e22',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold',
        }
    }}>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}
            options={({ navigation }) => ({
                title: 'Overview',
                headerLeft: () => (
                    <Icon.Button
                        name='menu'
                        size={25}
                        backgroundColor='#009387'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            })}
        />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#2980b9'
        },
        headerTintColor: '#fff',
        headerTintStyle: {
            fontWeight: 'bold',
        }

    }}>
        <DetailsStack.Screen name="DetailsScreen" component={DetailsScreen}
            options={({ navigation }) => ({
                headerLeft: () => (
                    <Icon.Button
                        name='menu'
                        size={25}
                        backgroundColor='#2980b9'
                        onPress={() => navigation.openDrawer()}
                    />
                )
            })} />
    </DetailsStack.Navigator>
);
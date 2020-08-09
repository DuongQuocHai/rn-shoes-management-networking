import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'
import HomeStackScreen from './stacknavigation/HomeStack'
import HistoryStackScreen from './stacknavigation/HistoryStack'
import SearchStackScreen from './stacknavigation/SearchStack'


// const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="MainTabScreen"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#10ac84' }}
    >
        <Tab.Screen
            name="HomeStack"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                // tabBarColor: '#00C27F',
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="SearchStack"
            component={SearchStackScreen}
            options={{
                tabBarLabel: 'Search',
                // tabBarColor: '#2980b9',
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="search" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="HistoryStack"
            component={HistoryStackScreen}
            options={{
                tabBarLabel: 'History',
                // tabBarColor: '#27ae60',
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="history" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                // tabBarColor: '#e67e22',
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="user" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)

export default MainTabScreen;

// const HomeStackScreen = ({ navigation }) => (
//     <HomeStack.Navigator
//     screenOptions={{
//         headerStyle: {
//             backgroundColor: '#009387'
//         },
//         headerTintColor: '#fff',
//         headerTintStyle: {
//             fontWeight: 'bold',
//         }
//     }}
//     >
//         <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}
//         options={({ navigation }) => ({
//             title: 'Overview',
//             headerLeft: () => (
//                 <Icon.Button
//                     name='menu'
//                     size={25}
//                     backgroundColor='#009387'
//                     onPress={() => navigation.openDrawer()}
//                 />
//             )
//         })}

//         />
//     </HomeStack.Navigator>
// );

const DetailsStackScreen = ({ navigation }) => (
    <DetailsStack.Navigator
    // screenOptions={{
    //     headerStyle: {
    //         backgroundColor: '#2980b9'
    //     },
    //     headerTintColor: '#fff',
    //     headerTintStyle: {
    //         fontWeight: 'bold',
    //     }

    // }}
    >
        <DetailsStack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }}
        // options={({ navigation }) => ({
        //     headerLeft: () => (
        //         <Icon.Button
        //             name='menu'
        //             size={25}
        //             backgroundColor='#2980b9'
        //             onPress={() => navigation.openDrawer()}
        //         />
        //     )
        // })} 
        />
    </DetailsStack.Navigator>
);
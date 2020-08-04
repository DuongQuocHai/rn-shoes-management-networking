import React from 'react';
import 'react-native-gesture-handler';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather'


import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreens = ({ navigation }) => (
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

const DetailsStackScreens = ({ navigation }) => (
    <DetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
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
                    backgroundColor='#009387'
                    onPress={() => navigation.openDrawer()}
                />
            )
        })}/>
    </DetailsStack.Navigator>
);
const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="HomeScreen">
                <Drawer.Screen name="HomeScreen" component={HomeStackScreens} />
                <Drawer.Screen name="DetailsScreen" component={DetailsStackScreens} />
            </Drawer.Navigator>

        </NavigationContainer>
    )
}
export default App;
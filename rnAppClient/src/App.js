import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './navigation/MainTabScreen'
import { DrawerContent } from './components/DrawerContent'
import HistoryScreen from './screens/HistoryScreen'
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import RootStackScreen from './navigation/RootStackScreen'
import { AuthContext } from './components/AuthContext'

const Drawer = createDrawerNavigator();

const App = () => {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null)
    const initialLoginState = {
        isLoading: true,
        dataUser: null,
        userToken: null,
    };
    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    dataUser: action.data,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    dataUser: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    dataUser: action.data,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };
    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    const authContext = React.useMemo(() => ({
        signIn: async (foundUser) => {
            // setUserToken('fgaks');
            // setIsLoading(false);
            const userToken = String(foundUser._id);
            const stringDataUser = JSON.stringify(foundUser);
            console.log('dataUser---------', stringDataUser);
            // console.log(foundUser)
            try {
                await AsyncStorage.setItem('dataUser', stringDataUser)
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGIN', data: foundUser, token: userToken })
        },
        signOut: async () => {
            // setUserToken(null);
            // setIsLoading(false);
            try {
                await AsyncStorage.removeItem('dataUser')
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' })
        },
        signUp: () => {
            // setUserToken('fgaks');
            // setIsLoading(false);
        }
    }));

    useEffect(() => {
        setTimeout(async () => {
            // setIsLoading(false);
            let userToken;
            userToken = null;
            try {
                const stringDataUser = await AsyncStorage.getItem('dataUser');
                const jsonDataUser = JSON.parse(stringDataUser)
                console.log('++++++', jsonDataUser);
                if (jsonDataUser !== null) {
                    userToken = jsonDataUser._id
                }
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
        }, 2000)
    }, []);

    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.userToken !== null ? (
                    <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
                        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                        <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
                    </Drawer.Navigator>
                ) :
                    <RootStackScreen />
                }
            </NavigationContainer >
        </AuthContext.Provider>
    )
}
export default App;
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
    Text,
    StatusBar
} from 'react-native';
import * as eva from '@eva-design/eva';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from "react-native-spinkit";
import * as Animatable from 'react-native-animatable';
import RootStackScreen from './navigation/RootStackScreen'
import { AuthContext } from './components/AuthContext'
import { ApplicationProvider } from '@ui-kitten/components';

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
        signIn: async (User) => {
            const userToken = String(User._id);
            const stringDataUser = JSON.stringify(User);
            try {
                await AsyncStorage.setItem('dataUser', stringDataUser)
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGIN', data: User, token: userToken })
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
        signUp: async (User) => {
            const userToken = String(User._id);
            const stringDataUser = JSON.stringify(User);
            try {
                await AsyncStorage.setItem('dataUser', stringDataUser)
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'REGISTER', data: User, token: userToken })
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00C27F' }}>
                <StatusBar backgroundColor={'#00C27F'} barStyle='light-content' />
                <Spinner isVisible={true} size={80} type={'9CubeGrid'} color={'white'} />
                <Animatable.Text
                    style={{
                        fontSize: 15,
                        color: 'white',
                        marginTop: 20
                    }}
                    animation="zoomIn" duraton="1500">Waitings ...</Animatable.Text>
            </View>
        )
    }
    return (
        <AuthContext.Provider value={authContext}>
            <ApplicationProvider {...eva} theme={eva.light}>
                <NavigationContainer>
                    {
                        loginState.userToken !== null ? (
                            <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
                                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                                <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
                            </Drawer.Navigator>
                        ) : <RootStackScreen />
                    }
                </NavigationContainer >
            </ApplicationProvider>
        </AuthContext.Provider>
    )
}
export default App;
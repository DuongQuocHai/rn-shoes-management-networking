/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import 'react-native-gesture-handler';
import SplashScreen from './src/screens/SplashScreen'
import App from './src/App'
import React, { Component } from 'react';

import {name as appName} from './app.json';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'SplashScreen' }  
        setTimeout(() => {
            this.setState({currentScreen:'App'})
        }, 3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <App />
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () => Main);

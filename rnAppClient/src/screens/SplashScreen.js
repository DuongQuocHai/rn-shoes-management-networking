import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.warpperLogo} >
                    <Image source={require('../assets/images/logo.png')} style={styles.logo}></Image>
                    <Text style={styles.sologan}> Be healthier everyday </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    warpperLogo: {
        alignItems: 'center',
        position: 'relative'
    },
    logo: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: -250
    },
    sologan: {
        color: '#2c3e50',
        fontSize: 15,
    }
});

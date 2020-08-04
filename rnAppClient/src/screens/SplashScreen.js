import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';



const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignInScreen');
        }, 3000)
    });
    return (
        <ImageBackground source={require('../assets/images/bg.png')} style={styles.container}>
            <View
                style={styles.warpperLogo} >
                <Animatable.Image
                    animation="fadeInUp"
                    duraton="1500"
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch" />
                <Animatable.Text animation="fadeIn"
                    duraton="1500" style={styles.sologan}> Be healthier everyday </Animatable.Text>
            </View>
        </ImageBackground>
    )
}
export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    warpperLogo: {
        alignItems: 'center',
        position: 'relative'
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -150
    },
    sologan: {
        color: 'white',
        fontSize: 15,
    }
});



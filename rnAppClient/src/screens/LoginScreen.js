import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import TopTitle from '../components/SignInSignUp/TopTitle'
import Button from '../components/SignInSignUp/Button'
import styles from '../themes/SignInSignUp/style'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _goToHomeScreen = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <TopTitle
                    title='Đăng nhập' />
                <TextInput style={styles.input}
                    placeholderTextColor='#778ca3'
                    placeholder='Tên đăng nhập'
                    keyboardType='name-phone-pad'
                    returnKeyType='next'
                    onChangeText={this.onChangePhone}
                    maxLength={10}
                    autoCorrect={false}
                />
                <TextInput style={styles.input}
                    placeholderTextColor='#778ca3'
                    placeholder='Mật khẩu'
                    keyboardType='number-pad'
                    returnKeyType='go'
                    onChangeText={this.onChangePhone}
                    maxLength={10}
                    autoCorrect={false}
                />
                <Button text='đăng nhập' onPressBtn={() => this._goToHomeScreen()} />
                <TouchableOpacity>
                    <Text style={styles.txtRegis}>Đăng kí</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


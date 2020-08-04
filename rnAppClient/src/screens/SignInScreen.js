import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import styles from '../themes/SignInSignUp/styles'
import { signIn } from '../sever/users/sever'






const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    phone: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChanged = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        phone: val,
        check_textInputChange: true,
      })
    } else {
      setData({
        ...data,
        phone: val,
        check_textInputChange: false,
      })
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.container}>
      <StatusBar backgroundColor={'#00C27F'} barStyle='light-content' />
      <Animatable.View
        animation="fadeIn"
        style={styles.header}>
        <Text style={styles.text_header}>
          Login
        </Text>
      </Animatable.View>
      <Animatable.View
        animation="slideInUp"
        style={styles.footer}>
        <Text style={styles.text_footer}>Phone</Text>
        <View style={styles.action}>
          <Feather
            name="phone"
            color={'#05375a'}
            size={20}
          />
          <TextInput
            placeholder="Your Phone"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            maxLength={10}
            keyboardType='numeric'
            returnKeyType='next'
            onChangeText={(val) => textInputChanged(val)}
            style={styles.textInput}
          />
          {data.check_textInputChange ?
            <Animatable.View
              animation='bounceIn'
            >
              <Feather
                name="check-circle"
                color="green"
                size={20}
              />
            </Animatable.View>
            : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color={'#05375a'}
            size={20}
          />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            maxLength={6}
            keyboardType='numeric'
            style={styles.textInput}
          />
          <TouchableOpacity onPress={() => updateSecureTextEntry()}>
            {data.secureTextEntry ?
              <Feather
                name="eye-off"
                color="grey"
                size={20}
              /> :
              <Feather
                name="eye"
                color="grey"
                size={20}
              />
            }
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient
            colors={['#13C684', '#00C27F']}
            style={styles.signIn}
            onPress={() => signIn()}
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>
              Sign In
            </Text>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => signIn()}
            // onPress={() => navigation.navigate('SignUpScreen')}
            style={[styles.signIn, {
              borderColor: '#00C27F',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, { color: '#00C27F' }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ImageBackground>
  );
}
export default SignInScreen;




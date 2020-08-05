import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ImageBackground,
  TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import styles from '../themes/SignInSignUp/styles'

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    phone: '',
    password: '',
    secureTextEntryPass: true,
    secureTextEntryConfirmPass: true,
    check_txtNameChange: false,
    check_txtPhoneChange: false,
    isValidPhone: true,
    isValidPassword: true,
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
      <Animatable.View animation="fadeIn" style={styles.header}>
        <Text style={styles.text_header}>
          Register
        </Text>
      </Animatable.View>
      <Animatable.View animation="slideInUp" style={styles.footer}>
        <Text style={styles.text_footer}>Full Name</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color={'#05375a'}
            size={20}
          />
          <TextInput
            placeholder="Your Name"
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

        <Text style={[styles.text_footer, { marginTop: 20 }]}>Phone</Text>
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
        {
          data.isValidPhone ? null :
            <Animatable.View animation="fadeInLeft" >
              <Text style={styles.errorMsg}>Password must be 10 characters long</Text>
            </Animatable.View>
        }
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
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
        {
          data.isValidPassword ? null :
            <Animatable.View animation="fadeInLeft" >
              <Text style={styles.errorMsg}>Password must be 10 characters long</Text>
            </Animatable.View>
        }
        <Text style={[styles.text_footer, { marginTop: 20 }]}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather
            name="lock"
            color={'#05375a'}
            size={20}
          />
          <TextInput
            placeholder="Confirm Your Password"
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
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>
              Sign Up
            </Text>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => navigation.replace('SignInScreen')}
            style={[styles.signIn, {
              borderColor: '#00C27F',
              borderWidth: 1,
              marginTop: 15
            }]}
          >
            <Text style={[styles.textSign, { color: '#00C27F' }]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ImageBackground>
  );
}
export default SignUpScreen;

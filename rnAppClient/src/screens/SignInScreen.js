import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ImageBackground,
  Alert,
  ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import styles from '../themes/SignInSignUp/styles'
import { AuthContext } from '../components/AuthContext'

import { signInDb } from '../sever/users/sever'

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    phone: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidPhone: true,
    isValidPassword: true
  });

  const [animating, setAnimating] = React.useState(false);


  const { signIn } = React.useContext(AuthContext)
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  const changeTxtPhone = (val) => {
    if (val.trim().length === 10) {
      setData({
        ...data,
        phone: val,
        check_textInputChange: true,
        isValidPhone: true
      })
    } else {
      setData({
        ...data,
        phone: val,
        check_textInputChange: false,
      })
    }
  }
  const changeTxtPass = (val) => {
    setData({
      ...data,
      password: val,
      isValidPassword: true
    });
    if (val === 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      })
    }
  }

  const checkValidPhone = (phone) => {
    if (phone.trim().length === 10) {
      setData({
        ...data,
        isValidPhone: true
      })
      return true
    } else if (phone.trim().length < 10) {
      setData({
        ...data,
        isValidPhone: false
      })
      return false
    }
  }
  const checkValidPass = (password) => {
    if (password.trim().length === 6) {
      setData({
        ...data,
        isValidPassword: true
      })
      return true
    } else if (password.trim().length < 6) {
      setData({
        ...data,
        isValidPassword: false
      })
      return false
    }
  }

  const loginHandle = async (phone, password) => {
    if (checkValidPhone(phone) && checkValidPass(password)) {
      setAnimating(true)
      console.log('haha')
      const user = await signInDb(phone, password);
      console.log(user);
      if(user) {
        signIn(user);
        setAnimating(false)
      }else { 
        setAnimating(false)
        Alert.alert('Invalid User!', 'Username or password is incorrect.', [
          { text: 'Okay' }
        ]);
      }
    } else { console.log('huhu') }
  }

  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.container}>
      <StatusBar backgroundColor={'#00C27F'} barStyle='light-content' />
      <ActivityIndicator animating={animating} size="large" color="#00ff00" />
      <Animatable.View animation="fadeIn" style={styles.header}>
        <Text style={styles.text_header}>
          Login
        </Text>
      </Animatable.View>
      <Animatable.View animation="slideInUp" style={styles.footer}>
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
            // onEndEditing={(val) => handleValidPhone(val.nativeEvent.text)}
            onChangeText={(val) => changeTxtPhone(val)}
            style={styles.textInput}
          />
          {
            data.check_textInputChange ?
              <Animatable.View animation='bounceIn' >
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
              : null
          }
        </View>
        {
          data.isValidPhone ? null :
            <Animatable.View animation="fadeInLeft" >
              <Text style={styles.errorMsg}>Phone must be 10 characters long</Text>
            </Animatable.View>
        }
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
            onChangeText={(val) => changeTxtPass(val)}
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
              <Text style={styles.errorMsg}>Password must be 6 characters long</Text>
            </Animatable.View>
        }
        <TouchableOpacity>
          <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity disabled={false} style={styles.signIn}
            // onPress={() => { loginHandle(data.phone, data.password) }} 
            onPress={() => loginHandle(data.phone, data.password)}
          >
            <LinearGradient colors={['#13C684', '#00C27F']} style={styles.signIn} >
              <Text style={[styles.textSign, { color: '#fff' }]}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={[styles.signIn, {
            borderColor: '#00C27F', borderWidth: 1, marginTop: 15
          }]} >
            <Text style={[styles.textSign, { color: '#00C27F' }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </ImageBackground>
  );
}
export default SignInScreen;




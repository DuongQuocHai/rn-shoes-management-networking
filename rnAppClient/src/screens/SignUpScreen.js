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
  TextInput,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import styles from '../themes/SignInSignUp/styles'
import { AuthContext } from '../components/AuthContext'
import { checkPhoneExist, signUpDb } from '../sever/users/sever'


const SignUpScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    name: '',
    phone: '',
    password: '',
    confirmPass: '',
    secureTextEntryPass: true,
    secureTextEntryConfirmPass: true,
    check_txtNameChanged: false,
    check_txtPhoneChanged: false,
    isValidName: true,
    isValidPhone: true,
    isValidPassword: true,
  });



  const textInputNameChanged = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        name: val,
        check_txtNameChanged: true,
        isValidName: true
      })
    } else {
      setData({
        ...data,
        name: val,
        check_txtNameChanged: false,
      })
    }
  }

  const textInputPhoneChanged = (val) => {
    if (val.length === 10) {
      setData({
        ...data,
        phone: val,
        check_txtPhoneChanged: true,
        isValidPhone: true
      })
    } else {
      setData({
        ...data,
        phone: val,
        check_txtPhoneChanged: false,
      })
    }
  }
  const textInputPassChanged = (val) => {
    setData({
      ...data,
      password: val,
    })
    if (val === 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      })
    }
  }

  const textInputConfirmPassChanged = (val) => {
    setData({
      ...data,
      confirmPass: val,
    })
  }

  const updateSecureTextEntryPass = () => {
    setData({
      ...data,
      secureTextEntryPass: !data.secureTextEntryPass,
    })
  }

  const updateSecureTextEntryConfirmPass = () => {
    setData({
      ...data,
      secureTextEntryConfirmPass: !data.secureTextEntryConfirmPass,
    })
  }

  const checkValidName = () => {
    console.log(data.name.trim());
    if (data.name.trim() !== '') {
      setData({
        ...data,
        isValidName: true
      })
      return true
    } else {
      setData({
        ...data,
        isValidName: false
      })
      return false
    }
  }

  const checkValidPhone = () => {
    if (data.phone.trim().length === 10) {
      setData({
        ...data,
        isValidPhone: true
      })
      return true
    } else if (data.phone.trim().length < 10) {
      setData({
        ...data,
        isValidPhone: false
      })
      return false
    }
  }
  const checkValidPass = () => {
    if (data.password.trim().length === 6) {
      setData({
        ...data,
        isValidPassword: true
      })
      return true
    } else if (data.password.trim().length < 6) {
      setData({
        ...data,
        isValidPassword: false
      })
      return false
    }
  }

  const checkConfirmPass = () => {
    if (data.password.trim() === data.confirmPass.trim()) {
      return true
    } else {
      alert('Password does not match')
      return false
    }
  }
  const { signUp } = React.useContext(AuthContext)
  const handleResgister = async (user) => {
    if (checkValidName() && checkValidPhone() && checkValidPass() && checkConfirmPass()) {
      const resultPhoneExist = await checkPhoneExist(user.phone)
      if (resultPhoneExist.status === 200) {
        const resultSignUp = await signUpDb(user);
        console.log(resultSignUp);
        if (resultSignUp.status === 200) {
          signUp(resultSignUp)
        }else alert('Đăng ký thất bại')
      } else {
        alert(resultPhoneExist.message)
      }
    }
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
            returnKeyType='next'
            onChangeText={(val) => textInputNameChanged(val)}
            style={styles.textInput}
          />
          {data.check_txtNameChanged ?
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
          data.isValidName ? null :
            <Animatable.View animation="fadeInLeft" >
              <Text style={styles.errorMsg}>Name can't be empty</Text>
            </Animatable.View>
        }
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
            onChangeText={(val) => textInputPhoneChanged(val)}
            style={styles.textInput}
          />
          {data.check_txtPhoneChanged ?
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
              <Text style={styles.errorMsg}>Phone must be 6 characters long</Text>
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
            secureTextEntry={data.secureTextEntryPass ? true : false}
            maxLength={6}
            keyboardType='numeric'
            onChangeText={(val) => textInputPassChanged(val)}
            style={styles.textInput}
          />
          <TouchableOpacity onPress={() => updateSecureTextEntryPass()}>
            {data.secureTextEntryPass ?
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
            secureTextEntry={data.secureTextEntryConfirmPass ? true : false}
            maxLength={6}
            keyboardType='numeric'
            onChangeText={(val) => textInputConfirmPassChanged(val)}
            style={styles.textInput}
          />
          <TouchableOpacity onPress={() => updateSecureTextEntryConfirmPass()}>
            {data.secureTextEntryConfirmPass ?
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
          <TouchableOpacity
            onPress={() => handleResgister(data)}
            style={styles.signIn}>

            <LinearGradient
              colors={['#13C684', '#00C27F']}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: '#fff' }]}>
                Sign Up
            </Text>
            </LinearGradient>
          </TouchableOpacity>
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

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, Image, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../components/AuthContext';

const color = '#16a085'


const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({});
  const getUser = async () => {
    const stringDataUser = await AsyncStorage.getItem('dataUser');
    const jsonDataUser = JSON.parse(stringDataUser)
    console.log(jsonDataUser.data);
    return setUser(jsonDataUser.data)
  }
  useEffect(() => {
    getUser()
  }, []);

  const itemRecord = (iconName, text) => {
    return (
      <TouchableOpacity style={styles.itemRecord}>
        <Ionicons style={{ width: '10%' }} color={color} size={25} name={iconName} />
        <View style={styles.right}>
          <Text style={styles.txtRecord}>{text}</Text>
          <MaterialIcons color={color} size={25} name={"navigate-next"} />
        </View>
      </TouchableOpacity>
    );
  }
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.warpperTabBar}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Tài khoản</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.warpperInfoUser}>
          <View style={styles.warpperImg}>
            <Image resizeMode='contain' style={styles.imgUser} source={{ uri: user.urlAvatar ? user.urlAvatar : 'https://i2.wp.com/wp.laravel-news.com/wp-content/uploads/2018/03/avatar-images-spatie.png?resize=2200%2C1125' }} />
          </View>
          <View style={styles.warpperTxt}>
            <Text style={{
              fontSize: 20,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              color: '#7f8c8d'
            }}>
              {user.name}
            </Text>
            <Text style={{ fontSize: 15, marginTop: 10, color: '#7f8c8d' }}>{user.phone}</Text>
          </View>
        </View>
        <View style={styles.warpperBody}>
          <Text style={styles.title}>ACCOUNT</Text>
          {itemRecord('albums-outline', 'Track order')}
          {itemRecord('barcode-outline', 'Track your loan')}
          {itemRecord('browsers-outline', 'Receipt information')}
          <Text style={styles.title}>SHARE ACCOUNT</Text>
          {itemRecord('logo-facebook', 'Facebook')}
          {itemRecord('logo-instagram', 'Instagram')}
          {itemRecord('logo-twitter', 'twitter')}
          <Text style={styles.title}>SUPORT</Text>
          {itemRecord('key-outline', 'Change Password')}
          {itemRecord('information-circle-outline', 'Support center')}
          {itemRecord('document-text-outline', 'Operation regulation')}
          {itemRecord('information-outline', 'About us')}


        </View>
        <TouchableOpacity
          onPress={() => { signOut() }}
          style={[styles.itemRecord, {marbottom:20}]}>
          <Ionicons style={{ width: '10%' }} color={color} size={25} name='log-out-outline' />
          <View style={styles.right}>
            <Text style={[styles.txtRecord, { fontWeight: 'bold', fontSize: 18 }]}>Sign out</Text>
            <MaterialIcons color={color} size={28} name={"navigate-next"} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  warpperTabBar: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 9999,
    backgroundColor: '#78e08f',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warpperInfoUser: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 50
  },
  warpperImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden'
  },
  imgUser: {
    width: '100%',
    height: '100%'
  },
  warpperTxt: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  warpperBody: {
    paddingHorizontal: 10,
    paddingTop: 10
  },
  itemRecord: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#95a5a6',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%'
  },
  txtRecord: {
    color: '#27ae60',
    fontSize: 15,
    textAlign: "left",
    width: '90%',
  },
  title: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  btnLogout: {
    width: '100%',
    backgroundColor: '#e74c3c',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  }

});



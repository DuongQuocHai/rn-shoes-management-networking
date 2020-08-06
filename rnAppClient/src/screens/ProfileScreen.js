import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

import AlertNotification from '../utils/alert/AlertNotification'



const ProfileScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <AlertNotification />
      

    </View>
  )
}
export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});



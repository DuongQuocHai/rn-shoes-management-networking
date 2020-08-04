import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
      <Button
        title="Drawer"
        onPress={() => navigation.openDrawer()}
      />
      <Icon name="search" color="white" size={30} style={{ paddingLeft: 10 }} />

    </View>
  )
}
export default HomeScreen;



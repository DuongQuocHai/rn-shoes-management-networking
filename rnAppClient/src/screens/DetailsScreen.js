import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({navigation}) =>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DetailsScreen</Text>
        <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default DetailsScreen;
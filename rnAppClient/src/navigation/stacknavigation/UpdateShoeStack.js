import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UpdateShoeScreen from '../../screens/UpdateShoeScreen';


const UpdateShoeStack = createStackNavigator();

// home stack navigator screens
const UpdateShoeStackScreen = () => (
    <UpdateShoeStack.Navigator
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: {
                backgroundColor: '#78e08f', borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
            }
        }}>
        <UpdateShoeStack.Screen name="UpdateShoeScreen" component={UpdateShoeScreen}
            options={({ navigation }) => ({
                title: 'Update Shoe',
                headerLeft: () => (
                    <FontAwesome.Button
                        name='chevron-left'
                        color='black'
                        size={20}
                        backgroundColor='#78e08f'
                        onPress={() => navigation.goBack()}
                    />
                )
            })}
        />
    </UpdateShoeStack.Navigator>
);

export default UpdateShoeStackScreen;
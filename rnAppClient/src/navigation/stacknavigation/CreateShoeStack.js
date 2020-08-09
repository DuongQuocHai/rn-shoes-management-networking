import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import CreateShoeScreen from '../../screens/CreateShoeScreen';

const CreateShoeStack = createStackNavigator();

// home stack navigator screens
const CreateShoeStackScreen = () => (
    <CreateShoeStack.Navigator
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: {
                backgroundColor: '#78e08f', borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
            }
        }}>
        <CreateShoeStack.Screen name="CreateShoeScreen" component={CreateShoeScreen}
            options={({ navigation }) => ({
                title: 'Create Shoe',
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
    </CreateShoeStack.Navigator>
);

export default CreateShoeStackScreen;
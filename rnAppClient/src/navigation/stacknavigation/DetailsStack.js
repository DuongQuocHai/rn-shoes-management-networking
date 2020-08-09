import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import Header from '../../components/header/HeaderDetail';
import DetailsScreen from '../../screens/DetailsScreen';

const DetailsStack = createStackNavigator();

// home stack navigator screens
const DetailsStackScreen = () => (
    <DetailsStack.Navigator
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: {
                backgroundColor: '#78e08f', borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
            }
        }}>
        <DetailsStack.Screen name="DetailsScreen" component={DetailsScreen}
            options={({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation} />
            })}

        />
    </DetailsStack.Navigator>
);

export default DetailsStackScreen;
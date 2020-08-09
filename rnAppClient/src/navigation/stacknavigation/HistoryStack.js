import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import Header from '../../components/header/HeaderHome';
import HistoryScreen from '../../screens/HistoryScreen';

const HistoryStack = createStackNavigator();

// home stack navigator screens
const HistoryStackScreen = () => (
    <HistoryStack.Navigator
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: {
                backgroundColor: '#78e08f', borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
            }
        }}>
        <HistoryStack.Screen name="HomeScreen" component={HistoryScreen}
            options={({ navigation }) => ({
                headerTitle: () => <Header title='GameZone' navigation={navigation} />
            })}

        />
    </HistoryStack.Navigator>
);

export default HistoryStackScreen;
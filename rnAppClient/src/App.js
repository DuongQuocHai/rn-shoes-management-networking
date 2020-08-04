import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './navigation/MainTabScreen'
import { DrawerContent } from './components/DrawerContent'
import HistoryScreen from './screens/HistoryScreen'
import RootStackScreen from './navigation/RootStackScreen'

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <RootStackScreen />
            {/* <Drawer.Navigator drawerContent={props =><DrawerContent{...props} />}>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                <Drawer.Screen name="HistoryScreen" component={HistoryScreen} />
            </Drawer.Navigator> */}
        </NavigationContainer>
    )
}
export default App;
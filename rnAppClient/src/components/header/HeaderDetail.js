import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({ navigation }) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    const gotoSearch = () => {
        navigation.navigate('SearchStack');
    }
    return (
        <View style={styles.container}>
            <View style={styles.warpperTabBar}>
                <View style={styles.tabBar}>
                    <View style={styles.back}>
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <FontAwesome size={20} name={"chevron-left"} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.warpperSearch}
                        onPress={() => navigation.navigate('SearchStack')} >
                        <View style={styles.warpperTxt}>
                            <Text style={styles.txtNormal}>Search on </Text>
                            <Text style={styles.txtSpecial}>FootcerShop</Text>
                        </View>
                        <FontAwesome
                            name='search'
                            size={17}
                            color='grey'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.warpperBtnHome}
                        onPress={() => navigation.navigate('HomeDrawer')} >
                        <MaterialCommunityIcons
                            color='#2c3e50'
                            size={28}
                            name={"home-outline"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        opacity: 0.8
    },
    warpperTabBar: {
        width: "100%",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    tabBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 5,
    },
    back: {
        justifyContent: "center",
        width: '10%'
    },
    warpperSearch: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    warpperTxt: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '90%'
    },
    txtNormal: {
        color: 'grey',
        fontSize: 17
    },
    txtSpecial: {
        fontWeight: "bold",
        color: '#01a3a4',
        fontSize: 17
    },
    warpperBtnHome: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
});
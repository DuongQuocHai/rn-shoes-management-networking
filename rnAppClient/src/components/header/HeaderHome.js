import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Header({navigation }) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    const gotoSearch = () => {
        navigation.navigate('SearchStack');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.buger}>
                    <TouchableOpacity onPress={openMenu}>
                        <FontAwesome size={22} name={"bars"} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.warpperSearch} onPress={gotoSearch}>
                    <View style={styles.warpperTxt}>
                        <Text style={styles.txtNormal}>Search on </Text>
                        <Text style={styles.txtSpecial}>FootcerShop</Text>
                    </View>
                </TouchableOpacity>
                <FontAwesome
                    name='search'
                    size={20}
                    color='grey'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical:5,
        paddingHorizontal: 5,
        borderRadius:5,
        opacity:0.8
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "green",
        justifyContent: "space-between",
    },
    buger: {
        justifyContent: "center",
        width: '10%',
        height: '100%',
    },
    warpperSearch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flex: 1
    },
    warpperTxt: {
        flexDirection: "row"
    },
    txtNormal: {
        color: 'grey',
        fontSize: 17
    },
    txtSpecial: {
        fontWeight: "bold",
        color: '#01a3a4',
        fontSize: 17
    }
});
import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Buton extends Component {
    render() {
        const {text,onPressBtn} = this.props;
        return (
            <TouchableOpacity style={styles.btn} onPress={onPressBtn}>
                <Text style={styles.textBtn}>{text}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        paddingVertical:15,
        backgroundColor:'#7f8c8d',
        width:'90%',
        alignItems:'center',
        color:'white',
        borderRadius: 30,
    },
    textBtn:{
        color:'#ecf0f1',
        fontSize:20,
        fontWeight:'bold',
        textTransform:'uppercase'
    }
});
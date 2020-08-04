import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TopTitle extends Component {

    render() {
        const { title, sub1Title, sub2Title } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width:'90%',
        marginBottom:50
    },
    title: {
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10
    },
  
});
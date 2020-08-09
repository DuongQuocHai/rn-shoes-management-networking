import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';



const FloatingButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Entypo color={'white'} size={25} name='plus' />
        </TouchableOpacity>
    );
}

export default FloatingButton;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#1abc9c',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

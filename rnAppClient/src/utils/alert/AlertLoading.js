//src/Utils/UI/Alert/Alert.js
import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { Button, Card, Modal, Textner } from '@ui-kitten/components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import Spinner from "react-native-spinkit";


export default ({ visible, text }) => {
    return (
        <View style={styles.container}>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}>
                <Card disabled={true} style={styles.container}>
                    <View style={styles.content}>
                        <Spinner isVisible={true} size={30} type={'Bounce'} color={'#00C27F'} />
                        <Text style={styles.text}>Loading</Text>
                    </View>
                </Card>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        maxWidth: 300,
        borderRadius: 10
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 20,
        color: '#05375a',
        fontSize: 18
    }
});
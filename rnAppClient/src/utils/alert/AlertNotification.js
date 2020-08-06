import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Modal } from '@ui-kitten/components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import Spinner from "react-native-spinkit";


export default class AlertNotification extends Component {
    render() {
        const { visible, status, text } = this.props;
        return (
            <View style={styles.container}>
                <Modal
                    visible={visible}
                    backdropStyle={styles.backdrop}>
                    <Card disabled={true} style={styles.container}>
                        {(() => {
                            if (status === 0) {
                                return (
                                    <View style={styles.content}>
                                        <Animatable.View animation="zoomIn" >
                                            <AntDesign
                                                name="exclamationcircle"
                                                color={'#e74c3c'}
                                                size={30}
                                            />
                                        </Animatable.View>
                                        <Text style={styles.text}>{text}</Text>
                                    </View>
                                )
                            } if (status === 1) {
                                return (
                                    <View style={styles.content}>
                                        <Animatable.View animation="zoomIn" >
                                            <AntDesign
                                                name="checkcircle"
                                                color={'#00C27F'}
                                                size={30}
                                            />
                                        </Animatable.View>
                                        <Text style={styles.text}>{text}</Text>
                                    </View>
                                )
                            } else
                                return (
                                    <View style={styles.content}>
                                        <Spinner isVisible={true} size={30} type={'Bounce'} color={'#00C27F'} />
                                        <Text style={styles.text}>Loading</Text>
                                    </View>
                                );
                        })()}
                    </Card>
                </Modal>
            </View>
        );
    }
}
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

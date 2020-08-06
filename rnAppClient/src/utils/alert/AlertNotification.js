//src/Utils/UI/Alert/Alert.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

export default () => {

    const [visible, setVisible] = React.useState(false);

    return (
        <View style={styles.container}>

            <Button onPress={() => setVisible(true)}>
                TOGGLE MODAL
      </Button>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card disabled={true} style={styles.container}>
                    <Text>My awesome alert</Text>
                    <Button onPress={() => setVisible(false)} style={styles.button}>
                        DISMISS
        </Button>
                </Card>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    button: {
        marginTop: 16
    }
});
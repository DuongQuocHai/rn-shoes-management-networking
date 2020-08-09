import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Image,
    Text,
    Dimensions,
    Button,
    TextInput,
    ToastAndroid
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { Input, Layout } from '@ui-kitten/components';
import Feather from 'react-native-vector-icons/Feather';
import { detailShoe, updateShoe, randomIamge } from '../sever/shoes/sever'

const UpdateShoeScreen = ({ navigation, route }) => {
    const [dataShoe, setDataShoe] = useState(route.params.data);
    // const setData = async () => {
    //     const idShoe = route.params.idProduct;
    //     console.log(idShoe)
    //     const res = await detailShoe(idShoe);
    //     if (res) {
    //         console.log(res.data)
    //         return setDataShoe(res.data);
    //     } else {
    //         alert('Failed')
    //     }
    // }
    console.log("dataShoe", dataShoe)
    console.log("route.params.data: ", route.params)

    const _randomImage = async () => {
        const res = await randomIamge();
        if (res) {
            setDataShoe({
                ...dataShoe,
                images: res.urls.full
            })
        } else {
            return (
                ToastAndroid.showWithGravity(
                    'Reload image failed',
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                )
            );
        }
    }

    const _updateShoe = async (data) => {
        const res = await updateShoe(data);
        console.log(res);
        if (res.status === 200) {
            ToastAndroid.showWithGravity(
                res.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
            navigation.goBack();
        } else {
            alert('huhu')
        }
    }

    useEffect(() => {
        setDataShoe(route.params.data)
    }, [route.params.data])
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View>
                        <View style={styles.header}>
                            <Image
                                source={{ uri: dataShoe.images }}
                                resizeMode='cover'
                                style={{ width: '100%', height: '100%' }}
                            />
                            <View style={styles.warpperBtnIcon}>
                                <TouchableOpacity
                                    onPress={() => _randomImage()}
                                    style={styles.btnIcon} >
                                    <Entypo color={'#2f3542'} size={25} name='edit' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.warpperBody}>
                            <Text style={styles.text_footer}>Name</Text>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="Shoe name"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    keyboardType='default'
                                    returnKeyType='next'
                                    value={dataShoe.name + ""}
                                    onChangeText={(val) => setDataShoe({
                                        ...dataShoe,
                                        name: val
                                    })}
                                    style={styles.textInput}
                                />
                            </View>
                            <Text style={[styles.text_footer, { marginTop: 20 }]}>Price</Text>
                            <View style={styles.action}>

                                <TextInput
                                    placeholder="Shoe price"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    keyboardType='numeric'
                                    returnKeyType='next'
                                    value={dataShoe.price + ""}
                                    style={styles.textInput}
                                    onChangeText={(val) => setDataShoe({
                                        ...dataShoe,
                                        price: val
                                    })}
                                // onChangeText={(val) => changeTxtPhone(val)}

                                />
                            </View>
                            <Text style={[styles.text_footer, { marginTop: 20 }]}>Promotional price</Text>
                            <View style={styles.action}>

                                <TextInput
                                    placeholder="Promotional shoe prices"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    keyboardType='numeric'
                                    returnKeyType='next'
                                    value={dataShoe.price_promotion + ""}
                                    onChangeText={(val) => setDataShoe({
                                        ...dataShoe,
                                        price_promotion: val
                                    })}
                                    // onChangeText={(val) => changeTxtPhone(val)}
                                    style={styles.textInput}

                                />
                            </View>
                            <Text style={[styles.text_footer, { marginTop: 20 }]}>Description</Text>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="Shoe description"
                                    placeholderTextColor="#666666"
                                    autoCapitalize="none"
                                    keyboardType='default'
                                    returnKeyType='next'
                                    value={dataShoe.description + ""}
                                    multiline={true}
                                    onChangeText={(val) => setDataShoe({
                                        ...dataShoe,
                                        description: val
                                    })}
                                    // onChangeText={(val) => changeTxtPhone(val)}
                                    style={[styles.textInput, { height: 150 }]}

                                />
                            </View>
                            <TouchableOpacity disabled={false} style={styles.signIn}
                                onPress={() => _updateShoe(dataShoe)}
                            >
                                <LinearGradient colors={['#13C684', '#00C27F']} style={styles.signIn} >
                                    <Text style={[styles.textSign, { color: '#fff' }]}>
                                        Update
                                </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView >
        </View>
    );
}

export default UpdateShoeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    warpperBody: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    header: {
        width: Dimensions.get('window').width,
        height: 230,
        position: 'relative'
    },
    warpperBtnIcon: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        flexDirection: 'row'
    },
    btnIcon: {
        backgroundColor: '#f1f2f6',
        marginLeft: 10,
        borderRadius: 5,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        backgroundColor: '#fff',
        fontSize: 15
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

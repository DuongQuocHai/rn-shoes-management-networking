import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { Image } from 'react-native-elements';
import NumberFormat from 'react-number-format';

export default class ItemFlashSale extends Component {

    render() {
        const { data: { name,  price, images, price_promotion } } = this.props;
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.cardContainer}
            >
                <View style={styles.imgCardProduct}>

                    <Image containerStyle={styles.img}
                        source={{ uri: images }}
                        resizeMode="cover"
                    />

                </View >
                <View style={styles.NameProduct}>
                    <Text style={styles.txtNameProduct} numberOfLines={2}>{name}</Text>
                </View>
                <View style={styles.Price}>
                    <NumberFormat
                        value={price_promotion}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={value => <Text
                            style={styles.txtOldPrice}
                            numberOfLines={1}>
                            {value} đ
                                </Text>
                        }
                    />
                    <NumberFormat
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={value => <Text
                            style={styles.txtPrice}
                            numberOfLines={1}>
                            {value} đ
                                </Text>
                        }
                    />
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    cardContainer: {
        width: 130,
        margin: 5,
        borderRadius: 5,
        borderColor: '#ecf0f1',
        backgroundColor: '#fff',
        borderWidth: 2,
        padding: 5,

    },
    imgCardProduct: {
        height: 120,
        borderRadius: 5,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    NameProduct: {
        minHeight: 40,
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center'
    },
    txtNameProduct: {
        color: 'black',
        fontWeight: "bold",
        flexWrap: "wrap",
        fontSize: 15,
        textAlign:'center'
    },
    Price: {
        minHeight:40,
        justifyContent:'center',
        alignItems:'center'
    },

    txtOldPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 13,
        color: '#a4b0be'
    },
    txtPrice: {
        color: '#e10100',
        fontSize: 16,
    }

}); 

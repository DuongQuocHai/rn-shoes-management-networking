import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Image } from 'react-native-elements';
import { Rating } from 'react-native-elements';
import NumberFormat from 'react-number-format';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class ItemProduct extends Component {
    constructor(props) {
        super(props);
        this.randomFree = Math.floor(Math.random() * 3);
    }

    render() {
        const { data: { name, shop_info, price, order_count, images, rating, total_rated, price_promotion } } = this.props;
        // const percent_number = rating_info ? rating_info.percent_number : 100;
        // const rating = percent_number / 100 * 5;
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.cardContainer}
                onLongPress={this.props.onLongPress}

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
                <View style={styles.wrapperPrice}>
                    <NumberFormat
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={value => <Text
                            style={styles.txtPrice}
                            numberOfLines={1}>
                            {value} $
                                </Text>
                        }
                    />
                    <NumberFormat
                        value={price_promotion}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={value => <Text
                            style={!price_promotion ? styles.none : styles.txtOldPrice}
                            numberOfLines={1}>
                            {value} đ
                                </Text>
                        }
                    />
                </View>
                <View style={styles.wrapperRateAndOrder}>
                    <View style={styles.wrapperRating}>
                        <Rating readonly startingValue={rating} imageSize={10} type='custom' ratingColor='#e10100' />
                        <Text style={styles.txtOrderCount} numberOfLines={1}>({total_rated})</Text>
                    </View>
                    <View style={order_count != 0 ? styles.wrapperOrderCount : styles.none}>
                        <FontAwesome size={10} color='#747d8c' name={"tag"} />
                        <Text style={styles.txtOrderCount} numberOfLines={1}>{order_count}</Text>
                    </View>
                </View>

                <View style={styles.wrapperShopInfoAndShip}>
                    <View style={styles.wrapperShopInfo}>
                        {/* <FontAwesome size={15} color='#ff7f50' name={"shield"} /> */}
                        <Image style={{ width: 30, height: 15 }} source={require('../assets/images/check.png')} resizeMode="contain" />
                        <Text style={styles.txtShopName} numberOfLines={1}>{shop_info}</Text>
                    </View>
                    {/* <FontAwesome size={15} color='#2ed573' name={"truck"} /> */}
                    {!this.randomFree &&
                        <Image style={{ width: 25, height: 15 }} source={require('../assets/images/truck.png')} resizeMode="contain" />
                    }
                </View>
            </TouchableOpacity >
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        maxWidth: Dimensions.get('window').width * 0.5,
        margin: 3,
        borderRadius: 5,
        borderColor: '#ecf0f1',
        backgroundColor: '#fff',
        borderWidth: 2,
        overflow: "hidden",
        padding: 5,

    },
    imgCardProduct: {
        height: 160,
        borderRadius: 5,
        overflow: "hidden",
    },
    img: {
        width: '100%',
        height: '100%',
    },
    NameProduct: {
        minHeight: 48,
        justifyContent: 'center'
    },
    txtNameProduct: {
        color: 'black',
        flexWrap: "wrap",
        fontSize: 15,
    },
    wrapperPrice: {
        minHeight: 35,
        justifyContent: 'center'
    },
    txtPrice: {
        color: '#16a085',
        fontSize: 14,
        fontWeight: 'bold'
    },
    txtOldPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 12,
        color: '#a4b0be'
    },
    wrapperRateAndOrder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderColor: '#a4b0be',
        paddingBottom: 3,
        marginBottom: 3
    },

    txtOrderCount: {
        fontSize: 12,
        marginLeft: 3,
        color: '#747d8c'

    },
    wrapperRating: {
        flexDirection: 'row',
        alignItems: 'center'

    },

    wrapperOrderCount: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    wrapperShopInfoAndShip: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtShopName: {
        color: 'black',
        fontSize: 12,
        marginLeft: 3,
        flex: 0.9,
        color: '#747d8c'
    },
    wrapperShopInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%'
    },
    none: {
        display: 'none'
    }

}); 

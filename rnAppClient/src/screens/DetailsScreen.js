import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet, RefreshControl,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NumberFormat from 'react-number-format';


import { Image, Rating } from 'react-native-elements'
import { detailShoe } from '../sever/shoes/sever'

const DetailsScreen = ({ navigation, route }) => {
  const [shoe, setShoe] = useState(route.params.data);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState({
    rating: 0,
    colorRatingBtn: '#cdc6c6'
  });
  const [description, setDescription] = useState({
    description: null,
    colorDetailBtn: 'black',
  });
  const getData = async () => {
    setIsLoading(true);
    const idShoe = route.params.data._id;
    const res = await detailShoe(idShoe);
    if (res) {
      setIsLoading(false);
      return setShoe(res.data);
    } else {
      setIsLoading(false);
      alert('Failed')
    }
  }
  useEffect(() => {
    setShoe(route.params.data)
  }, [route.params.data]);


  const contentBtnWrapper = (colorDetailBtn, colorRatingBtn) => {
    return (
      <View style={styles.contentBtnWrapper}>
        <TouchableOpacity
          onPress={() => onPressContentBtn(0)}
          style={styles.contentBtn}
        >
          <Text style={[styles.contentBtnText, { color: colorDetailBtn }]}>Chi tiết</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressContentBtn(1)}
          style={[
            styles.contentBtn,
            { borderLeftColor: 'black', borderLeftWidth: 1, }
          ]}>
          <Text style={[styles.contentBtnText, { color: colorRatingBtn }]}>Đánh giá</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const onPressContentBtn = (israting) => {
    if (israting) {
      setRating({
        rating: israting,
        colorRatingBtn: 'black'
      })
      setDescription({
        ...description,
        colorDetailBtn: '#cdc6c6',
      })
    } else {
      setRating({
        rating: israting,
        colorRatingBtn: '#cdc6c6'
      })
      setDescription({
        ...description,
        colorDetailBtn: 'black',
      })
    }
  }

  const _content = () => {
    let content = '';
    const numRating = parseInt(shoe.rating);
    if (!rating.rating) {
      content = (
        <View style={styles.contentWrapper}>
          <Text style={styles.txtDetail}>
            {shoe.description}
          </Text>
        </View>
      );
    } else {
      content = (
        <View style={styles.contentWrapper}>
          <View style={styles.ratingText}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{shoe.rating}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f1797a' }}>/5</Text>
          </View>
          <Rating readonly startingValue={numRating} />
          <Text>({3} lượt đánh giá)</Text>
        </View>
      );
    }
    return content;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      {isLoading ?
        <ActivityIndicator animating={isLoading} color='red' />
        :
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={() => getData()} />
          }
        >
          <View style={styles.warpperBody}>
            <View style={styles.header}>
              <Image
                source={{ uri: shoe.images }}
                resizeMode='cover'
                style={{ width: '100%', height: '100%' }}
              />
              <View style={styles.warpperHeartAndBookmark}>
                <TouchableOpacity style={styles.btnIcon} >
                  <Entypo color={'#e74c3c'} size={25} name='heart' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnIcon} onPress={() => navigation.navigate('UpdateShoeStack', { screen: 'UpdateShoeScreen', params: { data: shoe } })} >
                  <MaterialIcons color={'#2f3542'} size={25} name='edit' />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.body}>
              <Text style={styles.txtNameProduct}>{shoe.name}</Text>
              <View style={styles.warpperPrice}>
                <NumberFormat
                  value={shoe.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={''}
                  renderText={value => <Text
                    style={styles.txtSalePrice}
                    numberOfLines={1}>
                    {value} đ
                        </Text>
                  }
                />
                <NumberFormat
                  value={shoe.price_promotion}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={''}
                  renderText={value => <Text
                    style={[styles.fontSize20, styles.txtOldPrice]}
                    numberOfLines={1}>
                    {value} đ
                        </Text>
                  }
                />

              </View>
              <View style={shoe.order_count != 0 ? styles.warpperOrderCount : styles.none}>
                <FontAwesome size={16} color='#747d8c' name={"tag"} />
                <Text style={styles.txtOrderCount} numberOfLines={1}>Đã bán được {shoe.order_count} sản phẩm</Text>
              </View>
              {contentBtnWrapper(description.colorDetailBtn, rating.colorRatingBtn)}
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginHorizontal: 16,
                }}
              />
              {_content()}
            </View>
          </View>
        </ScrollView >
      }
      <View style={styles.warrperFooter}>
        <TouchableOpacity style={[styles.warpperComment, styles.allFooter]}>
          <MaterialIcons size={25} color='#34495e' name={"comment"} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.warpperCard, styles.allFooter]}>
          <Text style={styles.txtCard}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.warpperBuyNow, styles.allFooter]}>
          <Text style={styles.txtBuyNow}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailsScreen;
const styles = StyleSheet.create({
  txtNameProduct: {
    marginVertical: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  warpperPrice: {
    minHeight: 40,
    marginBottom: 5,
    justifyContent: 'center',
  },
  txtSalePrice: {
    color: '#eb2f06',
    fontSize: 20,
  },
  txtOldPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 14,
    color: '#a4b0be'
  },
  warpperOrderCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  txtOrderCount: {
    fontSize: 16,
    color: '#EE5A24',
    marginLeft: 5
  },
  header: {
    width: Dimensions.get('window').width,
    height: 320,
    position: 'relative'
  },
  warpperHeartAndBookmark: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    flexDirection: 'row'
  },
  body: {
    backgroundColor: 'white',
    paddingHorizontal: 10
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
  contentBtnWrapper: {
    marginTop: 5,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 16,
    minHeight: 150,
    paddingTop: 5
  },
  txtDetail: {
    fontSize: 15
  },
  ratingText: {
    flexDirection: 'row',
    color: 'yellow',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  fontSize20: {
    fontSize: 20,
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  contentBtn: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  warrperFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    padding: 8,
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: '#bdc3c7'
  },
  allFooter: {
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warpperComment: {
    width: '15%',
    height: 40,
    backgroundColor: '#ced6e0',

  },
  warpperCard: {
    width: '50%',
    backgroundColor: '#ced6e0',
  },
  txtCard: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34495e'
  },
  warpperBuyNow: {
    width: '30%',
    backgroundColor: '#16a085',
  },
  txtBuyNow: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#bdc3c7',
    width: Dimensions.get("window").width - 20,
    marginHorizontal: 10,
    marginVertical: 10
  },
  none: {
    display: 'none'
  }
});
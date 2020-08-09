import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ToastAndroid, FlatList, StatusBar, ActivityIndicator } from 'react-native';
// import { globalStyles } from '../styles/global';
import ItemProduct from '../components/ItemProduct'
import FloatingButton from '../components/FloatingButton'
import { getShoes, deleteShoe } from '../sever/shoes/sever'

// import listShoes from '../model/dataProduct'

export default function HomeScreen({ navigation }) {
  const [listShoes, setListShoes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = React.useState(false);


  const getData = async () => {
    setIsLoading(true);
    const res = await getShoes();
    if (res) {
      setIsLoading(false);
      return setListShoes(res.data);
    } else {
      alert('Error')
    }
  }
  useEffect(() => {
    // navigation.addListener('focus', () => {
    // });
    getData()
  }, []);

  const _deleteShoe = async (idShoe) => {
    const res = await deleteShoe(idShoe);
    if (res.status === 200) {
      const newList = listShoes.filter(item => item._id !== idShoe);
      ToastAndroid.showWithGravity(
        res.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      setListShoes(newList)
    } else {
      ToastAndroid.showWithGravity(
        'Failed',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }

  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#78e08f'} barStyle='light-content' />
      {isLoading ?
        <ActivityIndicator color='#78e08f' size={30} animating={isLoading} /> :
        <View style={{ flex: 1 }}>
          <FlatList
            onRefresh={() => getData()}
            refreshing={isLoading}
            data={listShoes}
            renderItem={({ item }) => (
              <ItemProduct
                key={item._id}
                data={item}
                onPress={() => navigation.navigate('DetailsStack', { screen: 'DetailsScreen', params: { data: item } })}
                onLongPress={() => _deleteShoe(item._id)}
              />
            )}
            numColumns={2}
            style={{ flex: 1 }}
            keyExtractor={item => item._id.toString()} />
        </View>
      }
      {/* <FloatingButton onPress={() => { navigation.navigate('CreateShoeStack', { screen: 'CreateShoeScreen', params: { countAdd: setCount(count + 1)} })  /> */}
      <FloatingButton onPress={() => navigation.navigate('CreateShoeStack', { screen: 'CreateShoeScreen' })} />

    </View>
  );
}







import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, StatusBar, ActivityIndicator, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { searchShoes } from '../sever/shoes/sever'
import ItemProduct from '../components/ItemProduct'

const SearchScreen = ({ navigation }) => {
  const [txtInput, setTxtInput] = useState('');
  const [totalResults, setTotalResults] = useState('');
  const [listSearch, setListSearch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const pressSearch = async (text) => {
    setIsLoading(true);
    const res = await searchShoes(text);
    if (res && text.trim().length !== 0 ) {
      setIsLoading(false);
      setTotalResults(res.message);
      setListSearch(res.data);
    } else {
      setIsLoading(false);
      setTotalResults("");
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#78e08f'} barStyle='light-content' />
      <View style={styles.header}>
        <View style={styles.tabBar}>
          <View style={styles.back}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} >
              <FontAwesome size={22} name={'bars'} />
            </TouchableOpacity>
          </View>
          <View style={styles.warpperSearch} >
            <TextInput
              // ref={(input) => { this.searchTextInput = input; }}
              autoFocus={true}
              placeholder='Search'
              style={styles.txtSearch}
              onChangeText={(val) => setTxtInput(val)}
              // onFocus={this._onForcusInput}
              onBlur={() => pressSearch(txtInput)}
            />
            <TouchableOpacity onPress={() => pressSearch(txtInput)} >
              <FontAwesome
                name='search'
                size={17}
                color='grey'
              />
            </TouchableOpacity>
          </View>

        </View>

      </View>
      <View style={styles.warpperFill}>
        <View style={styles.nominations}>
          <FontAwesome
            name='caret-down'
            size={17}
            color='grey'
          />
          <Text>Sort</Text>
        </View>
        <View style={styles.respond}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#16a085' }}>{totalResults}</Text>
        </View>
        <View style={styles.filter}>
          <FontAwesome
            name='filter'
            size={17}
            color='grey'
          />
          <Text>Filter</Text>
        </View>
      </View>
      {isLoading ?
        <ActivityIndicator color='#78e08f' size={30} animating={isLoading} />
        :
        <FlatList data={listSearch}
          renderItem={({ item }) => (
            <ItemProduct
              key={item._id}
              data={item}
              onPress={() => navigation.navigate('DetailsStack', {idProduct: item._id})}
            />
          )}
          numColumns={2}
          style={{ flex: 1 }}
          keyExtractor={item => item._id.toString()} />
      }
    </View>
  )
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#78e08f',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    // paddingTop: Constants.statusBarHeight

  },
  tabBar: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10

  },
  back: {
    justifyContent: 'center',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7
  },
  warpperSearch: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    height: 42,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  txtSearch: {
    fontSize: 17,
    color: 'grey',
    flex: 1
  },

  warpperFill: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 10,
    borderColor: 'grey',
    backgroundColor: '#fff'

  },
  nominations: {
    flexDirection: 'row',
    borderRightWidth: 1,
    justifyContent: 'space-around',
    width: '20%',
    borderColor: "grey",
    alignItems: 'center'
  },
  filter: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    width: '20%',
    justifyContent: "space-around",
    borderColor: "grey",
    alignItems: 'center'
  },
  respond: {
    flexDirection: 'row',

  },
  // warpperReturn: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flex:1
  // },
  itemInvisible: {
    backgroundColor: 'red',

  }


});



import React, {useEffect} from 'react';
import {fetchProducts} from '../../src/redux/product/productSlice';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Text, HStack, View, Image, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const {products, status, error} = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts()).catch(error => {
        console.error('Error fetching products:', error);
      });
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.container}>
        <Text>Error fetching products: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text textTransform="uppercase" fontSize="sm" fontWeight="bold">
        All
      </Text>
      <FlatList
        data={products}
        keyExtractor={({id}) => id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Text>{item.category}</Text>
              <TouchableHighlight
                onPress={() => navigation.navigate('Detail', {product: item})}>
                <Image
                  style={styles.image}
                  source={{uri: `${item.image}`}}
                  resizeMode="contain"
                  alt=""
                />
              </TouchableHighlight>
            </View>
            <HStack space={1}>
              <Icon name="star" color="gold" />
              <Icon name="star" color="gold" />
              <Icon name="star" color="gold" />
              <Icon name="star" color="gold" />
              <Icon name="star" color="gold" />
            </HStack>
            <Text>{item.price}$</Text>
            <Button
              _text={{
                color: 'white',
              }}
              shadow="4"
              bg="blue.400"
              p={1}
              borderRadius="md"
              onPress={() => navigation.navigate('Cart', {product: item})}>
              addToCart
            </Button>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    gap: 7,
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default Home;

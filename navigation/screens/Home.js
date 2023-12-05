import React, {useEffect, useState} from 'react';
import {getProducts} from '../../src/service/apiService';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Text, HStack, View, Image, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const jsonData = await getProducts();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text textTransform="uppercase" fontSize="sm" fontWeight="bold">
        All
      </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Text>{item.category}</Text>
                <TouchableHighlight
                  onPress={() =>
                    navigation.navigate('Detail', {product: item})
                  }>
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
                onPress={() => {
                  navigation.navigate('Cart', {product: item});
                }}>
                addToCart
              </Button>
            </View>
          )}
        />
      )}
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

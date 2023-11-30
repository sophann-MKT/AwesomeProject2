import React, {useEffect, useState} from 'react';
import {getProducts} from '../../src/service/apiService';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {Box, Text, HStack, VStack, Pressable, View, Image} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
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
              <Text>{item.category}</Text>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{uri: `${item.image}`}}
                  alt=""
                />
              </View>
              <Text>{item.price}$</Text>
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
    borderWidth: 0.4,
    borderRadius: 8,
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Home;

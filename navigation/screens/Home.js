import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image} from 'react-native';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={{flex: 2, padding: 24, backgroundColor: 'white'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <>
              <Text>{item.price}</Text>
              <Text>{item.category}</Text>
              <Text>{item.rating.rate}</Text>
              <Text>{item.rating.count}</Text>
              <Image
                style={{width: 200, height: 200}}
                source={{uri: `${item.image}`}}
              />
            </>
          )}
        />
      )}
    </View>
  );
};

export default Home;

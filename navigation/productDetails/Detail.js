import {View, Text, Button, Image, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

function Detail({route, navigation}) {
  const {product} = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
      p="20">
      <Image
        source={{uri: `${product.image}`}}
        resizeMode="contain"
        alt=""
        width={200}
        height={200}
      />
      <Text fontWeight="bold">{product.title}</Text>
      <HStack space={1}>
        <Icon name="star" color="gold" />
        <Icon name="star" color="gold" />
        <Icon name="star" color="gold" />
        <Icon name="star" color="gold" />
        <Icon name="star" color="gold" />
      </HStack>
      <View
        style={{
          display: 'inline-block',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          gap: 20,
        }}>
        <Text fontStyle="italic">Rating:{product.rating.rate}</Text>
        <Text fontStyle="italic">Review:{product.rating.count}</Text>
      </View>
      <Text>{product.description}</Text>
    </View>
  );
}

export default Detail;

import {View, Text, Button, Image, HStack} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

function Cart({route, navigation}) {
  const {product} = route.params;

  return (
    <View
      flex={1}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap="20"
      bg="white">
      <Image
        source={{uri: `${product.image}`}}
        resizeMode="contain"
        alt=""
        width={70}
        height={70}
      />
      <View alignItems="center">
        <Text>{product.price}$</Text>
      </View>
      <View>
        <Text>+</Text>
        <Text>{product.id}</Text>
        <Text>-</Text>
      </View>

      <HStack justifyContent="space-between" bg="red.100">
        <Text>Goods: </Text>
        <Text>{product.price}$</Text>
      </HStack>
      <HStack justifyContent="space-between" bg="red.100">
        <Text>Delivery: </Text>
        <Text>0.00$</Text>
      </HStack>
      <HStack justifyContent="space-between" bg="red.100">
        <Text>Total Price: </Text>
        <Text>{product.price}$</Text>
      </HStack>
    </View>
  );
}

export default Cart;

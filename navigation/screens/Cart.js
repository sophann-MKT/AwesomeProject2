import React from 'react';
import {Text, Image, HStack, VStack, Button, FlatList} from 'native-base';
import {
  incrementAmountItem,
  decrementAmountItem,
  removeItem,
} from '../../src/redux/product/productSlice';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

function Cart() {
  const dispatch = useDispatch();
  const productsInCart = useSelector(state => state.product.cart);
  const quantity = useSelector(state => state.product.quantity);

  const handleRemoveFromCart = productId => {
    console.log('Removing product with id:', productId);
    dispatch(removeItem(productId));
  };

  const handleIncrement = () => {
    dispatch(incrementAmountItem());
  };

  const handleDecrement = () => {
    dispatch(decrementAmountItem());
  };

  const calculateGoodsTotal = () => {
    return productsInCart.reduce(
      (total, product) => total + product.price * quantity,
      0,
    );
  };

  const calculateDeliveryTotal = () => {
    return quantity;
  };

  const calculateTotalPrice = () => {
    return calculateGoodsTotal() + calculateDeliveryTotal();
  };

  return productsInCart.length === 0 ? (
    <VStack flex={1} alignItems="center" mt="10">
      <Text>Your Cart is Empty</Text>
      <Icon name="shopping-cart"></Icon>
    </VStack>
  ) : (
    <VStack p="3" bg="white" shadow="3">
      <FlatList
        data={productsInCart}
        keyExtractor={item => item.id.toString()}
        renderItem={({item: productInCart}) => (
          <VStack mt="2" p="2" space="2">
            <HStack key={productInCart.id} justifyContent="space-around">
              <Image
                source={{uri: `${productInCart.image}`}}
                resizeMode="contain"
                alt=""
                width={70}
                height={70}
              />
              <VStack>
                <Text textTransform="uppercase" fontWeight="bold">
                  {productInCart.category}
                </Text>
                <Text>${productInCart.price}</Text>
                <Button
                  bg="red.400"
                  p="1"
                  w="2/3"
                  onPress={() => handleRemoveFromCart(productInCart.id)}>
                  Remove
                </Button>
              </VStack>
              <VStack alignItems="center">
                <Button bg="blue.400" p="2" onPress={handleIncrement}>
                  +
                </Button>
                <Text>{quantity}</Text>
                <Button bg="blue.400" p="2" onPress={handleDecrement}>
                  -
                </Button>
              </VStack>
            </HStack>
          </VStack>
        )}
      />
      <HStack space="2" justifyContent="space-between">
        <Text>Goods:</Text>
        <Text>${calculateGoodsTotal()}</Text>
      </HStack>
      <HStack space="2" justifyContent="space-between">
        <Text>Delivery:</Text>
        <Text>${calculateDeliveryTotal()}</Text>
      </HStack>
      <HStack space="2" justifyContent="space-between">
        <Text fontWeight="bold">Total Price:</Text>
        <Text fontSize="md" fontWeight="bold">
          ${calculateTotalPrice()}
        </Text>
      </HStack>
    </VStack>
  );
}

export default Cart;

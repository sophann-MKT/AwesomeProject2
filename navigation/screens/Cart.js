import React from 'react';
import {Text, Image, HStack, VStack, Button} from 'native-base';
import {
  incrementAmountItem,
  decrementAmountItem,
  removeProduct,
} from '../../src/redux/product/productSlice';
import {useSelector, useDispatch} from 'react-redux';

function Cart({route}) {
  const dispatch = useDispatch();
  const product = route.params.product;
  const quantity = useSelector(state => state.product.quantity);

  const handleRemoveFromCart = () => {
    console.log('Removing product with id:', product.id);
    dispatch(removeProduct(product.id));
  };

  return (
    <VStack p="3" bg="white" shadow="3">
      <HStack justifyContent="space-around">
        <Image
          source={{uri: `${product.image}`}}
          resizeMode="contain"
          alt=""
          width={70}
          height={70}
        />
        <VStack>
          <Text textTransform="uppercase" fontWeight="bold">
            {product.category}
          </Text>
          <Text>${product.price}</Text>
          <Button bg="red.400" p="1" onPress={handleRemoveFromCart}>
            Remove
          </Button>
        </VStack>
        <VStack alignItems="center">
          <Button
            bg="blue.400"
            p="2"
            onPress={() => dispatch(incrementAmountItem())}>
            +
          </Button>
          <Text>{quantity}</Text>
          <Button
            bg="blue.400"
            p="2"
            onPress={() => dispatch(decrementAmountItem())}>
            -
          </Button>
        </VStack>
      </HStack>

      <VStack mt="2" p="2" space="2">
        <HStack space="2" justifyContent="space-between">
          <Text>Goods:</Text>
          <Text>${product.price * quantity}</Text>
        </HStack>
        <HStack space="2" justifyContent="space-between">
          <Text>Delivery:</Text>
          <Text>$0.00</Text>
        </HStack>
        <HStack space="2" justifyContent="space-between">
          <Text fontWeight="bold">Total Price:</Text>
          <Text fontSize="md" fontWeight="bold">
            ${product.price * quantity}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default Cart;

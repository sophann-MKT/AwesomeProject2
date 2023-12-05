import React from 'react';
import {View, Text, Image, HStack, VStack, Button} from 'native-base';
import {
  incrementAmmountItem,
  decrementAmmountItem,
  quantity,
} from '../../src/redux/product/productSlice';
import {useSelector, useDispatch} from 'react-redux';

function Cart({route}) {
  const {product} = route.params;
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.product.quantity);

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
          <Button bg="red.500" p="1" w="2/3">
            Remmove
          </Button>
        </VStack>
        <VStack alignItems="center">
          <Button
            bg="blue.400"
            p="2"
            onPress={() => dispatch(incrementAmmountItem())}>
            +
          </Button>
          <Text>{quantity}</Text>
          <Button
            bg="blue.400"
            p="2"
            onPress={() => dispatch(decrementAmmountItem())}>
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

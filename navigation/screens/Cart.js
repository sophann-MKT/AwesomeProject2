import {View, Text, Image, HStack, VStack, Button} from 'native-base';
import React, {useState} from 'react';

function Cart({route, navigation}) {
  const {product} = route.params;
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
        </VStack>
        <VStack alignItems="center">
          <Button bg="blue.400" p="2" onPress={increment}>
            +
          </Button>
          <Text>{quantity}</Text>
          <Button bg="blue.400" p="2" onPress={decrement}>
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

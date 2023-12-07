import React, {useState} from 'react';
import {Text, HStack} from 'native-base';

function ProductFilter() {
  const [activeBar, setActiveBar] = useState('All');

  return (
    <HStack space={3}>
      <Text color="white" bg="orange.400" px="1" py="2">
        All
      </Text>
      <Text color="white" bg="orange.400" px="1" py="2">
        Men
      </Text>
      <Text color="white" bg="orange.400" px="1" py="2">
        Women
      </Text>
      <Text color="white" bg="orange.400" px="1" py="2">
        Jewelery
      </Text>
      <Text color="white" bg="orange.400" px="1" py="2">
        Electronic
      </Text>
    </HStack>
  );
}

export default ProductFilter;

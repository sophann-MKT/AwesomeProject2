import React from 'react';
import {Text, View} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

function Register() {
  return (
    <View p="10" bg="blue.400" borderRadius="15">
      <Text>Device Setting</Text>
      <Icon name="toggle-on" color="red" fontSize="24" />
      <Icon name="language" color="blue" fontSize="24" />
    </View>
  );
}

export default Register;

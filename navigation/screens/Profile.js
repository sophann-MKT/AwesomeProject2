import {Checkbox, Box, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Register({navigation}) {
  return (
    <View p="10" bg="cyan.600" borderRadius="15">
      <Text>Device Setting</Text>
      <Icon name="toggle-on" color="red" size="24" />
      <Icon name="language" color="blue" size="24" />
    </View>
  );
}

export default Register;

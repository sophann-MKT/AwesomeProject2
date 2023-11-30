import {View, Text, Button} from 'native-base';

function Detail({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go back to homepage"
        onPress={() => navigation.navigate('Detail')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
export default Detail;

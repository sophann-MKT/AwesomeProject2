import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './navigation/screens/Home';
import Cart from './navigation/screens/Cart';
import List from './navigation/screens/List';
import Profile from './navigation/screens/Profile';
import Detail from './navigation/productDetails/Detail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home2() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'List') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (rn === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen initialRouteName="Home" name="Home" component={Home} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home2" component={Home2} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

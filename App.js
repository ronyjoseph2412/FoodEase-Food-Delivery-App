import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketState from './context/BasketState';
import BasketScreen from './screens/BasketScreen';
import PreparingOrder from './screens/PreparingOrder';
import OrderConfirmatio from './screens/OrderConfirmation';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <BasketState>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen}
            options={{headerShown: false,presentation:"containedModal"}}/>
            <Stack.Screen name="PreparingOrder" component={PreparingOrder}
            options={{headerShown: false}} />
            <Stack.Screen name="OrderConfirmation" component={OrderConfirmatio}
            options={{headerShown: false}} />
          </Stack.Navigator>
        </TailwindProvider>
      </BasketState>
    </NavigationContainer>
  );
}


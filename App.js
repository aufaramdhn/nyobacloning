import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Home,
  NewsDetails,
  Orders,
  OrdersDetails,
  ScanQR,
} from './src/containers/pages';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavTab from './src/components/NavTab/NavTab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={NavTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrdersDetails" component={OrdersDetails} />
        <Stack.Screen
          name="Scan"
          component={ScanQR}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Orders = ({navigation}) => {
  return (
    <View>
      <Text>Orders</Text>
      <Button
        title="Click Me"
        onPress={() => navigation.navigate('OrdersDetails')}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});

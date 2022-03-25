import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const GopayFeatured = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={props.image} />
      <Text
        style={{
          color: 'white',
          fontSize: 13,
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default GopayFeatured;

const styles = StyleSheet.create({});

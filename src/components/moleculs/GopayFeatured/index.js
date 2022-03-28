import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const GopayFeatured = props => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={props.onPress}>
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
    </TouchableOpacity>
  );
};

export default GopayFeatured;

const styles = StyleSheet.create({});

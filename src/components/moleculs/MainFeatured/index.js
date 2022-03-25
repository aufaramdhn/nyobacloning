import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MainFeatured = props => {
  return (
    <View style={{width: '25%', alignItems: 'center'}}>
      <View
        style={{
          width: 60,
          height: 60,
          borderWidth: 1,
          borderColor: '#EFEFEF',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}>
        <Image source={props.image} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: 8,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default MainFeatured;

const styles = StyleSheet.create({});

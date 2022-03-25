import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ScrollableItem = props => {
  return (
    <View style={[props.styles, {marginLeft: 20, alignItems: 'center'}]}>
      <View style={{width: 150, height: 150}}>
        <Image
          source={props.image}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'cover',
            flex: 1,
            borderRadius: 10,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginTop: 12,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default ScrollableItem;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const NavBarIcon = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={props.image} />
      <Text
        style={{
          fontSize: 10,
          color: props.active ? '#45AB4A' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default NavBarIcon;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const GoInfo = () => {
  return (
    <View style={{padding: 20}}>
      <View style={{height: 15, width: 60, marginLeft: -4}}>
        <Image
          source={require('../../../assets/images/logo/gojek.png')}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginTop: 15,
          marginBottom: 20,
        }}>
        Complete your profile
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <View>
          <Image
            source={require('../../../assets/images/dummy/facebook-connect.png')}
          />
        </View>
        <View style={{marginLeft: 16, flex: 1}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>
            Connet With Facebook
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'normal',
              color: '#4A4A4A',
              width: '50%',
            }}>
            Login faster with verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#61A756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          alignSelf: 'flex-end',
          borderRadius: 4,
        }}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}>
          CONNECT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoInfo;

const styles = StyleSheet.create({});

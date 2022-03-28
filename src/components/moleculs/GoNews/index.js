import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const GoNews = props => {
  return (
    <View style={{paddingTop: 20, paddingHorizontal: 20}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/images/dummy/sepak-bola.jpg')}
          style={{height: 170, width: '100%', borderRadius: 8}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.3,
            borderRadius: 8,
          }}
        />
        <View
          style={{
            height: 15,
            width: 55,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/images/logo/white.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
      </View>
      <View
        style={{
          paddingTop: 15,
          paddingBottom: 20,
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
          marginBottom: 20,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>
          GO-NEWS
        </Text>
        <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A'}}>
          Dimas Drajat Selamatkan Penalti, timnas U-23 kalahkan Brunei
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#61A756',
            paddingHorizontal: 12,
            paddingVertical: 11,
            alignSelf: 'flex-end',
            borderRadius: 4,
            marginTop: 10,
          }}
          onPress={props.onPress}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoNews;

const styles = StyleSheet.create({});

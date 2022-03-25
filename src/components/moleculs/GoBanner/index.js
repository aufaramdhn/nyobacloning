import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const GoBanner = () => {
  return (
    <View
      style={{
        padding: 20,
      }}>
      <View
        style={{
          position: 'relative',
        }}>
        <Image
          source={require('../../../assets/images/dummy/food-banner.jpg')}
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
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              Free GO-FOOD Voucher
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'normal', color: 'white'}}>
              Quick, Before they run out
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#61A756',
              paddingHorizontal: 12,
              paddingVertical: 11,
              alignSelf: 'stretch',
              borderRadius: 4,
              marginTop: 10,
              marginHorizontal: 12,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
              GET VOUCHER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      />
    </View>
  );
};

export default GoBanner;

const styles = StyleSheet.create({});

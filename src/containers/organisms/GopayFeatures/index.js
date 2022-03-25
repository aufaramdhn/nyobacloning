import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import GopayFeatured from '../../../components/moleculs/GopayFeatured';

const GopayFeatures = () => {
  return (
    <View style={{marginHorizontal: 20, marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#2C5FB8',
          padding: 15,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}>
        <Image source={require('../../../assets/images/icon/gopay.png')} />
        <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
          Rp. 50.000
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 15,
          backgroundColor: '#2F65BD',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}>
        <GopayFeatured
          title="pay"
          image={require('../../../assets/images/icon/pay.png')}
        />
        <GopayFeatured
          title="Nearby"
          image={require('../../../assets/images/icon/nearby.png')}
        />
        <GopayFeatured
          title="Top Up"
          image={require('../../../assets/images/icon/topup.png')}
        />
        <GopayFeatured
          title="More"
          image={require('../../../assets/images/icon/more.png')}
        />
      </View>
    </View>
  );
};

export default GopayFeatures;

const styles = StyleSheet.create({});

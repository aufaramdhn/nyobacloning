import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainFeatured from '../../../components/moleculs/MainFeatured';

const HomeMainFeatures = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        marginTop: 18,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          marginBottom: 10,
        }}>
        <MainFeatured
          title="GO-RIDE"
          image={require('../../../assets/images/icon/go-ride.png')}
        />
        <MainFeatured
          title="GO-CAR"
          image={require('../../../assets/images/icon/go-car.png')}
        />
        <MainFeatured
          title="GO-BLUEBIRD"
          image={require('../../../assets/images/icon/go-bluebird.png')}
        />
        <MainFeatured
          title="GO-SEND"
          image={require('../../../assets/images/icon/go-send.png')}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <MainFeatured
          title="GO-SEND"
          image={require('../../../assets/images/icon/go-deals.png')}
        />
        <MainFeatured
          title="GO-PULSA"
          image={require('../../../assets/images/icon/go-pulsa.png')}
        />
        <MainFeatured
          title="GO-FOOD"
          image={require('../../../assets/images/icon/go-food.png')}
        />
        <MainFeatured
          title="GO-MORE"
          image={require('../../../assets/images/icon/go-more.png')}
        />
      </View>
      <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}} />
    </View>
  );
};

export default HomeMainFeatures;

const styles = StyleSheet.create({});

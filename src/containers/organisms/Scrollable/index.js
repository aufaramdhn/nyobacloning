import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import ScrollableItem from '../../../components/moleculs/ScrollableItem';

const ScrollableProducts = () => {
  return (
    <View>
      <View style={{height: 15, width: 60, marginLeft: 20}}>
        <Image
          source={require('../../../assets/images/logo/go-food.png')}
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
          marginHorizontal: 20,
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
          Nearby Restaurant
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
          See All
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row'}}>
        <ScrollableItem
          title="KFC Aeon Mall"
          image={require('../../../assets/images/dummy/go-food-kfc.jpg')}
        />
        <ScrollableItem
          title="Bakmi GM Aeon Mall"
          image={require('../../../assets/images/dummy/go-food-gm.jpg')}
        />
        <ScrollableItem
          title="Martabak Orins"
          image={require('../../../assets/images/dummy/go-food-orins.jpg')}
        />
        <ScrollableItem
          title="Martabak Banka"
          image={require('../../../assets/images/dummy/go-food-banka.jpg')}
        />
        <ScrollableItem
          title="Ayam Bakar Pak Boss"
          image={require('../../../assets/images/dummy/go-food-pak-boss.jpg')}
          styles={{marginRight: 10}}
        />
      </ScrollView>
      <View
        style={{
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
          marginHorizontal: 20,
          marginTop: 16,
          marginBottom: 20,
        }}
      />
    </View>
  );
};

export default ScrollableProducts;

const styles = StyleSheet.create({});

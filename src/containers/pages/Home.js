import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import GoBanner from '../../components/moleculs/GoBanner';
import GoInfo from '../../components/moleculs/GoInfo';
import GoNews from '../../components/moleculs/GoNews';
import SearchFeatured from '../../components/moleculs/SearchFeatured';
import GopayFeatures from '../organisms/GopayFeatures';
import HomeMainFeatures from '../organisms/HomeMainFeatures';
import ScrollableProducts from '../organisms/Scrollable';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{flex: 1}}>
        {/* Seacrh Bar */}
        <SearchFeatured />
        {/* Gopay */}
        <GopayFeatures />
        {/* Main Feature */}
        <HomeMainFeatures />
        {/* News */}
        <GoNews onPress={() => navigation.navigate('NewsDetails')} />
        {/* Internal Information Section */}
        <GoInfo />
        {/* Go-Food Banner Section */}
        <GoBanner />
        {/* Nearby Go-Food */}
        <ScrollableProducts />
      </ScrollView>
      {/* Nav */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

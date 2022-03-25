import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import GoBanner from './src/components/moleculs/GoBanner';
import GoInfo from './src/components/moleculs/GoInfo';
import GoNews from './src/components/moleculs/GoNews';
import SearchFeatured from './src/components/moleculs/SearchFeatured';
import GopayFeatures from './src/containers/organisms/GopayFeatures';
import HomeMainFeatures from './src/containers/organisms/HomeMainFeatures';
import NavBar from './src/containers/organisms/NavBar';
import ScrollableProducts from './src/containers/organisms/Scrollable';

const App = () => {
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
        <GoNews />
        {/* Internal Information Section */}
        <GoInfo />
        {/* Go-Food Banner Section */}
        <GoBanner />
        {/* Nearby Go-Food */}
        <ScrollableProducts />
      </ScrollView>
      {/* Nav */}
      <NavBar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

import {StyleSheet, View, TextInput, Image} from 'react-native';
import React from 'react';

const SearchFeatured = () => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
      }}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What Do You Want To Eat?"
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 25,
            height: 50,
            fontSize: 13,
            paddingLeft: 40,
            paddingRight: 15,
            backgroundColor: 'white',
            width: '100%',
          }}
        />
        <Image
          source={require('../../../assets/images/icon/search.png')}
          style={{position: 'absolute', top: 12, left: 9}}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 12,
        }}>
        <Image source={require('../../../assets/images/icon/promo.png')} />
      </View>
    </View>
  );
};

export default SearchFeatured;

const styles = StyleSheet.create({});

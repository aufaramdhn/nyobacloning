import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Camera from './Camera';

const IconWithText = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#61A756',
          borderRadius: 60,
        }}
      />
      <Text style={{maxWidth: 70, textAlign: 'center'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const IconAction = () => {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 35,
      }}>
      <Text>i</Text>
    </View>
  );
};

const ScanQR = () => {
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        {/* <Camera /> */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            marginTop: 16,
            justifyContent: 'space-between',
          }}>
          <IconAction />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 80,
            }}>
            <IconAction />
            <IconAction />
          </View>
        </View>
      </View>
      <View
        style={{height: 250, paddingHorizontal: 20, backgroundColor: 'white'}}>
        <View style={{alignItems: 'center', marginTop: 8, marginBottom: 18}}>
          <View
            style={{
              width: 40,
              height: 4,
              backgroundColor: '#E0E0E0',
              marginVertical: 1,
            }}
          />
          <View
            style={{
              width: 40,
              height: 4,
              backgroundColor: '#E0E0E0',
              marginVertical: 1,
            }}
          />
          <View />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>More Options</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#61A756'}}>
            SHORTCUT
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 14,
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              width: 180,
              justifyContent: 'space-between',
              width: 160,
              justifyContent: 'space-between',
              paddingRight: 10,
            }}>
            <IconWithText title="Phone Number" onPress={() => openCamera()} />
            <IconWithText title="GoPay Code" />
          </View>
          <View style={{width: 1, height: 60, backgroundColor: 'grey'}} />
          <View style={{flex: 1, paddingLeft: 12}}>
            <Text>
              Your recent GoPay receivers will show here, no admin fees!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScanQR;

const styles = StyleSheet.create({});

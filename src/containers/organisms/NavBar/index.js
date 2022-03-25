import {StyleSheet, View} from 'react-native';
import React from 'react';
import NavBarIcon from '../../../components/moleculs/NavBarIcon';

const NavBar = () => {
  return (
    <View style={{height: 55, backgroundColor: 'white', flexDirection: 'row'}}>
      <NavBarIcon
        title="Home"
        image={require('../../../assets/images/icon/home-active.png')}
        active
      />
      <NavBarIcon
        title="Orders"
        image={require('../../../assets/images/icon/order.png')}
      />
      <NavBarIcon
        title="Help"
        image={require('../../../assets/images/icon/help.png')}
      />
      <NavBarIcon
        title="Inbox"
        image={require('../../../assets/images/icon/inbox.png')}
      />
      <NavBarIcon
        title="Account"
        image={require('../../../assets/images/icon/account.png')}
      />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({});

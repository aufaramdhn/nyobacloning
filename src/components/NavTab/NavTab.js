import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import {Home, Orders, Help, Inbox, Account} from '../../containers/pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const NavTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'ri-home-5-fill';
          } else if (route.name === 'OrdersTab') {
            iconName = 'ri-file-list-fill';
          } else if (route.name === 'HelpTab') {
            iconName = 'ri-questionnaire-fill';
          } else if (route.name === 'InboxTab') {
            iconName = 'ri-mail-fill';
          } else if (route.name === 'AccountTab') {
            iconName = 'ri-user-fill';
          }

          // You can return any component that you like here!
          return <RemixIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#45AB4A',
        tabBarInactiveTintColor: '#545454',
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="OrdersTab" component={Orders} />
      <Tab.Screen name="HelpTab" component={Help} />
      <Tab.Screen name="InboxTab" component={Inbox} />
      <Tab.Screen name="AccountTab" component={Account} />
    </Tab.Navigator>
  );
};
export default NavTab;

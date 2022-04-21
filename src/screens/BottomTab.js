import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Elearning from './Elearning';
import Support from './Support';
import Events from './Events';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1A73E8',
        },
      }}>
      <Tab.Screen
        name="Dashbaord"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="view-dashboard-edit-outline"
              color="black"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Elearning"
        component={Elearning}
        options={{
          headerShown: false,
          tabBarLabel: 'Elearning',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="inbox-arrow-down"
              color="black"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: false,
          tabBarLabel: 'Events',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-man-profile"
              color="black"
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          headerShown: false,
          tabBarLabel: 'Support',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="chat-question"
              color="black"
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

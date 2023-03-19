/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUserGroup,
  faFeed,
  faBell,
  faUser,
  faSquarePlus,
} from '@fortawesome/free-solid-svg-icons';

import FeedsScreen from '../screens/FeedsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NetworkScreen from '../screens/NetworkScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import CreateScreen from '../screens/CreateScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#001848'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#f57576',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon size={24} icon={faFeed} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <FontAwesomeIcon size={24} icon={faUserGroup} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({color}) => {
            return (
              <FontAwesomeIcon size={24} icon={faSquarePlus} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon size={24} icon={faBell} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon size={24} icon={faUser} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

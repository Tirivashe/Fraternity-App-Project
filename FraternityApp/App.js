/**
 * Fraternity App
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ProfileTabs from './tabs/ProfileTabs';
import EventsTabs from './tabs/EventsTabs';
import PaymentsTabs from './tabs/PaymentsTabs';
import SettingsTabs from './tabs/SettingsTabs';
import AboutTabs from './tabs/AboutTabs';



const MainScreenNavigator = createBottomTabNavigator({
  Tab1: {screen: ProfileTabs},
  Tab2: {screen: EventsTabs},
  Tab3: {screen: PaymentsTabs},
  Tab4: {screen: AboutTabs},
  Tab5: {screen: SettingsTabs},
});

MainScreenNavigator.navigationOptions = {
  title: 'Example'
};

export default createAppContainer(MainScreenNavigator);

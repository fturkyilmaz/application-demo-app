import React from 'react';
import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/Setting';
import TabBarIcon from '../components/TabBarIcon';
import {useTranslation} from '../utils/languages';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const activeTintColor = Colors[colorScheme].tint;

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor}}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name="ios-settings" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: useTranslation('navigation.home'),
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

const SettingStack = createStackNavigator();

function SettingNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerTitle: useTranslation('navigation.setting')}}
      />
    </SettingStack.Navigator>
  );
}

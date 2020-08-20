import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import {useColorScheme} from 'react-native';
import useCachedResources from '../hooks/useCachedResources';

export default function Navigation() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

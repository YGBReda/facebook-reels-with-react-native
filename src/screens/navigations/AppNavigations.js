// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../Profile/Profile';
import Reels from '../Reels/ReelsPage';

const RootStack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <RootStack.Navigator
      initialRouteName={'Profile'}
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {alignSelf: 'center'},
        headerShown: false,
      }}
    >
      <RootStack.Screen name="Profile" component={Profile} />
      <RootStack.Screen name="Reels" component={Reels} />
    </RootStack.Navigator>
  );
}

export default AppNavigation;

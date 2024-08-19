import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/HomeScreen';
import ListScreen from '../Screens/ListScreen/ListScreen';
import MessageScreen from '../Screens/MessageScreen/MessageScreen';
import UserListScreen from '../Screens/MessageScreen/UserScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="User"
        options={{headerShown: false}}
        component={UserListScreen}
      />
      <Tab.Screen
        name="Message"
        options={{headerShown: false}}
        component={MessageScreen}
      />
      <Tab.Screen name="List" component={ListScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

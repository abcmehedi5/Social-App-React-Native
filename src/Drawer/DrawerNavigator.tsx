import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/Home/HomeScreen';
import ListScreen from '../Screens/ListScreen/ListScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="List" component={ListScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

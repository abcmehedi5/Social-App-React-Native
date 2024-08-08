import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../Screens/Home/HomeScreen';
import ListScreen from '../Screens/ListScreen/ListScreen';
import {Alert, Button, View} from 'react-native';
import TabNavigator from '../TabNavigator/TabNavigator';
import DrawerNavigator from '../Drawer/DrawerNavigator';
import CategoryScreen from '../Screens/CategoryScreen/CategoryScreen';
import VocabularyScreen from '../Screens/VocabularyScreen/VocabularyScreen';
import MessageScreen from '../Screens/MessageScreen/MessageScreen';
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            statusBarStyle: 'dark',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{title: 'List', gestureDirection: 'horizontal'}}
        />
        {/* category screen */}
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{title: 'Category'}}
        />

        {/* Vocabulary screen */}
        <Stack.Screen
          name="Vocabulary"
          component={VocabularyScreen}
          options={{title: 'Learn Vocabulary'}}
        />

        <Stack.Screen
          name="message"
          component={MessageScreen}
          options={{title: 'Message'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

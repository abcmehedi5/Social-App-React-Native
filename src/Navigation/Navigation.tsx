import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../Screens/Home/HomeScreen';
import ListScreen from '../Screens/ListScreen/ListScreen';
import CategoryScreen from '../Screens/CategoryScreen/CategoryScreen';
import VocabularyScreen from '../Screens/VocabularyScreen/VocabularyScreen';
import MessageScreen from '../Screens/MessageScreen/MessageScreen';
import LoginScreen from '../Screens/Auth/Login/LoginScreen';
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const isUser = false;
  const initialPath = isUser ? 'Home' : 'login';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialPath}>
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

        {/* Authentication route */}
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

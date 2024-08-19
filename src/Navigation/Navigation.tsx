import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../Screens/Home/HomeScreen';
import ListScreen from '../Screens/ListScreen/ListScreen';
import CategoryScreen from '../Screens/CategoryScreen/CategoryScreen';
import VocabularyScreen from '../Screens/VocabularyScreen/VocabularyScreen';
import MessageScreen from '../Screens/MessageScreen/MessageScreen';
import LoginScreen from '../Screens/Auth/Login/LoginScreen';
import {ActivityIndicator, View} from 'react-native';
import InboxScreen from '../Screens/MessageScreen/InboxScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          setIsUserLoggedIn(true);
        }
      } catch (error) {
        console.error('Failed to fetch access token:', error);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isUserLoggedIn ? 'Home' : 'login'}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
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
        <Stack.Screen
          name="inbox"
          component={InboxScreen}
          options={{headerShown: false}}
        />

        {/* Authentication route */}
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false, statusBarStyle: 'auto'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

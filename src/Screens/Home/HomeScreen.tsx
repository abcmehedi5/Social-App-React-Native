import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}: any) => {
  const handleLogout = async () => {
    try {
      // Clear the access token from AsyncStorage
      await AsyncStorage.removeItem('accessToken');
      Alert.alert('Success', 'You have been logged out.');
      // Navigate back to the login screen
      navigation.replace('login');
    } catch (error) {
      console.error('Logout Error:', error);
      Alert.alert('Error', 'An error occurred during logout.');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background_image.jpg')}
      style={{flex: 1, width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#2094c9" />
        <View>
          <Text style={styles.headText}>VOCABULARY</Text>
          <Text style={styles.tagLine}>
            Your Vocabulary Journey Begins Here
          </Text>

          {/* Go button */}
          <TouchableOpacity onPress={() => navigation.push('Category')}>
            <Text style={styles.GoBtn}>Go</Text>
          </TouchableOpacity>

          {/* Message button */}
          <TouchableOpacity onPress={() => navigation.push('message')}>
            <Text style={styles.MessageBtnStyle}>Go To Messenger</Text>
          </TouchableOpacity>

          {/* Logout button */}
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.LogoutBtn}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagLine: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  headText: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
    color: 'white',
    fontFamily: 'arial',
  },
  GoBtn: {
    backgroundColor: '#fff',
    width: 100,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 30,
    borderRadius: 100,
    color: '#e52e71',
    borderWidth: 1,
    borderColor: '#e33e71',
    marginTop: 30,
  },
  MessageBtnStyle: {
    backgroundColor: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    borderRadius: 100,
    color: '#e52e71',
    borderWidth: 1,
    borderColor: '#e33e71',
    marginTop: 30,
  },
  LogoutBtn: {
    backgroundColor: '#e52e71',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    borderRadius: 100,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#e33e71',
    marginTop: 30,
  },
});

export default HomeScreen;

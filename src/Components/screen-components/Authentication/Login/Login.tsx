import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
const Login = ({navigation}: any) => {
  return (
    <ImageBackground
      source={require('../../../../assets/background_image.jpg')}
      style={{flex: 1, width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#2094c9" />
        <View>
          <Text>Login Screen</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.push('message')}>
          <Text style={styles.MessageBtnStyle}>Go To Messanger</Text>
        </TouchableOpacity>
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
});
export default Login;

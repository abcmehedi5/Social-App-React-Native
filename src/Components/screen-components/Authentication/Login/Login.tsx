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
import CustomButton from '../../../Common/Button/Button';
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

        <CustomButton onPress={() => navigation.push('message')}>
          Login
        </CustomButton>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
export default Login;

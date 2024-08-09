import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import CustomButton from '../../../Common/Button/Button';

const Login = ({navigation}: any) => {
  const [formData, setFormData] = useState({username: '', password: ''});

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const {username, password} = formData;

    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    console.log('Logging in with:', username, password);
    navigation.push('message');
  };

  return (
    <ImageBackground
      source={require('../../../../assets/background_image.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#2094c9" />

        <View style={styles.logoContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.ibb.co/LrxKHTT/download.png',
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaa"
            value={formData.username}
            onChangeText={value => handleChange('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={formData.password}
            onChangeText={value => handleChange('password', value)}
          />
        </View>

        <CustomButton style={styles.loginButton} onPress={handleLogin}>
          Login
        </CustomButton>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#e52e71',
    color: 'white',
    paddingVertical: 15,
    borderRadius: 8,
    borderColor: '#e33e71',
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth:2,
    borderColor:'red',
    resizeMode: 'cover',
  },
});

export default Login;

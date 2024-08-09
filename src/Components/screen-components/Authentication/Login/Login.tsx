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
import {useLoginUserMutation} from '../../../../store/api/auth/authAPi';

const Login = ({navigation}: any) => {
  const [formData, setFormData] = useState({email: '', password: ''});
  const [loginUser] = useLoginUserMutation();

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const {email, password} = formData;

    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    const res = await loginUser({email, password});
    console.log(res)
    console.log('Logging in with:', email, password);
    // navigation.push('message');
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
            placeholder="email"
            placeholderTextColor="#aaa"
            value={formData.email}
            onChangeText={value => handleChange('email', value)}
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
    borderWidth: 2,
    borderColor: 'red',
    resizeMode: 'cover',
  },
});

export default Login;

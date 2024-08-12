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
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../../Common/Button/Button';
import {useLoginUserMutation} from '../../../../store/api/auth/authAPi';

const Login = ({navigation}: any) => {
  const [formData, setFormData] = useState({email: '', password: ''});
  const [loginUser, {isLoading}] = useLoginUserMutation(); // Adding isLoading state
  const [loading, setLoading] = useState(false);

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

    setLoading(true); // Start loading animation

    try {
      const res: any = await loginUser({email, password}).unwrap();
      console.log(res.accessToken);

      if (res.accessToken && res.status === 200) {
        console.log('Login Successful:', res.data);
        await AsyncStorage.setItem('accessToken', res.accessToken);
        // await AsyncStorage.setItem('refreshToken', res.refreshToken);
        Alert.alert('Success', res.message);

        // Navigate to the Message screen
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', 'Please check your credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Failed', 'An error occurred during login');
    } finally {
      setLoading(false); // Stop loading animation
    }
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
            placeholder="Email"
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
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
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
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  logoContainer: {
    marginBottom: 40,
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
    paddingVertical: 15,
    borderRadius: 8,
    borderColor: '#e33e71',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
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

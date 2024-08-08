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
const HomeScreen = ({navigation}: any) => {
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

          {/* go button */}
          <TouchableOpacity onPress={() => navigation.push('Category')}>
            <Text style={styles.GoBtn}>Go</Text>
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
});
export default HomeScreen;

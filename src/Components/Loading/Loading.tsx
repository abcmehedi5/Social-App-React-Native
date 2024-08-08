import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]} >
    <ActivityIndicator size="large" />
  </View>
  );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
      },
})

export default Loading;

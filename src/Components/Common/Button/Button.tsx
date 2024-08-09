import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';

interface CustomButtonProps {
  style?: ViewStyle | TextStyle;
  children: React.ReactNode;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({style, children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer]}>
      <Text style={[styles.btnStyle, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignSelf: 'center', 
  },
  btnStyle: {
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    borderRadius: 8,
    color: '#e52e71',
    borderWidth: 1,
    borderColor: '#e33e71',
  },
});

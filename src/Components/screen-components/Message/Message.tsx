import {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const Message = () => {
  const [messageText, setMessageText] = useState([]);

  const handleSubmit = (data: any) => {
    console.log({messageText});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Name"
            style={styles.inputStyle}
            onChangeText={(text: any) => setMessageText(text)}
          />
          <Button title="Send" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    padding: 9,
  },

  inputStyle: {
    borderRadius: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
  },

  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

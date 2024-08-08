import {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';

const Message = () => {
  const [messageText, setMessageText] = useState('');
  const handleMessageSubmit = () => {
    console.log({messageText});
    setMessageText('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            {/* thsi is content */}
            <ScrollView>
              <Text style={{fontSize: 30}}>Message</Text>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {/* footer */}
      <View style={styles.messageInputContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 8,
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.messageInput}
            placeholder="Type your message here"
            onChangeText={(text: any) => setMessageText(text)}
          />

          <Button onPress={handleMessageSubmit} title="send" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 5},
  contentContainer: {flex: 1, backgroundColor: 'white'},
  messageInputContainer: {backgroundColor: 'white', marginTop: 5},
  messageInput: {borderColor: 'gray', borderWidth: 1, marginTop: 5, flex: 1},
});

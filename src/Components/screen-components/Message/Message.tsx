import {useState, useEffect} from 'react';
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
  FlatList,
  ActivityIndicator,
} from 'react-native';
import io from 'socket.io-client';
import {
  useGetAllMessageQuery,
  useSaveNewMessageMutation,
} from '../../../store/api/message/messageApi';
import useUser from '../../../hooks/useUser';
import {useGetAllUsersQuery} from '../../../store/api/auth/authAPi';
import {useRoute} from '@react-navigation/native';

// Initialize socket connection
const socket = io('http://195.35.9.33:8001');

const Message = () => {
  const {user} = useUser();
  const route: any = useRoute();
  const {recipientEmailParams} = route.params;
  const [messageText, setMessageText] = useState('');
  const [displayMessages, setDisplayMessages]: any = useState([]);
  const [recipientEmail, setRecipientEmail] = useState(recipientEmailParams);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [lastMessages, setLastMessages] = useState({});
  // const {data: allUsers} = useGetAllUsersQuery({page: 1, limit: 60});
  const [saveNewMessage] = useSaveNewMessageMutation();
  useEffect(() => {
    // Setup socket event listeners
    socket.on('received_private_message', (data: any) => {
      if (data.sender === recipientEmail || data.recipient === recipientEmail) {
        setDisplayMessages((prevMessages: any) => [
          ...prevMessages,
          {
            sender: data.sender,
            message: data.message,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      }
      setLastMessages(prev => ({
        ...prev,
        [data.sender]: data.message,
      }));
    });

    socket.on('load_messages', (messages: any) => {
      const formattedMessages = messages.map((msg: any) => ({
        sender: msg.email === user.email ? 'You' : msg.email,
        message: msg.message,
        timestamp: new Date(msg.createdAt).toLocaleTimeString(),
      }));
      setDisplayMessages(formattedMessages);
    });

    socket.on('online_users', (users: any) => {
      setOnlineUsers(users);
    });
    selectUser(recipientEmailParams);
    return () => {
      socket.off('received_private_message');
      socket.off('load_messages');
      socket.off('online_users');
    };
  }, [recipientEmail, recipientEmailParams]);

  const selectUser = (email: any) => {
    setRecipientEmail(email);
    socket.emit('load_messages', {
      senderEmail: user?.email,
      recipientEmail: email,
    });
  };

  const sendPrivateMessage = async () => {
    if (recipientEmail && messageText) {
      const message = messageText;
      try {
        await saveNewMessage({
          fullName: user?.fullName,
          message,
          email: user?.email,
          recipient: recipientEmail,
        }).unwrap();
        socket.emit('send_private_message', {
          recipientEmail,
          message,
          senderEmail: user?.email,
        });
        console.log({
          fullName: user?.fullName,
          message,
          email: user?.email,
          recipient: recipientEmail,
        });
        setDisplayMessages((prevMessages: any) => [
          ...prevMessages,
          {
            sender: 'You',
            message: messageText,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
        setLastMessages(prev => ({
          ...prev,
          [recipientEmail]: messageText,
        }));
        setMessageText('');
      } catch (error) {
        console.error('Failed to save message', error);
      }
    } else {
      console.log('Recipient email or message text is missing');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            {displayMessages.map((msg: any, index: number) => (
              <View key={index} style={styles.messageContainer}>
                <Text
                  style={
                    msg.sender === 'You'
                      ? styles.messageSender
                      : styles.messageReceiver
                  }>
                  {msg.timestamp}
                </Text>
                <View
                  style={
                    msg.sender === 'You'
                      ? styles.messageBubbleSender
                      : styles.messageBubbleReceiver
                  }>
                  <Text>{msg.message}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Type your message here"
          value={messageText}
          onChangeText={text => setMessageText(text)}
        />
        <Button onPress={sendPrivateMessage} title="Send" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    backgroundColor: 'white',
  },
  messageInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  messageContainer: {
    marginBottom: 10,
  },
  messageSender: {
    textAlign: 'right',
    color: 'gray',
    fontSize: 12,
  },
  messageReceiver: {
    textAlign: 'left',
    color: 'gray',
    fontSize: 12,
  },
  messageBubbleSender: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    maxWidth: '70%',
    alignSelf: 'flex-end',
  },
  messageBubbleReceiver: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    maxWidth: '70%',
    alignSelf: 'flex-start',
  },
});

export default Message;

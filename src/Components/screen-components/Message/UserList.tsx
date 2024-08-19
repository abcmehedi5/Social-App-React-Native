import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGetAllUsersQuery} from '../../../store/api/auth/authAPi';

const UserList = () => {
  const {data: allUsers} = useGetAllUsersQuery({page: 1, limit: 60});
  const users = allUsers?.data || [];
  const navigation: any = useNavigation();

  const handleUserPress = (email: any) => {
    navigation.navigate('Message', {recipientEmailParams: email});
  };

  return (
    <View>
      {users.map((user: any) => (
        <TouchableOpacity
          key={user._id}
          style={styles.userContainer}
          onPress={() => handleUserPress(user.email)}>
          <Text style={styles.userText}>{user.email}</Text>
          <View
            style={[
              styles.statusIndicator,
              {backgroundColor: user.isOnline ? 'green' : 'red'},
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  userText: {
    fontSize: 16,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default UserList;

import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetTokenUserQuery} from '../store/api/auth/authAPi';

const useUser = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      if (token) {
        setToken(token);
      }
    };

    fetchToken();
  }, []);

  const {data: userData, isLoading, error} = useGetTokenUserQuery(token);

  const isUser = !!userData;
  const user = userData?.response;
  return {user, isLoading, error, isUser};
};

export default useUser;

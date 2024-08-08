import {useRoute} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DataTable, Text} from 'react-native-paper';
import Vocabulary from '../../Components/Vocabulary/Vocabulary';

interface VocabularyParams {
  _id: string;
  category: string;
}

const VocabularyScreen = () => {
  const route = useRoute();
  const {_id, category} = route.params as VocabularyParams;

  return (
    <ScrollView>
      <Vocabulary />
    </ScrollView>
  );
};

export default VocabularyScreen;

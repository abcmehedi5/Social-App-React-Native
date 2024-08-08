import React from 'react';
import {Text, View} from 'react-native';
import Table from '../Common/Table/Table';

type vocabularyType = {
  english: string;
  bangla: string;
};

const VocabularyCard = ({english, bangla}: vocabularyType) => {
  return (
    <View>
      <Table english={english} bangla={bangla} />
    </View>
  );
};

export default VocabularyCard;

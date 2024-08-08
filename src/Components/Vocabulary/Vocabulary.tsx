import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import VocabularyCard from './VocabularyCard';
import {useRoute} from '@react-navigation/native';
import Loading from '../Loading/Loading';

interface vocabularyType {
  category: string;
}
const Vocabulary = () => {
  const [vocabulary, setVocabulary]: any = useState([]);
  const [filterVocabulary, setFilterVocabulary] = useState([]);
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const {category} = route.params as vocabularyType;
  useEffect(() => {
    setLoading(true);
    fetch('http://192.168.1.103:5000/vocabularies/vocabulary')
      .then(response => response.json()) // Extract JSON data from the response
      .then(data => {
        setVocabulary(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://192.168.1.103:5000/vocabularies/vocabulary/category?category=${category}`,
    )
      .then(response => response.json()) // Extract JSON data from the response
      .then(data => {
        if (category == 'All') {
          setFilterVocabulary(vocabulary);
          setLoading(false);
        } else {
          setFilterVocabulary(data);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [vocabulary]);

  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView>
      <View>
        {filterVocabulary.length <= 0 || loading ? (
          <Text style={styles.noData}>Data Not Found</Text>
        ) : (
          filterVocabulary?.map((item: any) => (
            <VocabularyCard
              key={item?._id}
              english={item?.english}
              bangla={item?.bangla}
            />
          ))
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  noData: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 40,
  },

  Indictor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Vocabulary;

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import categoriesData from '../../DataJson/category.json'; // Import the local JSON file
import {Text} from 'react-native-paper';
import CategoryCard from './CategoryCard';
import Loading from '../Loading/Loading';
const Category = ({navigation}: any) => {
  // const [categores, setCategores] = useState(categoriesData);
  const [categores, setCategores] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://192.168.1.103:5000/vocabularies/category')
      .then(response => response.json()) // Extract JSON data from the response
      .then(data => {
        setCategores(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error fetching data:', error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {categores.map((item: any) => (
          <CategoryCard navigation={navigation} item={item} key={item._id} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    flex: 2,
    flexDirection: 'row',
    gap: 30,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Category;

import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {} from 'react-native';

const CategoryCard = ({item, navigation}: any) => {
  const {image, _id, category} = item;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('Vocabulary', {_id, category})}>
      <Image
        source={{uri: image}}
        style={{width: 60, height: 60, alignSelf: 'center'}}
      />
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 120,
    overflow:'hidden',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderCurve: 'continuous',
    borderRadius:10,
    backgroundColor:"#fff",
    justifyContent:'center'
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default CategoryCard;

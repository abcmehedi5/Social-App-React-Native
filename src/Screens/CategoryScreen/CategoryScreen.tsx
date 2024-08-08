import React from 'react';
import Category from '../../Components/Category/Category';
import { SafeAreaView, ScrollView } from 'react-native';

const CategoryScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Category navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;

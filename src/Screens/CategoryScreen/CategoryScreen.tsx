import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Category from '../../Components/Category/Category';

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

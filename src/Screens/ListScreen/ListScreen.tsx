import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Cards from '../../Components/Card/Cards';

function ListScreen({navigation}: any): JSX.Element {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      description:"lorem ipsum sm jonta son doe the mor non the she beviar to oke for this",
      image:
        'https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      description:"lorem ipsum sm jonta son doe the mor non the she beviar to oke for this",
      image:
        'https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      description:"lorem ipsum sm jonta son doe the mor non the she beviar to oke for this",
      image:
        'https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'orange'} />
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}: any) => <Cards item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    // // flex: 1,
    // justifyContent:'center',
    // alignItems:'center'
  },
});

export default ListScreen;

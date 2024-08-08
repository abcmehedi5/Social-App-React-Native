import {useRoute} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DataTable, Text} from 'react-native-paper';

interface VocabularyParams {
  _id: string;
  category: string;
}

type tableType = {
  english: string;
  bangla: string;
};

const Table = ({english, bangla}: tableType) => {
  return (
    <ScrollView>
      <View style={styles.table}>
        {/* header table */}
        {/* <View style={styles.row}>
          <Text style={styles.head}>English</Text>
          <Text style={styles.head}>Bangla</Text>
        </View> */}
        {/* table body */}
        <View style={styles.row}>
          <Text style={styles.cell}>{english}</Text>
          <Text style={styles.cell}>{bangla}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    // marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    width: 50,
    fontWeight: '800',
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    borderColor: 'gray',
    backgroundColor: '#ebe7df',
  },

  head: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    width: 50,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    borderColor: 'gray',
    fontWeight: '900',
    backgroundColor: '#6c9cf5',
  },
});

export default Table;

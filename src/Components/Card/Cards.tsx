import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';

type CardProps = {title: string};
const Cards = ({item}: any) => {
  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <Text variant="bodyMedium">{item.description}</Text>
      </Card.Content>
      <Card.Cover source={{uri: item.image}} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default Cards;

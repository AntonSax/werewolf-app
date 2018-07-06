import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button, Card, CardSection, Header, NumberInput } from './components/common';
import ItemCard from './components/ItemCard';
import ItemContainer from './components/ItemContainer';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Character Selection',
  };

  state = { playerCount: '' };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <ItemContainer/>

        <View style={styles.buttonViewStyle}>
          <Button 
          style={styles.buttonStyle}
          title="Char Selection"
          onPress={() =>
          navigate('Lobby')
          }>
            Create Lobby
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  activityViewStyle: {
    marginLeft: 40,
    marginRight: 40,
    flex: 1
  },
  scrollViewStyle: {
    borderWidth: 1,
    paddingBottom: 20
  },
  buttonViewStyle: {
    height: 50,
  }
}
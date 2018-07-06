import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Header, NumberInput } from './components/common';

class NewGameActivity extends React.Component {
  static navigationOptions = {
    title: 'New Game',
  };

  state = { playerCount: '' };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.activityStyle}>
        <View style={styles.activityContentStyle}>
          <Text style={styles.textStyle}>
            Type in the number of players that will be playing the game.
          </Text>
          <View style={styles.numberInputStyle}>
            <NumberInput
              onChangeText={playerCount => this.setState({ playerCount })}
              placeholder="#"
              value={this.state.playerCount}
            />
          </View>
          <View style={styles.buttonViewStyle}>
            <Button 
            style={styles.buttonStyle}
            title="Char Selection"
            onPress={() =>
            navigate('CharacterSelection')
            }>
              Continue to Character Selection
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  activityStyle: {
    flex: 1
  },
  activityContentStyle: {
    marginLeft: 50,
    marginRight: 50,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  textStyle: {
  },
  numberInputStyle: {
    marginRight: 100,
    marginLeft: 100,
    alignItems: 'center'
  },
  buttonStyle: {
  },
  buttonViewStyle: {
    height: 50
  }
}

export default NewGameActivity;
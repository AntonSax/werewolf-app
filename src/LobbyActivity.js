import React from 'react';
import { Text, View } from 'react-native';
import { Button } from './components/common';

class LobbyActivity extends React.Component {
  static navigationOptions = {
    title: 'Lobby',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Host</Text>
        <Text>Players</Text>
        <View style={styles.buttonViewStyle}>
          <Button 
          style={styles.buttonStyle}
          title="Start Game"
          onPress={() =>
          navigate('Game')
          }>
            Start Game
          </Button>
        </View>
      </View>
    )
  }
}

const styles = {
  buttonViewStyle: {
    height: 50,
  }
}

export default LobbyActivity;
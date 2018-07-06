import React from 'react';
import { Text, View } from 'react-native';

class GameActivity extends React.Component {
  static navigationOptions = {
    title: 'Game',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Gameplay</Text>
      </View>
    )
  }
}

export default GameActivity;
import React from 'react';
import { Text, View } from 'react-native';

class RulesActivity extends React.Component {
  static navigationOptions = {
    title: 'Rules',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Rules</Text>
        <Text>Are</Text>
        <Text>Important</Text>
      </View>
    )
  }
}

export default RulesActivity;
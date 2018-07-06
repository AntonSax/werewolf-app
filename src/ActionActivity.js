import React from 'react';
import { Text, View } from 'react-native';
import RotaryComponents from './components/RotaryComponents';

class ActionActivity extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Take Action</Text>
      </View>
    )
  }
}

export default ActionActivity;
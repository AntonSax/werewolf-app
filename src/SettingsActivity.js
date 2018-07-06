import React from 'react';
import { Text, View } from 'react-native';

class SettingsActivity extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>The Settings Page</Text>
      </View>
    )
  }
}

export default SettingsActivity;
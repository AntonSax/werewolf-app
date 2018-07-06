import React from 'react';
import { Text, View } from 'react-native';

class AboutActivity extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>The About Page</Text>
      </View>
    )
  }
}

export default AboutActivity;
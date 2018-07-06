import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection } from './components/common';

class MainActivity extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Card>
        <CardSection>
          <Button
            title="Play a New Game"
            onPress={() =>
            navigate('NewGame')
            }>
            New Game
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Join Game
          </Button>
        </CardSection>
        <CardSection>
          <Button
            title="Open Rules"
            onPress={() =>
            navigate('Rules')
            }>
            Rules
          </Button>
        </CardSection>
        <CardSection>
          <Button
            title="Settings"
            onPress={() =>
            navigate('Settings')
            }>
            Settings
          </Button>
        </CardSection>
        <CardSection>
          <Button
            title="Open About Page"
            onPress={() =>
            navigate('About')
            }>
            About
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default MainActivity
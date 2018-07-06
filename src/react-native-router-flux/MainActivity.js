import React from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './components/common';
import Router from './Router';

class MainActivity extends React.Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Button
            onPress={}>
            New Game
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Join Game
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Rules
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Settings
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            About
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default MainActivity